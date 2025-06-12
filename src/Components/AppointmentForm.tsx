"use client";

import { useState, useEffect, useMemo } from "react";
import { work_sans } from "@/data";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { handleServer } from "@/app/server";
import {
  generateTimeSlots,
  getDatesForSelectedDay,
  getDatesFromTodayToEndOfNextMonth,
  parseDoctorDays,
  isDoctorAvailableOnDate
} from "@/clientHelperfunction";
import { doctorSchedule } from "@/data";

type FormInputs = {
  fullname: string;
  email: string;
  phoneNumber: string;
  gender: string;
  date: string;
  time: string;
  doctor: string;
  department: string;
  availableDays: string;
  message: string;
};

const AppointmentForm = ({
  position,
  top,
  right,
  width,
}: {
  position?: string;
  top?: string;
  right?: string;
  width?: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormInputs>();

  const [submitted, setSubmitted] = useState(false);

  // Watch form values to trigger updates
  const selectedDoctor = watch("doctor");
  const selectedDate = watch("date");
  const selectedDay = watch("availableDays");

  // Memoized doctor data lookup
  const selectedDoctorData = useMemo(() => {
    return doctorSchedule.find(
      (doc) => doc.name.toLowerCase() === selectedDoctor?.toLowerCase()
    );
  }, [selectedDoctor]);

  // Available days for the selected doctor
  const availableDays = useMemo(() => {
    if (!selectedDoctorData) return [];
    return parseDoctorDays(selectedDoctorData.days);
  }, [selectedDoctorData]);

  // Available time slots based on selected doctor and date
  const availableTimeSlots = useMemo(() => {
    if (!selectedDoctorData || !selectedDate) return [];

    // Check if doctor is available on selected date
    if (!isDoctorAvailableOnDate(selectedDoctorData, selectedDate)) {
      return [];
    }

    return selectedDoctorData.timings;
  }, [selectedDoctorData, selectedDate]);

  // Reset dependent fields when doctor changes
  useEffect(() => {
    if (selectedDoctor) {
      setValue("time", ""); // Clear time when doctor changes
      setValue("availableDays", ""); // Clear days when doctor changes
      if (selectedDoctorData) {
        setValue("department", selectedDoctorData.department);
      }
    }
  }, [selectedDoctor, selectedDoctorData, setValue]);

  // Reset time when date changes
  useEffect(() => {
    if (selectedDate) {
      setValue("time", ""); // Clear time when date changes
    }
  }, [selectedDate, setValue]);

  // You can also clear the date value when the user changes availableDays, to avoid stale selections:
  useEffect(() => {
    setValue("date", "");
  }, [selectedDay, setValue]);

  // Get unique departments for the department dropdown
  const availableDepartments = useMemo(() => {
    return [...new Set(doctorSchedule.map((doc) => doc.department))].sort();
  }, []);

  // Get doctors filtered by department if department is selected first
  const availableDoctors = useMemo(() => {
    return doctorSchedule
      .map((doc) => ({
        name: doc.name,
        department: doc.department,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const genders = ["Male", "Female", "Other"];

  const dates2025 = getDatesFromTodayToEndOfNextMonth();

  const filteredDates = useMemo(() => {
    if (!selectedDay) return [];
    return getDatesForSelectedDay(selectedDay);
  }, [selectedDay]);

  const timeSlots = generateTimeSlots();

  // Submitting the form and API call to POST data in SpreadSheet
  const onSubmit = async (data: FormInputs) => {
    try {
      toast.success("Appointment Booked Successfully.", {
        style: { background: "green", color: "white" },
      });
      await handleServer(data);

      setSubmitted(true);
      reset(); // reset form fields
    } catch (error) {
      toast.error("Failed to book appointment.");
    }
  };

  return (
    <div>
      <div
        className={`relative  ${position} ${top} ${width} ${right} form_box_shadow bg-[#1F2B6C] text-white p-6 shadow-xl z-30 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between"
        >
          {/* Full Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <input
                {...register("fullname", {
                  required: "Full Name is required",
                })}
                type="text"
                placeholder="Enter Full Name"
                className="p-2 rounded text-white"
              />
              {errors.fullname && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="p-2 rounded text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+92|0)3\d{9}$/,
                    message:
                      "Invalid Pakistani phone number. Example: +923001234567 or 03001234567",
                  },
                })}
                type="tel"
                placeholder="Your Phone"
                className="p-2 rounded text-white"
              />
              {errors.phoneNumber && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <select
                {...register("gender", { required: "Please select gender" })}
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">Select Gender</option>
                {genders.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Doctors */}
            <div className="flex flex-col">
              <select
                {...register("doctor", {
                  required: "Please select a doctor",
                })}
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">Select Doctor</option>
                {availableDoctors.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
              {errors.doctor && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.doctor.message}
                </p>
              )}
            </div>

            {/* Department */}
            <div className="flex flex-col">
              <select
                {...register("department", {
                  required: "Please select a department",
                })}
                disabled={!!selectedDoctorData} // Disable if doctor is selected
                className="p-2 rounded text-white [&>option]:text-black disabled:opacity-60"
              >
                <option value="">
                  {selectedDoctorData
                    ? selectedDoctorData.department
                    : "Select Department"}
                </option>
                {availableDepartments.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.department.message}
                </p>
              )}
            </div>

            {/* Available Days */}
            <div className="flex flex-col">
              <select
                {...register("availableDays", {
                  required: "Please select an available day",
                })}
                disabled={!selectedDoctorData} // Disable if no doctor is selected
                className="p-2 rounded text-white [&>option]:text-black disabled:opacity-60"
              >
                <option value="">
                  {!selectedDoctorData
                    ? "Select Doctor First"
                    : "Select Available Day"}
                </option>
                {availableDays.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              {errors.availableDays && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.availableDays.message}
                </p>
              )}
              {selectedDoctorData && (
                <p className="text-gray-300 text-xs mt-1">
                  Doctor's schedule: {selectedDoctorData.days}
                </p>
              )}
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <select
                {...register("date", { required: "Please select a date" })}
                disabled={!selectedDay}
                className="p-2 rounded text-white [&>option]:text-black disabled:opacity-60"
              >
                <option value="">
                  {!selectedDay ? "Select Available Day First" : "Select Date"}
                </option>
                {filteredDates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.date && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.date.message}
                </p>
              )}
            </div>
          </div>

          {/* Time */}
          <div className="flex flex-col mt-3">
            <select
              {...register("time", { required: "Please select a time" })}
              className="p-2 rounded text-white"
              disabled={!selectedDoctorData || !selectedDate}
            >
              <option value="" className="text-black">
                {!selectedDoctorData
                  ? "Select Doctor First"
                  : !selectedDate
                  ? "Select Date First"
                  : availableTimeSlots.length === 0
                  ? "Doctor not available on this day"
                  : "Select Time"}
              </option>
              {availableTimeSlots.map((slot) => (
                <option key={slot} value={slot} className="text-black">
                  {slot}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.time.message}
              </p>
            )}
            {selectedDoctorData &&
              selectedDate &&
              availableTimeSlots.length === 0 && (
                <p className="text-yellow-400 text-sm mt-1">
                  {selectedDoctorData.name} is not available on this day.
                  Available days: {selectedDoctorData.days}
                </p>
              )}
          </div>

          {/* Message - (Textarea) */}
          <div className="pt-2 space-y-2">
            <textarea
              {...register("message")}
              placeholder="Message"
              rows={2}
              className="w-full p-2 rounded text-white resize-none"
            />
          </div>

          {/* Doctor Information Display */}
          {selectedDoctorData && (
            <div className="mt-3 p-3 bg-blue-900/30 rounded border border-blue-700/50">
              <h4 className="text-sm font-semibold text-blue-200 mb-2">
                Selected Doctor Info:
              </h4>
              <div className="text-xs space-y-1 text-gray-300">
                <p>
                  <span className="text-blue-200">Name:</span>{" "}
                  {selectedDoctorData.name}
                </p>
                <p>
                  <span className="text-blue-200">Department:</span>{" "}
                  {selectedDoctorData.department}
                </p>
                <p>
                  <span className="text-blue-200">Qualifications:</span>{" "}
                  {selectedDoctorData.degree}
                </p>
                <p>
                  <span className="text-blue-200">Available Days:</span>{" "}
                  {selectedDoctorData.days}
                </p>
                <p>
                  <span className="text-blue-200">Available Times:</span>{" "}
                  {selectedDoctorData.timings.join(", ")}
                </p>
              </div>
            </div>
          )}

          <input
            type="submit"
            value="Book Appointment"
            className={`${work_sans.className} bg-blue-500 text-white cursor-pointer hover:bg-blue-600 hover:opacity-100 transition duration-300 uppercase font-semibold py-2 text-base rounded my-6`}
          />
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

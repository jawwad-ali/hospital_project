"use client";

import { useState, useEffect, useMemo } from "react";
import { work_sans } from "@/data";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { handleServer } from "@/app/server";
import {
  generateTimeSlots,
  getDatesFromTodayToEndOfNextMonth,
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
  message: string;
};

// Helper function to check if selected date matches doctor's available days
const isDoctorAvailableOnDate = (
  doctor: (typeof doctorSchedule)[0],
  selectedDate: string
): boolean => {
  const date = new Date(selectedDate);
  const dayName = date
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  const doctorDays = doctor.days.toUpperCase();

  // Handle different day formats
  if (doctorDays.includes("MONDAY TO SATURDAY")) {
    return !["SUNDAY"].includes(dayName);
  }
  if (doctorDays.includes("MONDAY TO FRIDAY")) {
    return !["SATURDAY", "SUNDAY"].includes(dayName);
  }

  return doctorDays.includes(dayName);
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

  // Memoized doctor data lookup
  const selectedDoctorData = useMemo(() => {
    return doctorSchedule.find(
      (doc) => doc.name.toLowerCase() === selectedDoctor?.toLowerCase()
    );
  }, [selectedDoctor]);

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

  // const doctors = [
  //   "Dr. Aisha Siddiqua",
  //   "Dr. Anjum Sami",
  //   "Dr. Asif",
  //   "Dr. Furqan Hasheem",
  //   "Dr. Ghousia",
  //   "Dr. Jabeen Zahid",
  //   "Dr. Muhammad Ali",
  //   "Dr. Munazza Faraz",
  //   "Dr. Noorush Shamim",
  //   "Dr. Rashk Erum",
  //   "Dr. Shahid Ansari",
  //   "Dr. Sidra Masoom",
  //   "Dr. Syed Danish Ali",
  //   "Dr. Syed Fasahatullah Husseni",
  //   "Dr. Unza Shaikh",
  //   "Dr. Uzma Imran",
  // ];
  // const departments = [
  //   "General Physician",
  //   "General Surgeon",
  //   "Gynecologist",
  //   "Orthopedic Surgeon",
  //   "Pediatrician",
  //   "Physiotherapist",
  //   "Plastic Surgeon",
  // ];
  const genders = ["Male", "Female", "Other"];

  const dates2025 = getDatesFromTodayToEndOfNextMonth();
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
        className={`relative ${position} ${top} ${width} ${right} form_box_shadow bg-[#1F2B6C] text-white p-6 shadow-xl z-30`}
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
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">
                  {selectedDoctorData
                    ? selectedDoctorData.department
                    : "Select Department"}
                </option>
                {selectedDoctorData &&
                  availableDepartments.map((dep) => (
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
          </div>

          {/* Date */}
          <div className="flex flex-col mt-3">
            <select
              {...register("date", { required: "Please select a date" })}
              className="p-2 rounded text-white [&>option]:text-black"
            >
              <option value="">Select Date</option>
              {dates2025.map((d) => (
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
              <p className="text-white text-sm mt-1" role="alert">
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

          <input
            type="submit"
            value="Book Appointment"
            className={`${work_sans.className} bg-blue-500 text-white cursor-pointer hover:bg-blue-600 hover:opacity-100 transition duration-300 uppercase font-semibold py-2 text-base rounded mt-6`}
          />
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

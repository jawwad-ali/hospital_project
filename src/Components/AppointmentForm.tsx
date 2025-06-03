"use client";

import { useState } from "react";
import { work_sans } from "@/data";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { handleServer } from "@/app/server";
import {
  generateTimeSlots,
  getDatesFromTodayToEndOfNextMonth,
} from "@/clientHelperfunction";

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

const AppointmentForm = ({
  postion,
  top,
  right,
  width,
}: {
  postion?: string;
  top?: string;
  right?: string;
  width?: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const [submitted, setSubmitted] = useState(false);

  const doctors = ["Dr. Smith", "Dr. Jones", "Dr. Brown"];
  const departments = ["Cardiology", "Pediatrics", "Neurology"];
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
        className={`relative ${postion} ${top} ${width} ${right} form_box_shadow bg-[#1F2B6C] text-white p-6 shadow-xl z-30`}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between"
        >
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

            <div className="flex flex-col">
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

            <div className="flex flex-col">
              <select
                {...register("time", { required: "Please select a time" })}
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">Select Time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.time.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <select
                {...register("doctor", {
                  required: "Please select a doctor",
                })}
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">Select Doctor</option>
                {doctors.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.doctor && (
                <p className="text-red-400 text-sm mt-1" role="alert">
                  {errors.doctor.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <select
                {...register("department", {
                  required: "Please select a department",
                })}
                className="p-2 rounded text-white [&>option]:text-black"
              >
                <option value="">Select Department</option>
                {departments.map((dep) => (
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

          <div className="pt-2 space-y-2">
            <textarea
              {...register("message")}
              placeholder="Message"
              rows={2}
              className="w-full p-2 rounded text-white resize-none"
            />
            {/* {errors.message && (
              <p className="text-red-400 text-sm mt-1" role="alert">
                {errors.message.message}
              </p>
            )} */}
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

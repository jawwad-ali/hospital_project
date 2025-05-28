"use client"
import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ email: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidEmail = validateEmail(formData.email);
    if (!isValidEmail) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }
    setErrors({ email: "" });
    setSubmitted(true);
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  const doctors = ["Dr. Smith", "Dr. Jones", "Dr. Brown"];
  const departments = ["Cardiology", "Pediatrics", "Neurology"];
  const genders = ["Male", "Female", "Other"];

  const dates2025 = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(2025, 0, i + 1);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });

  return (
    <div>
      <div
        className="relative  bg-[#1F2B6C] text-white p-6 shadow-xl z-30"
        style={{ height: "417.81px", width: "461px" }}
      >
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 rounded text-white"
                required
              />
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 rounded text-white"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 rounded text-white"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="p-2 rounded text-white [&>option]:text-black"
                required
              >
                <option value="">Select Gender</option>
                {genders.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <select
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-2 rounded text-white [&>option]:text-black"
                required
              >
                <option value="">Date</option>
                {dates2025.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-2 rounded text-white [&>option]:text-black"
                required
              >
                <option value="">Time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="p-2 rounded text-white [&>option]:text-black"
                required
              >
                <option value="">Doctor</option>
                {doctors.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="p-2 rounded text-white [&>option]:text-black"
                required
              >
                <option value="">Department</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
            </div>
            <div className="pt-2 space-y-2">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full p-2 rounded text-white resize-none"
              />
              
            </div>

            <button
                type="submit"
                className="bg-[#ED1B24] cursor-pointer hover:bg-red-700  transition duration-300 text-white font-semibold py-2 rounded mt-17"
              >
              Submit
            </button>

          </form>
        ) : (
          <div className="text-center text-white flex flex-col justify-center h-full">
            <h3 className="text-xl font-bold mb-2">
              Appointment Request Sent!
            </h3>
            <p>We will get back to you shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
            >
              Edit Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;

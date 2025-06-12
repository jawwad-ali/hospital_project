import { doctorSchedule } from "@/data";

// This function reterives the date from current date to the end of the next month
export function getDatesFromTodayToEndOfNextMonth(locale = "en-US") {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-based: Jan=0, Feb=1...

  // Calculate last day of next month
  const nextMonth = currentMonth + 1;
  const lastDayNextMonth = new Date(currentYear, nextMonth + 1, 0).getDate();

  // Start date = today (day of month)
  const startDay = today.getDate();

  // Generate dates from today to last day of next month
  const datesRange = [];

  // Last day of current month
  const lastDayCurrentMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  // Current month: from today till end
  for (let day = startDay; day <= lastDayCurrentMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    datesRange.push(
      date.toLocaleDateString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }

  // Next month: from 1 till last day
  for (let day = 1; day <= lastDayNextMonth; day++) {
    const date = new Date(currentYear, nextMonth, day);
    datesRange.push(
      date.toLocaleDateString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }

  return datesRange;
}

// Time Slots from 9AM - 7PM
export const generateTimeSlots = (startHour = 9, endHour = 19) => {
  const slots = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    slots.push(`${displayHour}:00 ${period}`);
  }
  return slots;
};

// Return dates that match allowed day names (e.g., ["MONDAY", "FRIDAY"])
export const getDatesForSelectedDay = (day: string): string[] => {
  const allDates = getDatesFromTodayToEndOfNextMonth();
  return allDates.filter((dateStr) => {
    const date = new Date(dateStr);
    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    }).toUpperCase();
    return dayName === day.toUpperCase();
  });
};

// Helper function to parse doctor's available days into individual day options
export const parseDoctorDays = (daysString: string): string[] => {
  const days = daysString.toUpperCase();

  if (days.includes("MONDAY TO SATURDAY")) {
    return ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  }
  if (days.includes("MONDAY TO FRIDAY")) {
    return ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
  }

  // Split by comma and clean up
  return days
    .split(/[,&]/)
    .map((day) => day.trim())
    .filter((day) => day.length > 0);
};

// Helper function to check if selected date matches doctor's available days
export const isDoctorAvailableOnDate = (
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
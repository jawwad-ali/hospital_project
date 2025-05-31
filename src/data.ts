import { Calendar, Users, Phone, MapPin, Mail, Clock } from "lucide-react";
import {
  IBM_Plex_Sans,
  Work_Sans,
  Yeseva_One,
  Poppins,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights you use
  display: "swap",
  variable: "--font-work-sans",
});

export const navbarInfoItem = [
  {
    id: 1,
    Icon: Phone,
    title: "EMERGENCY",
    value: "(237) 681-812-255",
  },
  {
    id: 2,
    Icon: Clock,
    title: "WORK HOUR",
    value: "09:00 - 20:00 Everyday",
  },
  {
    id: 3,
    Icon: MapPin,
    title: "LOCATION",
    value: "0123 Some Place",
  },
];

export const contactData = [
  {
    id: 1,
    icon: Phone,
    title: "EMERGENCY",
    details: ["(237) 681-812-255", "(237) 666-331-894"],
  },
  {
    id: 2,
    icon: MapPin,
    title: "LOCATION",
    details: ["0123 Some place", "9876 Some country"],
  },
  {
    id: 3,
    icon: Mail,
    title: "EMAIL",
    details: ["fildineeesoe@gmit.com", "myebstudios@gmail.com"],
  },
  {
    id: 4,
    icon: Clock,
    title: "WORKING HOURS",
    details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
  },
];

export const features = [
  { text: "A Passion for Healing" },
  { text: "5-Star Care" },
  { text: "All our best" },
  { text: "Believe in Us" },
  { text: "Always Caring" },
  { text: "A Legacy of Excellence" },
];

export const tableHeadings = [
  "Doctors Name",
  "Department",
  "Degree",
  "Timings",
  "Days",
];

export const doctorSchedule = [
  {
    name: "DR. UZMA IMRAN",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MRCOG (UK), FRCOG(UK)",
    timings: ["9:00 AM TO 2:00 PM"],
    days: "MONDAY, WEDNESDAY, FRIDAY",
  },
  {
    name: "DR. JABEEN ZAHID",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, FCPS",
    timings: ["11:30 AM TO 2:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. ANJUM SAMI",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MAIM U/S",
    timings: ["1:00 PM TO 3:00 PM"],
    days: "MONDAY",
  },
  {
    name: "DR. RASHK E ERUM",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS",
    timings: ["6:00 PM TO 8:00 PM", "4:00 PM TO 5:00 PM"],
    days: "MONDAY, WEDNESDAY, FRIDAY",
  },
  {
    name: "DR. MUNAZZA FARAZ",
    department: "GYNAECOLOGIST",
    degree: "MBBS, FCPS",
    timings: ["5:00 PM TO 7:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. GHOUSIA",
    department: "GYNAECOLOGIST",
    degree: "MBBS, FCPS",
    timings: ["5:00 PM TO 7:00 PM"],
    days: "FRIDAY, SUNDAY",
  },
  {
    name: "DR. NOORUSH SHAMMI",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MRCOG",
    timings: ["8:00 PM TO 10:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. SYED FASAHATULLAH",
    department: "PEDIATRICIAN",
    degree: "MBBS, DCH",
    timings: ["1:00 PM TO 3:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
  {
    name: "DR. MUHAMMAD ALI",
    department: "PEDIATRICIAN",
    degree: "MBBS, DCH",
    timings: ["5:00 PM TO 7:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
  {
    name: "DR. SHAHID ANSARI",
    department: "PEDIATRICIAN",
    degree: "MBBS, DCH",
    timings: ["1:00 PM TO 3:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
  {
    name: "DR. FURQAN HASHEEM",
    department: "GENERAL PHYSICIAN",
    degree: "MBBS, MCPS",
    timings: ["12:00 NOON TO 1:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
  {
    name: "DR. IMRAN AWAN",
    department: "GENERAL PHYSICIAN",
    degree: "MBBS, MCPS",
    timings: ["12:00 PM TO 8:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
  {
    name: "DR. SIDRA MASOOM",
    department: "GENERAL SURGEON",
    degree: "MBBS, FCPS, ASSISTANT PROFESSOR DOW UNIVERSITY",
    timings: ["7:00 PM TO 9:00 PM"],
    days: "WEDNESDAY, SATURDAY",
  },
  {
    name: "DR. AISHA SIDDIQUA",
    department: "GENERAL SURGEON",
    degree: "MBBS, FCPS",
    timings: ["7:00 PM TO 8:00 PM"],
    days: "MONDAY, TUESDAY, THURSDAY, FRIDAY",
  },
  {
    name: "DR. SYED DANISH ALI",
    department: "ORTHOPEDIC SURGEON",
    degree:
      "MBBS, FCPS (ORTHO), MRCP(S) (GLASGOW), FELLOWSHIP (ILIZAROV-RUSSIA)",
    timings: ["8:00 PM TO 10:00 PM"],
    days: "MONDAY & WEDNESDAY",
  },
  {
    name: "ASSOCIATE PROF. PAF BASE FAISAL", // This seems to be part of Dr. Syed Danish Ali's entry or a separate entity without a clear doctor name. Assuming it's related to Dr. Syed Danish Ali based on proximity and formatting, but clarification might be needed. For now, creating a separate entry as the structure implies a new individual or role.
    department: "", // No department specified, might be implicitly Orthopedic or a general title
    degree: "", // No degree specified
    timings: ["5:00 PM TO 6:00 PM"],
    days: "TUESDAY, THURSDAY, FRIDAY",
  },
  {
    name: "DR. UNZA SHAIKH",
    department: "PLASTIC SURGEON",
    degree: "MBBS, MCPS, FCPS",
    timings: ["7:00 PM TO 8:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. ASIF",
    department: "PHYSIOTHERAPIST",
    degree: "DPT",
    timings: ["6:00 PM TO 9:00 PM"],
    days: "MONDAY TO SATURDAY",
  },
];

export const contactDetails = [
  { type: "EMERGENCY", label: "Call:", details: ["(237) 681-812-255"] },
  { type: "EMAIL", label: "Email:", details: ["fildineeesoe@gmail.com"] },
  {
    type: "ADDRESS",
    label: "Address:",
    details: ["0123 Some place", "Karachi, Pakistan"],
  },
];

export const importantLinks = [
  "Appointment",
  "Doctors",
  "Services",
  "About Us",
];

export const doctors = [
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    imageUrl: "/Rectangle 20.jpg",
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    imageUrl: "/DoctorImage2.jpg",
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    imageUrl: "/DoctorImage3.jpg",
  },
];

export const specialtiesWithIcon = [
  { title: "Neurology", icon: "/heart.jpg" },
  { title: "Bones", icon: "/heart.jpg" },
  { title: "Oncology", icon: "/heart.jpg" },
  { title: "Otorhinolaryngology", icon: "/heart.jpg" },
  { title: "Ophthalmology", icon: "/heart.jpg" },
  { title: "Cardiovascular", icon: "/heart.jpg" },
  { title: "Pulmonology", icon: "/heart.jpg" },
  { title: "Renal Medicine", icon: "/heart.jpg" },
  { title: "Gastroenterology", icon: "/heart.jpg" },
  { title: "Urology", icon: "/heart.jpg" },
  { title: "Dermatology", icon: "/heart.jpg" },
  { title: "Gynaecology", icon: "/heart.jpg" },
];

export const scheduleHours = [
  { day: "Monday", hours: "09:00 AM - 07:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 07:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 07:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 07:00 PM" },
  { day: "Friday", hours: "09:00 AM - 07:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 07:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const actionButtons = [
  {
    title: "Book an Appointment",
    icon: Calendar,
    bgColor: "bg-[#0387B3]",
    hoverColor: "hover:bg-teal-700",
    href: "/contact",
  },
  {
    title: "Book an Consultant",
    icon: Users,
    bgColor: "bg-[#BFD2F8]",
    hoverColor: "hover:bg-purple-400",
    // href: "/consultant",
    color: "text-[#1F2B6C]",
  },
  {
    title: "Urgent Care 24/7",
    icon: Clock,
    bgColor: "bg-[#159EEC]",
    hoverColor: "hover:bg-blue-600",
    href: "#footer",
  },
];

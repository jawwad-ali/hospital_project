import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Work_Sans } from "next/font/google";
import { Yeseva_One } from "next/font/google";

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
]

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
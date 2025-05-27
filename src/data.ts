import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { Work_Sans } from "next/font/google";
import { Yeseva_One } from "next/font/google"

export const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
})

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
  ]
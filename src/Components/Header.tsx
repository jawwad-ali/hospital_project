"use client"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

export default function HospitalHeader() {
  return (
    <div>

      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>

      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  )
}


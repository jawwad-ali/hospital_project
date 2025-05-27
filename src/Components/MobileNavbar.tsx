"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

import {
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

const MobileNavbar = () => {
  return (
    <Sheet >
      <SheetTrigger className="p-5 bg-[#ED1B24] w-full text-white cursor-pointer">
        <AlignJustify />
      </SheetTrigger>

      <SheetContent side="left" className="bg-white">
        <SheetHeader>
          <SheetTitle>
            <div className="p-2 rounded-md ml-10">
              <Image
                src="/logo.jpg"
                alt="Hospital logo"
                width={45}
                height={16}
              />
            </div>
            <div className="uppercase font-bold">
              <span>AZIZA HUSSENI HOSPITAL</span>
            </div>
          </SheetTitle>

          <SheetDescription>
            <div className="h-[35dvh] flex flex-col justify-between gap-4 mt-5">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">EMERGENCY</div>
                  <div>(237) 681-812-255</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">WORK HOUR</div>
                  <div>09:00 - 20:00 Everyday</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full bg-blue-50 p-2 mr-2">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">LOCATION</div>
                  <div>0123 Some Place</div>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

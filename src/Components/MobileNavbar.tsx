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

import { Phone, Clock, MapPin } from "lucide-react";
import TopNavbarInfo from "./TopNavbarInfo";
import Menus from "./Menus";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-5 overflow-scroll bg-[#ED1B24] w-full text-white cursor-pointer">
        <AlignJustify />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-white flex flex-col h-full max-h-screen overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            <TopNavbarInfo />
          </SheetTitle>
        </SheetHeader>
        <Menus />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

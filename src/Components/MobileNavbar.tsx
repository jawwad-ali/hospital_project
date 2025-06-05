"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { poppins } from "@/data";
import TopNavbarInfo from "./TopNavbarInfo";
import Menus from "./Menus";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-5 overflow-scroll bg-[#ED1B24] flex justify-center items-center w-full text-white cursor-pointer">
        <AlignJustify />
        <div className="flex justify-center items-center w-full">
          <Image src='/navbar_logo.png' alt='navbar Logo' height={35} width={35} />
          <h1 className={`text-white text-[12px] uppercase ${poppins.className} pl-2 font-bold`}>Aziza husseni hospital</h1>
        </div>
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

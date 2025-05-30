import { navbarInfoItem, work_sans } from "@/data";
import React from "react";
import ContactInfo from "./ContactInfo";
import Image from "next/image";

const TopNavbarInfo = () => {
  return (
    <div>
      <div className="bg-white py-2 border-b">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row lg:justify-between lg:items-center">
          <div className="flex lg:items-center">
            <div className="p-2 rounded-md lg:ml-10">
              <Image
                src="/logo.jpg"
                alt="Hospital logo"
                width={45}
                height={16}
              />
            </div>
            <div className={` ${work_sans.className} hidden lg:flex lg:justify-center lg:items-center uppercase font-bold`}>
              <span className="flex-shrink-0 pl-2">AZIZA HUSSENI HOSPITAL</span>
            </div>
          </div>

          {/* navbar info items */}
          <div
            className={`${work_sans.className} flex flex-wrap lg:justify-center md:justify-end gap-4 mt-2 md:mt-0`}
          >
            {navbarInfoItem.map(({ id, Icon, title, value }: any) => (
              <div key={id} className="lg:flex items-center">
                <div className="rounded-full p-2 mr-2">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div className="text-xs">
                  <div className="text-black font-semibold">{title}</div>
                  <div className="text-[#159EEC]">
                    {ContactInfo(title, value)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbarInfo;

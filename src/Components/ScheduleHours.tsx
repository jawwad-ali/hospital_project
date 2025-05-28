import { scheduleHours } from "@/data";
import { Phone } from "lucide-react";
import React from "react";

const ScheduleHours = () => {
  return (
    <div>
      {/* Right Section - Schedule Hours */}
      <div className="bg-[#1F2B6C] p-8 rounded-lg text-white">
        <h3 className="text-3xl md:text-5xl p-3 lg:p-5 font-bold mb-8">Schedule hours</h3>

        {/* Schedule List */}
        <div className="space-y-4 mb-8">
          {scheduleHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2"
            >
              <span className="text-gray-300 font-medium">{schedule.day}</span>
              <span className="text-gray-400 h-[1px] w-8 bg-slate-300 hidden md:block" />
              <div className="flex items-center space-x-4">
                <span
                  className={`flex-shrink-0 text-sm ${
                    schedule.hours === "Closed" ? "text-gray-400" : "text-white"
                  }`}
                >
                  {schedule.hours}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="border-t border-slate-600 pt-6">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-700 p-2 rounded-full">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Emergency</p>
              <p className="text-white font-semibold">(237) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleHours;

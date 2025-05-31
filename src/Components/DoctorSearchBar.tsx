"use client";

import type React from "react";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function DoctorSearchBar() {
  const [doctorName, setDoctorName] = useState("");
  const [location, setLocation] = useState("");
  const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Searching for:", { doctorName, location });
  };

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ];
  const doctorSpecialties = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Pediatrician",
    "Gynecologist",
  ];

  return (
    <div className="w-full lg:w-10/12 lg:py-6">
      <form onSubmit={handleSearch}>
        <div className="bg-white lg:rounded-full rounded-md shadow-lg w-full py-2 px-4">
          {/* Container for desktop: flex row, mobile: stacked */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            {/* Doctor Name - full width always */}
            <div className="relative w-full mb-3 md:mb-0">
              <div
                className="flex items-center lg:pl-4 py-3 cursor-pointer rounded-full border border-transparent hover:border-gray-300"
                onClick={() => setDoctorDropdownOpen(!doctorDropdownOpen)}
              >
                <span className="text-black mr-2">
                  {/* Doctor icon SVG here */}
                </span>
                <input
                  type="text"
                  placeholder="Doctor's Name"
                  className="outline-none border-none bg-transparent flex-1 text-gray-700 text-sm min-w-0"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>

              {doctorDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                  <div className="py-1">
                    {doctorSpecialties.map((specialty, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setDoctorName(specialty);
                          setDoctorDropdownOpen(false);
                        }}
                      >
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Location + Search Button container */}
            <div className="flex lg:flex-row flex-col gap-y-4 w-full">
              {/* Location input, flex-1 to fill space */}
              <div className="relative flex-1">
                <div
                  className="flex items-center lg:pl-4 py-3 cursor-pointer rounded-full border border-transparent hover:border-gray-300"
                  onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                >
                  <span className="text-black mr-2">
                    {/* Location icon SVG here */}
                  </span>
                  <input
                    type="text"
                    placeholder="Location"
                    className="outline-none border-none bg-transparent flex-1 text-gray-700 text-sm min-w-0"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>

                {locationDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg z-10 max-h-60 overflow-auto">
                    <div className="py-1">
                      {locations.map((loc, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setLocation(loc);
                            setLocationDropdownOpen(false);
                          }}
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search button */}
              <button
                type="submit"
                className="bg-[#848484] ml-2 hover:bg-gray-500 hidden lg:flex transition-colors duration-200 rounded-md lg:rounded-full p-3 flex-shrink-0"
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              <button
                type="submit"
                className="bg-[#848484] flex justify-center items-center text-center lg:hidden hover:bg-gray-500 transition-colors duration-200 rounded-md lg:rounded-full p-3 flex-shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

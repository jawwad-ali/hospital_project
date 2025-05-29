"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { deleteRow, fetchSheetData } from "../../src/app/server";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";

const AppointmentListComponent = () => {
  const [paitentsList, setData] = useState<any[][]>([]);

  // Data fetching in use Effect
  useEffect(() => {
    const getList = async () => {
      const data = await fetchSheetData();
      setData(data);
    };
    getList();
  }, []);

  //   Early Return
  if (!paitentsList || paitentsList.length === 0) return <p>No Data found.</p>;

  // Extract headers (first row)
  const headers = paitentsList[0];

  // Extract rows (all rows except first)
  const rows = paitentsList.slice(1);

  //   Calling the DELETE API
  async function handleDelete(rowIndex: number) {
    const result = await deleteRow(rowIndex);

    if (result) {
      setData((prev) => prev.filter((_, idx) => idx !== rowIndex));
      toast.error("Data Deleted Successfully.", {
        style: {
          background: "red",
          color: 'white'
        },
      });
    } else {
      alert("Failed to delete row: " + result);
    }
  }

  return (
    <div>
      <div className="max-w-6xl overflow-x-scroll mx-auto p-4">
        <table className="table-auto w-full bg-white rounded-lg shadow-sm border border-gray-200">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="text-left py-4 px-6 font-semibold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase"
                >
                  {header}
                </th>
              ))}

              {/* Add extra Action header */}
              <th className="text-left py-4 px-6 font-semibold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-25"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-4 px-6 text-gray-800 font-medium text-sm"
                  >
                    {cell}
                  </td>
                ))}
                {/* Add Action cell with delete icon */}
                <td className="py-4 px-6 text-gray-800 font-medium text-sm cursor-pointer hover:text-red-600">
                  <Trash2
                    onClick={() => handleDelete(rowIndex)}
                    size={18}
                    className="text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentListComponent;

"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { deleteRow, fetchSheetData } from "../../src/app/server";
import { Toaster } from "@/Components/ui/sonner";
import { toast } from "sonner";
import { Spinner } from "../Components/ui/spinner";

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
  if (!paitentsList || paitentsList.length === 0)
    return <Spinner size="sm" className="bg-black dark:bg-white" />;

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
          color: "white",
        },
      });
    } else {
      alert("Failed to delete row: " + result);
    }
  }

  // Before rendering, map each row to ensure it has the same length as headers:
  const normalizedRows = rows.map((row) => {
    // Create a new row padded with empty strings if length is less than headers
    const paddedRow = [...row];
    while (paddedRow.length < headers.length) {
      paddedRow.push("");
    }
    return paddedRow;
  });

  const NotFound = () => {
    return (
      <div className="max-w-6xl mx-auto mt-10">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="text-left py-4 px-6 font-bold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase"
                >
                  {header}
                </th>
              ))}
              {/* Extra Action header */}
              <th className="text-left py-4 px-6 font-bold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>
        </table>

        <div className="max-w-3xl mx-auto text-center h-[50vh] flex items-center justify-center">
          No Appointments Booked
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-6xl min-h-screen overflow-x-scroll mx-auto p-4">
        <table className="table-auto w-full bg-white rounded-lg shadow-sm border border-gray-200">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="inline-flex flex-shrink-0 text-left py-4 px-6 font-bold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase"
                >
                  {header}
                </th>
              ))}

              {/* Add extra Action header */}
              <th className="text-left py-4 px-6 font-bold border-b-2 border-red-500 text-gray-800 text-sm tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {normalizedRows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-25"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="py-4 px-6 text-gray-800 font-medium text-sm inline-flex flex-shrink-0"
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

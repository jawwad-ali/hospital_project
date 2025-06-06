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
    return <Spinner size="sm" className="bg-red-500 dark:bg-white" />;

  // Extract headers (first row)
  const headers = paitentsList[0];

  // Extract rows (all rows except first)
  const rows = paitentsList.slice(1);

  //   Calling the DELETE API
  async function handleDelete(rowIndex: number) {
    // Add 1 to skip the header row in the spreadsheet
    const actualRowIndex = rowIndex + 1;
    const result = await deleteRow(actualRowIndex);

    if (result) {
      // Remove from local state - use the original rowIndex for local array
      setData((prev) => {
        const newData = [...prev];
        // Remove the row at index rowIndex + 1 (accounting for header)
        newData.splice(rowIndex + 1, 1);
        return newData;
      });
      
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

  // Define column widths for better alignment
  const getColumnWidth = (index: number, header: string) => {
    const widthMap: { [key: string]: string } = {
      'NAME': 'w-32',
      'EMAIL': 'w-48',
      'PHONE NUMBER': 'w-36',
      'GENDER': 'w-20',
      'DATE': 'w-28',
      'TIME': 'w-24',
      'DOCTOR': 'w-40',
      'DEPARTMENT': 'w-32',
      'MESSAGE': 'w-64',
      'ACTION': 'w-20'
    };
    
    return widthMap[header?.toUpperCase()] || 'w-32';
  };

  const NotFound = () => {
    return (
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`text-left py-4 px-3 font-bold border-b-2 border-red-500 text-gray-800 text-xs tracking-wider uppercase`}
                  >
                    <div className="truncate" title={header}>
                      {header}
                    </div>
                  </th>
                ))}
                {/* Extra Action header */}
                <th className="text-left py-4 px-3 font-bold border-b-2 border-red-500 text-gray-800 text-xs tracking-wider uppercase w-20">
                  ACTION
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="max-w-3xl mx-auto text-center h-[50vh] flex items-center justify-center">
          No Appointments Booked
        </div>
      </div>
    );
  };

  // Show NotFound component if there are no data rows (only header exists)
  if (paitentsList?.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="max-w-7xl min-h-screen mx-auto p-4">
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
          <table className="w-full border-collapse min-w-max table-fixed">
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`text-left py-4 px-3 font-bold border-b-2 border-red-500 text-gray-800 text-xs tracking-wider uppercase ${getColumnWidth(idx, header)}`}
                  >
                    <div className="truncate" title={header}>
                      {header}
                    </div>
                  </th>
                ))}

                {/* Add extra Action header */}
                <th className="text-left py-4 px-3 font-bold border-b-2 border-red-500 text-gray-800 text-xs tracking-wider uppercase w-20">
                  ACTION
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
                      className={`py-4 px-3 text-gray-800 font-medium text-sm ${getColumnWidth(cellIndex, headers[cellIndex])}`}
                    >
                      <div 
                        className="truncate" 
                        title={cell}
                      >
                        {cell}
                      </div>
                    </td>
                  ))}
                  {/* Add Action cell with delete icon */}
                  <td className="py-4 px-3 text-gray-800 font-medium text-sm cursor-pointer hover:text-red-600 w-20">
                    <div className="flex justify-center">
                      <Trash2
                        onClick={() => handleDelete(rowIndex)}
                        size={18}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AppointmentListComponent;
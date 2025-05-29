"use server";
import { google } from "googleapis";

export const handleServer = async (data: any) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },

      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.name,
            data.email,
            data.phone,
            data.gender,
            data.date,
            data.time,
            data.doctor,
            data.department,
            data.message,
          ],
        ],
      },
    });
    return data;
  } catch (err) {
    console.log("The error is", err);
  }
};

export async function fetchSheetData() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "'Sheet1'!A1:I",
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    console.log("No data found.");
    return [];
  }

  return rows; // This is a 2D array: each sub-array is a row of cell values
}

export async function deleteRow(rowIndex: number) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },

    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const request = {
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    resource: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId: 0,
              dimension: "ROWS",
              startIndex: rowIndex, // zero-based index
              endIndex: rowIndex + 1,
            },
          },
        },
      ],
    },
  };

  const response = await sheets.spreadsheets.batchUpdate(request);
  return response.data;
}

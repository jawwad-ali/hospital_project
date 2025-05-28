"use server";
import { google } from "googleapis";

// https://docs.google.com/spreadsheets/d/1PHTddT931Caqc81g8KwrhD1n5YIaGSU19zCRKF6k010/edit?gid=0#gid=0

interface IProps {
  name: string;
  email: string;
  phone: string;
  gender: string;
  date: string;
  time: string;
  doctor: string;
  department: string;
  message: string;
}

export const handleServer = async (data: any) => {
  console.log("DATA Server action", data);

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

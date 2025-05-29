import { NextResponse } from "next/server";

export async function GET() {
  const fileURL = "https://onedrive.live.com/download?resid=6905C3512D446563%21691&authkey=%21AH40GryX1-rSeZM&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True";
  const res = await fetch(fileURL);
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch file" },
      { status: 500 }
    );
  }

  const arrayBuffer = await res.arrayBuffer();

  return new NextResponse(Buffer.from(arrayBuffer), {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="Doctors_Appointment.xlsx"',
    },
  });
}
const doctorSchedule = [
  {
    name: "DR. UZMA IMRAN",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MRCOG (UK), FRCOG(UK)",
    timings: ["9:00 AM TO 2:00 PM"],
    days: "MONDAY, WEDNESDAY, FRIDAY",
  },
  {
    name: "DR. JABEEN ZAHID",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, FCPS",
    timings: ["11:30 AM TO 2:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. ANJUM SAMI",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MAIM U/S",
    timings: ["1:00 PM TO 3:00 PM"],
    days: "MONDAY",
  },
  {
    name: "DR. RASHK E ERUM",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS",
    timings: ["6:00 PM TO 8:00 PM", "4:00 PM TO 5:00 PM"],
    days: "MONDAY, WEDNESDAY, FRIDAY",
  },
  {
    name: "DR. MUNAZZA FARAZ",
    department: "GYNAECOLOGIST",
    degree: "MBBS, FCPS",
    timings: ["5:00 PM TO 7:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
  {
    name: "DR. GHOUSIA",
    department: "GYNAECOLOGIST",
    degree: "MBBS, FCPS",
    timings: ["5:00 PM TO 7:00 PM"],
    days: "FRIDAY, SUNDAY",
  },
  {
    name: "DR. NOORUSH SHAMMI",
    department: "GYNAECOLOGIST",
    degree: "MBBS, MCPS, MRCOG",
    timings: ["8:00 PM TO 10:00 PM"],
    days: "TUESDAY, THURSDAY, SATURDAY",
  },
]

export default function DoctorScheduleTable() {
  return (
    <section className="py-8 px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
            <thead>
              <tr className="border-b-2 border-red-500">
                <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                  Doctor Name
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                  Department
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                  Degree
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                  Timings
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                  Days
                </th>
              </tr>
            </thead>
            <tbody>
              {doctorSchedule.map((doctor, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-25"
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium text-sm">{doctor.name}</td>
                  <td className="py-4 px-6 text-gray-700 text-sm">{doctor.department}</td>
                  <td className="py-4 px-6 text-gray-700 text-sm">{doctor.degree}</td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {doctor.timings.map((timing, timingIndex) => (
                      <div key={timingIndex} className="mb-1 last:mb-0">
                        {timing}
                      </div>
                    ))}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">{doctor.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden">
          <div className="grid gap-4">
            {doctorSchedule.map((doctor, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <h3 className="font-semibold text-gray-800 text-base mb-2">{doctor.name}</h3>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Department</dt>
                    <dd className="text-sm text-gray-800">{doctor.department}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Days</dt>
                    <dd className="text-sm text-gray-800">{doctor.days}</dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Degree</dt>
                    <dd className="text-sm text-gray-800 mb-3">{doctor.degree}</dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Timings</dt>
                    <dd className="text-sm text-gray-800">
                      {doctor.timings.map((timing, timingIndex) => (
                        <div key={timingIndex} className="mb-1 last:mb-0">
                          {timing}
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

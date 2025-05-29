import { doctorSchedule, tableHeadings } from "@/data";

export default function DoctorScheduleTable() {
  return (
    <section className="py-8 px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Table Heading */}
            <thead
            >
              <tr className="border-b-2 border-red-500">
                {tableHeadings.map((heading) => (
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-sm tracking-wider uppercase">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {doctorSchedule.map((doctor, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-25"
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium text-sm">
                    {doctor.name}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {doctor.department}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {doctor.degree}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {doctor.timings.map((timing, timingIndex) => (
                      <div key={timingIndex} className="mb-1 last:mb-0">
                        {timing}
                      </div>
                    ))}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {doctor.days}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden">
          <div className="grid gap-4">
            {doctorSchedule.map((doctor, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <h3 className="font-semibold text-gray-800 text-base mb-2">
                      {doctor.name}
                    </h3>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Department
                    </dt>
                    <dd className="text-sm text-gray-800">
                      {doctor.department}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Days
                    </dt>
                    <dd className="text-sm text-gray-800">{doctor.days}</dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Degree
                    </dt>
                    <dd className="text-sm text-gray-800 mb-3">
                      {doctor.degree}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                      Timings
                    </dt>
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
  );
}

// import Link from "next/link";
// import { work_sans } from "@/data";

// const Menus = () => {
//   return (
//     <div>
//       {/* Navigation */}
//       <div
//         className={`lg:bg-[#ED1B24] mx-auto text-white ${work_sans.className}`}
//       >
//         <div className="container max-w-5xl lg:mx-auto lg:flex block flex-wrap lg:justify-between lg:items-center lg:px-4 py-3">
//           <div className="flex lg:flex-row flex-col space-x-6 text-black lg:text-white space-y-6 lg:space-y-0 lg:pl-12 pl-4">
//             <Link href="/" className="font-medium">
//               Home
//             </Link>
//             <Link href="/about" className="font-medium">
//               About us
//             </Link>
//             <Link href="/services" className="font-medium">
//               Services
//             </Link>
//             <Link href="/doctors" className="font-medium">
//               Doctors
//             </Link>
//             <Link href="#" className="font-medium">
//               News
//             </Link>
//             <Link href="/contact" className="font-medium">
//               Contact
//             </Link>
//           </div>

//           {/* <div className="flex items-center">
//              <div className="relative">
//                 <input
//                   type="text"
//                   className="rounded-full py-1 px-3 text-gray-800 "
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
//                   <Search size={18} />
//                 </button>
//               </div>
//             <button className="ml-4 bg-white text-black rounded-full px-4 py-1 text-sm font-medium">
//               Appointment
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menus;






import Link from "next/link";
import { work_sans } from "@/data";

const Menus = () => {
  return (
    <div>
      {/* Navigation */}
      <div className={`lg:bg-[#ED1B24] mx-auto text-white ${work_sans.className}`}>
        <div className="container max-w-5xl lg:mx-auto lg:flex block flex-wrap lg:justify-between lg:items-center lg:px-4 py-3">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex lg:flex-row flex-col space-x-6 text-black lg:text-white space-y-6 lg:space-y-0 lg:pl-12 pl-4">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/about" className="font-medium">
              About us
            </Link>
            <Link href="/services" className="font-medium">
              Services
            </Link>
            <Link href="/doctors" className="font-medium">
              Doctors
            </Link>
            <Link href="#" className="font-medium">
              News
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </div>

          {/* Scrollable Menus for mobile */}
          <div className="lg:hidden overflow-y-auto max-h-screen lg:mt-0">
            <div className="flex lg:flex-row flex-col space-x-6 text-black lg:text-white space-y-6 lg:space-y-0 lg:pl-12 pl-4">
              <Link href="/" className="font-medium">
                Home
              </Link>
              <Link href="/about" className="font-medium">
                About us
              </Link>
              <Link href="/services" className="font-medium">
                Services
              </Link>
              <Link href="/doctors" className="font-medium">
                Doctors
              </Link>
              <Link href="#" className="font-medium">
                News
              </Link>
              <Link href="/contact" className="font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;

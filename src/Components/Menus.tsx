import Link from "next/link";
import { work_sans } from "@/data";
import { usePathname } from "next/navigation";

const Menus = () => {
  const pathname = usePathname();
  return (
    <div>
      {/* Navigation */}
      <div
        className={`lg:bg-[#ED1B24] mx-auto text-white ${work_sans.className}`}
      >
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
              Departments
            </Link>
            <Link href="/doctors" className="font-medium">
              Doctors
            </Link>

            {pathname == "/about" && (
              <Link href="#news" className="font-medium">
                News
              </Link>
            )}
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
                Departments
              </Link>
              <Link href="/doctors" className="font-medium">
                Doctors
              </Link>
              {pathname == "/about" && (
                <Link href="#news" className="font-medium">
                  News
                </Link>
              )}
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

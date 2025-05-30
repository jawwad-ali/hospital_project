import { useState } from "react";
import TopNavbarInfo from "./TopNavbarInfo";
import Menus from "./Menus";

const DesktopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div className="w-full">
        {/* Top header with contact info */}
        <TopNavbarInfo />
        <Menus />
      </div>
    </div>
  );
};

export default DesktopNavbar;

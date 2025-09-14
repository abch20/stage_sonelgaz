import "leaflet/dist/leaflet.css";
import { HelpCircle, Home as HomeIcon, Settings } from "lucide-react"; // example icons
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function Setting() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <Sidebar>
        <Link to="/index">
          <SidebarItem icon={<HomeIcon size={20} />} text="Dashboard"  />
        </Link>

        <Link to="/Setting">
          <SidebarItem icon={<Settings size={20} />} text="Settings" active />
        </Link>

        <Link to="/Help">
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" alert />
        </Link>
      </Sidebar>
      <div className="flex justify-center items-center relative m-auto">
        <h1>Setting page</h1>
      </div>
    </div>
  );
}

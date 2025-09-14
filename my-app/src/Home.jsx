// src/App.jsx or src/pages/Home.jsx
import "leaflet/dist/leaflet.css";
import { HelpCircle, Home as HomeIcon, Settings } from "lucide-react"; // example icons
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar>
        <Link to="/index">
          <SidebarItem icon={<HomeIcon size={20} />} text="Dashboard"  active />
        </Link>

        <Link to="/Setting">
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Link>

        <Link to="/Help">
          <SidebarItem icon={<HelpCircle size={20} />} text="Help" alert />
        </Link>
      </Sidebar>

      {/* Main Content (Map) */}
      <div className="flex-1 relative">
        <MapContainer
          center={[36.75, 3.06]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[36.75, 3.06]}>
            <Popup>Algiers 🗺️</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

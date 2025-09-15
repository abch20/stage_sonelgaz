// src/pages/Home.jsx
import "leaflet/dist/leaflet.css";
import { HelpCircle, Home as HomeIcon, Settings } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function Home() {
  const location = useLocation();

  const navItems = [
    { path: "/index", label: "Dashboard", icon: <HomeIcon size={20} /> },
    { path: "/setting", label: "Settings", icon: <Settings size={20} /> },
    {
      path: "/help",
      label: "Help",
      icon: <HelpCircle size={20} />,
      alert: true,
    },
  ];

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar>
        {navItems.map(({ path, label, icon, alert }) => (
          <Link key={path} to={path}>
            <SidebarItem
              icon={icon}
              text={label}
              active={location.pathname === path}
              alert={alert}
            />
          </Link>
        ))}
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

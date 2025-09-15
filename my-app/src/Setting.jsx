import { HelpCircle, Home as HomeIcon, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function Setting() {
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* Profile Section */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="darkMode" className="h-4 w-4" />
            <label htmlFor="darkMode" className="text-gray-700">
              Enable Dark Mode
            </label>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Change Password
          </button>
        </section>
      </main>
    </div>
  );
}

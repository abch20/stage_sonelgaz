import "leaflet/dist/leaflet.css";
import { HelpCircle, Home as HomeIcon, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "./components/Sidebar";

export default function Help() {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Help & Support
        </h1>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Q:</strong> How do I reset my password? <br />
              <span className="text-sm">
                → Go to Settings → Security → Change Password.
              </span>
            </li>
            <li>
              <strong>Q:</strong> How can I enable dark mode? <br />
              <span className="text-sm">
                → Settings → Preferences → Enable Dark Mode.
              </span>
            </li>
            <li>
              <strong>Q:</strong> Who do I contact for support? <br />
              <span className="text-sm">→ Use the contact form below.</span>
            </li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

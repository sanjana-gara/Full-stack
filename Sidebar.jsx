// src/Sidebar.jsx
import { Home, LayoutDashboard, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: <LayoutDashboard />, to: "/" },
  { name: "Home", icon: <Home />, to: "/home" },
  { name: "Settings", icon: <Settings />, to: "/settings" },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="bg-white dark:bg-gray-950 shadow h-screen w-64 fixed z-10">
      <div className="text-2xl font-bold text-center py-6">Techonquer</div>
      <nav className="space-y-2 px-4">
        {menu.map(({ name, icon, to }) => (
          <Link
            key={name}
            to={to}
            className={cn(
              "flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
              pathname === to && "bg-gray-200 dark:bg-gray-800 font-semibold"
            )}
          >
            {icon}
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

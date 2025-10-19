"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  CubeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Dashboard", href: "./Dashboard", icon: HomeIcon },
  { name: "Products", href: "./Products", icon: CubeIcon },
  { name: "Orders", href: "./Orders", icon: ShoppingCartIcon },
  { name: "Users", href: "./Users", icon: UserGroupIcon },
  { name: "Settings", href: "./Setting", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold border-b">K&H Admin</div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <link.icon className="h-5 w-5 text-gray-700" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

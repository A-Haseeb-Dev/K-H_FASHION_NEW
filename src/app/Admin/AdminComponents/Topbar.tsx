// "use client";
// import { Menu } from "lucide-react";

// interface TopbarProps {
//   setSidebarOpen: (open: boolean) => void;
// }

// export default function Topbar({ setSidebarOpen }: TopbarProps) {
//   return (
//     <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3">
//       <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
//         <Menu className="w-6 h-6" />
//       </button>
//       <h1 className="text-lg font-semibold tracking-wide">Admin Dashboard</h1>
//       <div className="flex items-center gap-4">
//         <span className="text-sm text-gray-600">Admin</span>
//         <img
//           src="https://ui-avatars.com/api/?name=Admin"
//           alt="Avatar"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>
//     </header>
//   );
// }















"use client";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 border-b">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <BellIcon className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircleIcon className="h-8 w-8 text-gray-700" />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
}

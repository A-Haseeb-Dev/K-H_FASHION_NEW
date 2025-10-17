// // components/Header.tsx
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingBag } from "lucide-react";
// import "./Navbar.css";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Women", href: "#" },
//     { name: "Men", href: "#" },
//     { name: "Children", href: "#" },
//     { name: "Gifts", href: "#" },
//     { name: "Stories", href: "#" },
//   ];

//   return (
//     <header className="border-b border-gray-200 bg-white text-black">
//       {/* Announcement Bar */}
//       <div className="bg-black text-white text-center text-sm py-2 tracking-wide">
//         Free Shipping on All Orders
//       </div>

//       {/* Navbar */}
//       <div className="Navbar relative flex items-center justify-center px-6 py-4 lg:px-16">
//         {/* Left Menu */}
//         <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide absolute left-16">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="hover:text-gray-500 transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Logo */}
//         <div className="text-2xl font-serif tracking-widest">
//           <Link href="/">K&H FASHION</Link>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4 absolute right-16">
//           <button>
//             <Search className="w-5 h-5" />
//           </button>
//           <button>
//             <ShoppingBag className="w-5 h-5" />
//           </button>
//           <button
//             className="md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-6 border-t border-gray-200">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="text-sm uppercase tracking-wide py-2 hover:text-gray-500 transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }









// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, Search, ShoppingBag } from "lucide-react";
// import "./Navbar.css";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Women", href: "#" },
//     { name: "Men", href: "#" },
//     { name: "Children", href: "#" },
//     { name: "Gifts", href: "#" },
//     { name: "Stories", href: "#" },
//   ];

//   return (
//     <header className="border-b border-gray-200 bg-white text-black">
//       {/* Announcement Bar */}
//       <div className="bg-black text-white text-center text-sm py-2 tracking-wide">
//         Free Shipping on All Orders
//       </div>

//       {/* Navbar */}
//       <div className=" relative flex items-center justify-between px-6 py-4 lg:px-16">
//         {/* Left Section (Menu + Links) */}
//         <div className="flex items-center gap-6">
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="hover:text-gray-500 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="text-2xl font-serif tracking-widest flex-1 text-center">
//           <Link href="/">K&H FASHION</Link>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           <button>
//             <Search className="w-5 h-5" />
//           </button>
//           <button>
//             <ShoppingBag className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <ul className="flex flex-col items-center gap-4 py-4 text-sm uppercase tracking-wide">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   className="hover:text-gray-500 transition-colors"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }








"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import "./Navbar.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Children", href: "#" },
    { name: "Gifts", href: "#" },
    { name: "Stories", href: "#" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white text-black">
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center text-sm py-2 tracking-wide">
        Free Shipping on All Orders
      </div>

      {/* Navbar */}
      <div className="relative flex items-center justify-between px-6 py-4 lg:px-16">
        {/* Left Section (Links + Menu Button) */}
        <div className="flex items-center gap-6 w-1/3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Logo (Perfectly Centered) */}
        <div className="flex justify-center w-1/3">
          <h1 className="sm:text-2xl font-serif tracking-widest">
            <Link href="/">K&H&nbsp;FASHION</Link>
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-4 w-1/3">
          <button>
            <Search className="w-5 h-5" />
          </button>
          <button>
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 ">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm uppercase tracking-wide">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-gray-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

// components/Header.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

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
      <div className="relative flex items-center justify-center px-6 py-4 lg:px-16">
        {/* Left Menu */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide absolute left-16">
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

        {/* Logo */}
        <div className="text-2xl font-serif tracking-widest">
          <Link href="/">K&H FASHION</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 absolute right-16">
          <button>
            <Search className="w-5 h-5" />
          </button>
          <button>
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wide py-2 hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "Customer Care",
      links: [
        "Help Center",
        "Track Your Order",
        "Shipping & Delivery",
        "Returns & Exchange Policy",
        "Size Guide",
        "FAQs",
        "Contact Us",
      ],
    },
    {
      title: "Shop Categories",
      links: [
        "Women’s Collection",
        "Men’s Collection",
        "New Arrivals",
        "Accessories",
        "Seasonal Sale",
        "Best Sellers",
      ],
    },
    {
      title: "Information",
      links: [
        "About K&H FASHION",
        "Careers",
        "Terms & Conditions",
        "Privacy Policy",
        "Payment Methods",
        "Store Locator",
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={18} /> },
    { name: "Facebook", icon: <Facebook size={18} /> },
    { name: "Twitter", icon: <Twitter size={18} /> },
    { name: "YouTube", icon: <Youtube size={18} /> },
  ];

  return (
    <footer className="bg-[#111] text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            K&H FASHION
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            At K&H FASHION, we celebrate confidence, creativity, and individuality
            through timeless style. From modern streetwear to classic elegance,
            our collections are designed with passion, precision, and purpose —
            bringing luxury within your reach.
          </p>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-white text-lg font-semibold mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">
            Stay Connected
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Join our community and be the first to know about new arrivals,
            exclusive offers, and style stories.
          </p>

          <h4 className="text-white text-lg font-semibold mb-2">
            Newsletter Sign-Up
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get 10% off your first order + early access to new
            collections.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-3 py-2 text-sm bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-r-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4 text-sm text-gray-400">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href="#"
              aria-label={item.name}
              className="hover:text-white"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center">
          © 2025 K&H FASHION. All Rights Reserved. | Crafted with by{" "}
          <span className="text-white font-semibold">K&H TECH SOL</span>
        </p>
      </div>
    </footer>
  );
}

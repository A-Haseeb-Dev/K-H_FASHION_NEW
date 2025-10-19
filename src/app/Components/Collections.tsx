"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json"; // ✅ Correct import path

export default function Collections() {
  const [products, setProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["All", "Women", "Men", "Children"];
  const sorts = ["Newest", "Price: Low to High", "Price: High to Low"];

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return b.id - a.id;
  });

  const visible = sorted.slice(0, visibleCount);

  return (
    <section className="px-6 py-10 lg:px-16 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold tracking-wide uppercase">
          Collections
        </h2>
        <div className="flex gap-3 text-sm mt-4 md:mt-0">
          {sorts.map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`px-4 py-2 border ${
                sortBy === option
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              } uppercase transition-colors`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-8 mb-10 border-b border-gray-200 pb-4">
        {categories.map((cat) => (
          <div
            key={cat}
            onMouseEnter={() => setActiveCategory(cat)}
            className={`relative cursor-pointer text-sm uppercase tracking-wider transition-colors ${
              activeCategory === cat
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <span className="absolute left-0 right-0 -bottom-[2px] h-[1.5px] bg-black"></span>
            )}
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visible.map((item) => {
          const slug = item.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link key={item.id} href={`/Collections/${slug}`}>
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all">
                <div className="relative w-full h-[400px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm uppercase text-gray-600">
                    {item.category}
                  </p>
                  <h3 className="text-base font-medium mt-1">{item.name}</h3>
                  <p className="text-gray-800 font-semibold mt-2">
                    PKR {item.price}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load More */}
      {visibleCount < sorted.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-2 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

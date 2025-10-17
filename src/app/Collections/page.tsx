// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   color: string;
//   image: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Classic White Shirt",
//     price: 89,
//     category: "Men",
//     color: "White",
//     image: "/images/products/shirt1.jpg",
//   },
//   {
//     id: 2,
//     name: "Elegant Silk Dress",
//     price: 149,
//     category: "Women",
//     color: "Red",
//     image: "/images/products/dress1.jpg",
//   },
//   {
//     id: 3,
//     name: "Casual Denim Jacket",
//     price: 119,
//     category: "Men",
//     color: "Blue",
//     image: "/images/products/jacket1.jpg",
//   },
//   {
//     id: 4,
//     name: "Kids Cotton Hoodie",
//     price: 59,
//     category: "Children",
//     color: "Green",
//     image: "/images/products/hoodie1.jpg",
//   },
// ];

// export default function Collection() {
//   const [category, setCategory] = useState<string>("All");
//   const [sortBy, setSortBy] = useState<string>("Newest");
//   const [visibleCount, setVisibleCount] = useState<number>(6);

//   const filtered = products.filter(
//     (p) => category === "All" || p.category === category
//   );

//   const sorted = [...filtered].sort((a, b) => {
//     if (sortBy === "Price: Low to High") return a.price - b.price;
//     if (sortBy === "Price: High to Low") return b.price - a.price;
//     return b.id - a.id;
//   });

//   const visible = sorted.slice(0, visibleCount);

//   const loadMore = () => setVisibleCount((prev) => prev + 4);

//   return (
//     <section className="px-6 py-10 lg:px-16 bg-gray-50">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//         <h2 className="text-2xl font-semibold tracking-wide uppercase">
//           Collections
//         </h2>

//         {/* Filters + Sort */}
//         <div className="flex gap-4 mt-4 md:mt-0">
//           {/* Category Filter */}
//           <select
//             className="border border-gray-300 px-3 py-2 text-sm rounded-md bg-white cursor-pointer"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option>All</option>
//             <option>Women</option>
//             <option>Men</option>
//             <option>Children</option>
//           </select>

//           {/* Sort */}
//           <div className="relative">
//             <select
//               className="border border-gray-300 px-3 py-2 text-sm rounded-md bg-white cursor-pointer appearance-none"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option>Newest</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//             <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {visible.map((item) => (
//           <div key={item.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all">
//             <div className="relative w-full h-64">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover rounded-t-lg"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <p className="text-sm uppercase text-gray-600">{item.category}</p>
//               <h3 className="text-base font-medium mt-1">{item.name}</h3>
//               <p className="text-gray-800 font-semibold mt-2">${item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Load More / Infinite Scroll */}
//       {visibleCount < sorted.length && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={loadMore}
//             className="px-6 py-2 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }






























"use client";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89,
    category: "Men",
    color: "White",
    image: "/images/products/shirt1.jpg",
  },
  {
    id: 2,
    name: "Elegant Silk Dress",
    price: 149,
    category: "Women",
    color: "Red",
    image: "/images/products/dress1.jpg",
  },
  {
    id: 3,
    name: "Casual Denim Jacket",
    price: 119,
    category: "Men",
    color: "Blue",
    image: "/images/products/jacket1.jpg",
  },
  {
    id: 4,
    name: "Kids Cotton Hoodie",
    price: 59,
    category: "Children",
    color: "Green",
    image: "/images/products/hoodie1.jpg",
  },
  {
    id: 5,
    name: "Linen Summer Dress",
    price: 99,
    category: "Women",
    color: "Beige",
    image: "/images/products/dress2.jpg",
  },
];

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Newest");
  const [visibleCount, setVisibleCount] = useState<number>(6);

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

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <section className="px-6 py-10 lg:px-16 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold tracking-wide uppercase">
          Collections
        </h2>

        {/* Sort Bar */}
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

      {/* Hover Filter Bar */}
      <div className="flex justify-center gap-8 mb-10 border-b border-gray-200 pb-4">
        {categories.map((cat) => (
          <div
            key={cat}
            onMouseEnter={() => setActiveCategory(cat)}
            className={`relative cursor-pointer text-sm uppercase tracking-wider ${
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

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm uppercase text-gray-600">{item.category}</p>
              <h3 className="text-base font-medium mt-1">{item.name}</h3>
              <p className="text-gray-800 font-semibold mt-2">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < sorted.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-6 py-2 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

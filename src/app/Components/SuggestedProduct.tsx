// components/NewArrivals.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Leather Handbag",
    price: "$420",
    image: "/images/bag1.jpg",
  },
  {
    id: 2,
    name: "Men’s Designer Sneakers",
    price: "$610",
    image: "/images/shoes1.jpg",
  },
  {
    id: 3,
    name: "Silk Printed Scarf",
    price: "$180",
    image: "/images/scarf1.jpg",
  },
  {
    id: 4,
    name: "Wool Oversized Coat",
    price: "$890",
    image: "/images/coat1.jpg",
  },
  {
    id: 5,
    name: "Modern Sunglasses",
    price: "$250",
    image: "/images/glasses1.jpg",
  },
];

export default function NewArrivalsCarousel() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const scroll = (dir: "left" | "right") => {
    const container = document.getElementById("arrival-scroll");
    if (!container) return;
    const scrollAmount = 400;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-16 bg-[#fafafa]">
      <div className="flex justify-between items-center px-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-serif tracking-wide">
          Suggested To You
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        id="arrival-scroll"
        className="flex overflow-x-auto gap-8 px-8 scrollbar-hide scroll-smooth py-4"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[260px] bg-white shadow-sm rounded-2xl overflow-hidden relative group"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-80"
              />

              {/* Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow"
                >
                  <Heart
                    size={18}
                    className={`${
                      favorites.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-700"
                    }`}
                  />
                </button>
                <button
                  onClick={() => toggleCart(product.id)}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow"
                >
                  <ShoppingCart
                    size={18}
                    className={`${
                      cart.includes(product.id)
                        ? "fill-black text-black"
                        : "text-gray-700"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-sm font-medium uppercase tracking-wide">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

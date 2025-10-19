"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">About K&H FASHION</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold">K&H FASHION</span>, we believe that fashion is more than just clothing — 
          it’s self-expression, confidence, and attitude. Our goal is to empower individuals with styles that speak 
          louder than words. Designed with passion, crafted with precision, and delivered with care.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, K&H FASHION began with a simple idea — to make high-quality, trendsetting apparel accessible to everyone. 
              What started as a small online store has evolved into a growing brand trusted by thousands of style enthusiasts.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We’re not just a brand — we’re a movement. Every collection is a blend of creativity, culture, and craftsmanship.
              Our team works tirelessly to bring you the latest designs with a touch of luxury and originality.
            </p>
          </div>
          <div>
            <img
              src="/about-fashion.jpg"
              alt="K&H Fashion Story"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision & Mission</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-black text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become a globally recognized fashion brand known for elegance, innovation, and ethical production.
              We aim to redefine modern style while maintaining authenticity and sustainability.
            </p>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver premium-quality fashion that celebrates individuality. We’re dedicated to providing designs that 
              make every customer feel confident, stylish, and unique — from daily wear to special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet the Founders</h2>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <img
                src="/team-haseeb.jpg"
                alt="Abdul Haseeb"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Abdul Haseeb</h3>
              <p className="text-gray-500">Co-Founder & Creative Director</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Passionate about design and technology, Haseeb brings creativity and innovation to every collection.
                He believes in building a brand that speaks to the modern generation with timeless elegance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <img
                src="/team-k.jpg"
                alt="K Co-Founder"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">K</h3>
              <p className="text-gray-500">Co-Founder & Operations Head</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Handles production and quality control with precision. K ensures every product reflects the brand’s core values
                — excellence, comfort, and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

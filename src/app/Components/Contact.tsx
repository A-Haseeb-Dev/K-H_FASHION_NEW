"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully ✅");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We’d love to hear from you! Whether it’s a question about products, orders, or collaborations —
          our team will respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-black text-white p-8 rounded-2xl flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-gray-300">
              Our customer support team is available 24/7 for your assistance.
            </p>
            <div>
              <p className="font-medium">📍 Address:</p>
              <p className="text-gray-300">123 K&H Street, Lahore, Pakistan</p>
            </div>
            <div>
              <p className="font-medium">📧 Email:</p>
              <p className="text-gray-300">support@khfashion.com</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone:</p>
              <p className="text-gray-300">+92 300 1234567</p>
            </div>
            <div>
              <p className="font-medium">🕒 Working Hours:</p>
              <p className="text-gray-300">Mon - Sat: 9am - 8pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

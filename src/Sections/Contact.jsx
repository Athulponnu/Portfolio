import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen p-4 text-white bg-gradient-to-br from-[#0f001a] via-[#240046] to-[#5a189a] flex flex-col items-center justify-center fade">
      <h1 className="text-6xl text-purple-400 font-bold mb-12 fade">Get in Touch</h1>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-purple-1050 p-10 rounded-3xl shadow-lg fade"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-6">
          <label className="block text-2xl text-purple-200 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-[#1a0f2a] text-white text-xl border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-2xl text-purple-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[#1a0f2a] text-white text-xl border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-2xl text-purple-200 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={6}
            className="w-full p-4 rounded-xl bg-[#1a0f2a] text-white text-xl border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-8 rounded-xl text-2xl transition-all duration-300 shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>

      <div className="mt-12 text-center fade">
        <p className="text-xl text-purple-200 mb-2">Or reach me directly at:</p>
        <p className="text-2xl text-amber-200 font-semibold">athul0770@gmail.com</p>
        <p className="text-2xl text-amber-200 font-semibold">+91 9074996653</p>
      </div>
    </main>
  );
}

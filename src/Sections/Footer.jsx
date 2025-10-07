// src/Ui/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-purple-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Branding */}
        <h2 className="text-xl font-bold mb-4 md:mb-0">
          © {new Date().getFullYear()} Athul Raj K K
        </h2>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/Athulponnu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/athul-raj-k-k-4b1903269"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:athul0770@gmail.com"
            className="hover:text-red-400 transition-transform transform hover:scale-125"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-transform transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-center mt-4 text-sm italic text-purple-400">
        Let’s build something amazing together 🚀
      </p>
    </footer>
  );
}

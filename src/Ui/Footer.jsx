// src/Ui/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-[#0f001a] via-[#240046] to-[#5a189a] 
                 text-purple-200 flex flex-col justify-center shadow-xl"
      style={{ minHeight: "120px" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full">
        
        {/* Branding */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-purple-100">
          © {new Date().getFullYear()} Athul Raj K K
        </h2>

        {/* Social Links */}
        <div className="flex space-x-8 text-3xl md:text-4xl">
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
        </div>
      </div>
    </footer>
  );
}

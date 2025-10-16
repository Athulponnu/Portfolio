import React from "react";
import { motion } from "framer-motion";

import Python from "../assets/Python.png";
import apk from "../assets/apk.jpg";
import Digit from "../assets/Digit.png";
import port from "../assets/port.png";
import tft from "../assets/tft.png";

export default function Projects() {
  const projects = [
    {
      title: "Python IDE (Intel Team Project)",
      description: "AI & ML Features Implemented",
      img: Python,
      color: "from-purple-800 to-violet-700",
      link: "https://github.com/Athulponnu/Click-Counter",
    },
    {
      title: "Android Development (Click Counter)",
      description: "Interactive UI & UX",
      img: apk,
      color: "from-blue-800 to-cyan-700",
      link: "https://github.com/Athulponnu/IDE",
    },
    {
      title: "Handwritten Digit Recognition",
      description: "Python + Tkinter GUI",
      img: Digit,
      color: "from-gray-800 to-gray-600",
      link: "https://github.com/Athulponnu/Athulponnu-digit_recognizer_With_UI",
    },
    {
      title: "Personal Portfolio Site",
      description: "React + TailwindCSS",
      img: port,
      color: "from-pink-800 to-purple-600",
      link: "https://github.com/Athulponnu/Portfolio",
    },
    {
      title: "Theft Detection",
      description: "YOLO, IoT Integration, Computer Vision",
      img: tft,
      color: "from-red-800 to-purple-600",
      link: "https://github.com/Athulponnu/Theft_Detection",
    },
  ];

  return (
    <main className="min-h-screen p-4 text-white bg-gradient-to-br from-[#0f001a] via-[#240046] to-[#5a189a]">
      <h1 className="text-6xl text-purple-400 font-bold text-center mb-16 fade">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${proj.color}`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {proj.title}
              </h2>
              <p className="text-xl text-gray-200">{proj.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}

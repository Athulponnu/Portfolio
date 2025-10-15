// src/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Layout, Server } from "lucide-react";
import cvGif from "../assets/cv.gif";


export default function Skills() {
  const cards = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-12 h-12 text-purple-400" />,
      width: "w-[400px] md:w-[800px]",
      padding: "p-12",
      titleSize: "text-3xl md:text-4xl",
      hoverScale: 1.1,
      shadow: "shadow-purple-900/50",
      gradient: "from-purple-900 to-indigo-800",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-10 h-10 text-purple-400" />,
      width: "w-[360px] md:w-[340px]",
      padding: "p-10",
      titleSize: "text-2xl md:text-3xl",
      hoverScale: 1.07,
      shadow: "shadow-purple-800/50",
      gradient: "from-indigo-900 to-purple-800",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "REST APIs", logo: "https://img.icons8.com/fluency/48/api.png" },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <Code2 className="w-12 h-12 text-purple-400" />,
      width: "w-[420px] md:w-[400px]",
      padding: "p-12",
      titleSize: "text-3xl md:text-4xl",
      hoverScale: 1.1,
      shadow: "shadow-purple-900/60",
      gradient: "from-purple-800 to-violet-700",
      skills: [
        { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      ],
    },
    {
      title: "AI / ML & Research",
      icon: <Cpu className="w-12 h-12 text-purple-400" />,
      width: "w-[420px] md:w-[800px]",
      padding: "p-12",
      titleSize: "text-3xl md:text-4xl",
      hoverScale: 1.0,
      shadow: "shadow-purple-900/60",
      gradient: "from-violet-800 to-purple-700",
      skills: [
        { name: "Neural Networks", logo: "https://img.icons8.com/fluency/48/artificial-intelligence.png" },
        { name: "Computer Vision", logo: cvGif },
        { name: "NLP", logo: "https://img.icons8.com/fluency/48/chatgpt.png" },
        { name: "Generative AI", logo: "https://img.icons8.com/color/48/openai.png" },
        { name: "Deep Learning", logo: "https://img.icons8.com/fluency/48/machine-learning.png" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-purple-100 py-20 px-8">
      <h1 className="text-6xl font-bold mb-16 text-center text-purple-300 tracking-wide">
        My Skills
      </h1>

      <div className="flex flex-wrap justify-evenly gap-12 w-full max-w-screen-xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: card.hoverScale, rotate: 1 }}
            className={`bg-gradient-to-br ${card.gradient} rounded-3xl ${card.padding} ${card.width} shadow-xl ${card.shadow} hover:shadow-purple-700/60 transition-all duration-300`}
          >
            <div className="flex items-center gap-4 mb-6">
              {card.icon}
              <h2 className={`${card.titleSize} font-semibold text-purple-200`}>
                {card.title}
              </h2>
            </div>
            <ul className="space-y-4 text-purple-100 text-base md:text-lg">
              {card.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 border-b border-purple-700/40 pb-2 last:border-0"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-sm object-contain"
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-purple-400 mt-20 text-lg italic">
        — Constantly evolving and expanding my skillset — 
      </p>
    </div>
  );
}

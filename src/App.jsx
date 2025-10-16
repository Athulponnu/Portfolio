import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import Footer from "./Ui/Footer";

import im1 from "./assets/im1.jpeg";
import keltronLogo from "./assets/Keltron-logo.png";
import cloudrunrLogo from "./assets/logo.png";
import PythonLogo from './assets/Python.png';
import apk from "./assets/apk.jpg";
import Digit from "./assets/Digit.png";
import port from "./assets/port.png";
import edit from "./assets/edit.mp4";

import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Skills from "./Sections/Skills";
import { useFadeOnScroll } from "./useFadeOnScroll.js";
import Contact from "./Sections/Contact";
import Project from "./Sections/Project";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useFadeOnScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* 🌌 Global Gradient Background */}
      <main className="min-h-screen p-4 text-white bg-gradient-to-br from-[#0f001a] via-[#240046] to-[#5a189a] transition-all duration-700">
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <div className="flex gap-4 h-150 mt-10 fade">
                  <div className="relative w-full border-4 rounded-3xl overflow-hidden border-purple-200">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-1000 h-full object-cover border-purple-200"
                    >
                      <source src={edit} type="vide/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="animate-scrollY space-y-[5px]">
                        {Array(8)
                          .fill("AthuL")
                          .map((text, i) => (
                            <h1
                              key={i}
                              className="text-center text-[300px] text-purple-400 font-bold drop-shadow-black"
                            >
                              {text}
                            </h1>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-1050 text-purple-200 border-4 rounded-3xl p-4 w-1/2 fade">
                    <img
                      src={im1}
                      alt="Example JPEG"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>

                  {/* Experience Section */}
                  <div className="w-full max-w-6xl mx-auto p-8 mt-10 text-amber-200 fade">
                    <h4 className="text-center mask-b-from-neutral-400 text-[100px] text-purple-400 mb-10">
                      Experience
                    </h4>

                    <div className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

                      {/* Keltron */}
                      <div className="relative w-full flex mb-16 group fade">
                        <div className="p-6 w-[70%] text-left pr-12">
                          <p className="text-2xl font-semibold mb-2 text-purple-200">
                            Keltron - Embedded System Intern
                          </p>
                          <ul className="list-disc list-inside text-[22px] leading-relaxed space-y-2 text-purple-200">
                            <li>
                              Developed and coded embedded C programs for <br /> Arduino IDE
                              to interface sensors and control devices.
                            </li>
                            <li>
                              Implemented efficient logic for real-time IoT and <br /> automation projects.
                            </li>
                          </ul>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>

                        {/* Keltron Logo */}
                        <div className="absolute right-20 top-6 h-[80px]">
                          <img src={keltronLogo} alt="Keltron Logo" className="h-full w-auto" />
                        </div>
                      </div>

                      {/* CloudRunr */}
                      <div className="relative w-full flex justify-end mb-16 group fade">
                        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                        <div className="p-6 w-[70%] text-right pl-12">
                          <p className="text-3xl font-semibold mb-2 text-purple-200">
                            CloudRunr - AI/ML Intern
                          </p>
                          <p className="text-2xl font-medium mb-2 text-red-800">
                            IAAIIC – Army AI Incubation Center
                          </p>
                          <ul className="list-disc list-inside leading-relaxed space-y-4 text-2xl text-purple-200">
                            <li>
                              Worked on core ML models [up to 128B],<br/> creating pipelines and preprocessing data.
                            </li>
                            <li>
                              Worked with Python as backend <br/> to build APIs and server-side logic.
                            </li>
                            <li>
                              Packaged a computer vision application for <br/> deployment, integrating image processing <br/> and model inference.
                            </li>
                            <li>
                              Worked with Kubernetes and Docker to <br/> containerize applications <br/> and manage scalable deployments.
                            </li>
                            <li>
                              Implemented orchestration for <br/> smooth deployment, scaling, and maintenance <br/> of backend services.
                            </li>
                          </ul>
                        </div>

                        {/* CloudRunr Logo */}
                        <div className="absolute left-20 top-6 h-[250px]">
                          <img src={cloudrunrLogo} alt="CloudRunr Logo" className="h-full w-auto" />
                        </div>
                      </div>
                    </div>
                  </div>



                {/* Projects Section */}
                <h2 className="text-7xl mask-b-from-neutral-400 text-center text-purple-400 pl-50 fade">
                  My Project's
                </h2>

                <div className="flex justify-center gap-6 mt-10 px-10">
                  <motion.div
                    className="rounded-[15px] w-150 h-[400px] bg-purple-1050 overflow-hidden flex flex-col fade"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={PythonLogo}
                      alt="Python PNG"
                      className="w-full h-3/4 object-cover"
                    />
                    <ul className="text-amber-200 text-[12px] list-disc list-inside p-2 flex-1">
                      <li className="text-3xl">Python IDE (Intel Team Project)</li>
                      <li className="text-xl">AI & ML Features Implemented</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="rounded-[15px] w-150 h-[400px] bg-purple-1050 overflow-hidden flex flex-col fade"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={apk}
                      alt="Second Image"
                      className="w-full h-3/4 object-cover"
                    />
                    <ul className="text-blue-200 text-[12px] list-disc list-inside p-2 flex-1">
                      <li className="text-3xl">Android Development (Click Counter)</li>
                      <li className="text-xl">Interactive UI & UX</li>
                    </ul>
                  </motion.div>
                </div>

                <div className="flex justify-center gap-6 mt-10 px-10">
                  <motion.div
                    className="rounded-[15px] w-150 h-[400px] bg-purple-1050 overflow-hidden flex flex-col fade"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={Digit}
                      alt="Digit"
                      className="w-full h-3/4 object-cover"
                    />
                    <ul className="text-gray-300 text-[12px] list-disc list-inside p-2 flex-1">
                      <li className="text-3xl">Handwritten Digit Recognition</li>
                      <li className="text-xl">Python + Tkinter GUI</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="rounded-[15px] w-150 h-[400px] bg-purple-1050 overflow-hidden flex flex-col fade"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <img
                      src={port}
                      alt="Portfolio"
                      className="w-full h-3/4 object-cover"
                    />
                    <ul className="text-gray-200 text-[12px] list-disc list-inside p-2 flex-1">
                      <li className="text-3xl">Personal Portfolio Site</li>
                      <li className="text-xl">React + TailwindCSS</li>
                    </ul>
                  </motion.div>
                </div>

                {/* Outro */}
                <h1 className="text-7xl mask-b-from-neutral-400 text-center mt-20 text-purple-500 fade">
                  How Could you miss me!!
                </h1>
                <div className="fade">
                  <p className="text-3xl text-center mt-5 mx-50 text-purple-200">
                    See the way I see the life is different but cool
                  </p>

                  <div className="flex gap-12 mx-50 mt-5 text-purple-200 text-2xl text-center">
                    <div className="w-1/3">
                      If u wanna Build it then Build it ... <br />
                      make it yours and make it big, <br />
                      don’t go for regular stuff.
                    </div>

                    <div className="w-1/3">
                      Fuel UP ... cuz if it’s a long journey <br />
                     so you need something to hold on to <br />
                      (me personally use Music( Phonk) — trust me, worth it).
                    </div>

                    <div className="w-1/3">
                      Keep disciplined every time ... <br />
                      don’t let other things deviate you <br />
                      from your path.
                    </div>
                  </div>
                </div>




              </>
            }
          />

          {/* SKILLS PAGE */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

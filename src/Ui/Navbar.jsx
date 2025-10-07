import React from "react";
import { MdHome, MdBuild, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-row items-center space-x-6">
        {/* Home button */}
        <Link to="/" className="nav-btn">
          <MdHome className="text-2xl" />
        </Link>

        {/* Skills button */}
        <Link to="/skills" className="nav-btn flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/e275b2ed-7063-479a-97d1-2c2589f0899e/3BTcTgn8Qp.lottie"
            loop
            autoplay
            style={{ width: "50px", height: "60px", paddingBottom: "5px" }}
          />
        </Link>

        {/* Services button */}
        <Link to="/Project" className="nav-btn">
          <MdBuild className="text-2xl" />
        </Link>

        {/* Contact button */}
        <Link to="/contact" className="nav-btn">
          <MdEmail className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
}

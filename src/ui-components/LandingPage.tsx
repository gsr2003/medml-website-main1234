"use client";

import { GiTargeted } from "react-icons/gi";

export function LandingPage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: "url('../assets/images/background.jpg')", // Adjust path if needed
      }}
    >
      <div className="relative flex flex-col gap-10 justify-center items-center md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] transition-all duration-700 ease-in-out">
        {/* Tagline with icon */}
        <div className="text-white text-base sm:text-lg">
          <div className="flex items-center justify-center md:justify-start gap-2 transition-opacity duration-700">
            <GiTargeted className="text-xl text-white" />
            <span>
            The Next Generation of Automated Underwriting
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 transition-all duration-700">
          {/* Left Text */}
          <div className="text-center md:text-left space-y-4 max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white transition-colors duration-700">
              Close Insurance Sales at Light Speed
            </h1>
            <p className="text-lg md:text-2xl text-white font-light transition-colors duration-700">
              Built by actuaries for underwriters, delivering instant, AI-driven risk decisions.
            </p>
          </div>

          {/* Right Text & Buttons */}
          <div className="text-center md:text-left space-y-6 max-w-xl">
            <p className="text-xl md:text-2xl font-medium text-white transition-colors duration-700">
              Learn how <span className="font-semibold">medml.ai</span> underwriting platform is dramatically accelerating underwriting process for leading insurers and reinsurers and close commercial and group sales
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="cursor-pointer bg-white text-slate-900 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-700 rounded-full px-6 py-2 font-medium transition-colors duration-300">
                Get a Demo
              </button>
              <button className="cursor-pointer bg-transparent border border-white text-white hover:bg-white/10 hover:text-white rounded-full px-6 py-2 font-medium transition-all duration-300">
                medml.ai powered underwriting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

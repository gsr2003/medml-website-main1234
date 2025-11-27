"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GiTargeted } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export function BackgroundBeamsWithCollisionPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 lg:px-12 xl:px-20 z-20 pt-28 pb-16 md:pt-20 md:pb-10 min-h-screen">

          <div className="w-full max-w-7xl flex flex-col gap-10 md:gap-14">

            <div className="flex flex-col md:flex-row justify-between gap-10 w-full">

              {/* LEFT CARD */}
              <div
                className="
                  flex-1 p-8 rounded-2xl
                  bg-gradient-to-br from-blue-50 to-blue-100
                  border border-slate-200
                  shadow-xl shadow-gray-300/50
                  space-y-6
                "
              >
                {/* TAGLINE */}
                <div className="flex items-center gap-3 text-lg font-bold text-gray-700">
                  <GiTargeted className="text-2xl text-black" />
                  <span>The Next Generation of Automated Underwriting</span>
                </div>

                {/* UPDATED MAIN HEADING — darker gradient text */}
                <h1
                  className="
                    text-3xl sm:text-4xl lg:text-5xl leading-snug font-extrabold
                    bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800
                    text-transparent bg-clip-text
                  "
                >
                  Close Insurance Sales at Light Speed.
                </h1>

                {/* SUBTEXT */}
                <p className="text-lg md:text-xl text-black/80 font-medium leading-relaxed">
                  Built by actuaries for underwriters, delivering instant, AI-driven risk decisions.
                </p>
              </div>

              {/* RIGHT CARD */}
              <div
                className="
                  flex-1 p-8 rounded-2xl
                  bg-gradient-to-br from-blue-50 to-blue-100
                  border border-slate-200
                  shadow-xl shadow-gray-300/50
                  space-y-8
                "
              >
                <p className="text-lg md:text-xl font-medium text-black leading-relaxed">
                  The first automated underwriting platform built by actuaries for underwriters —
                  delivering real-time risk assessment in seconds and helping leading insurers and
                  reinsurers accelerate commercial and group underwriting, improve accuracy,
                  and close deals faster.
                </p>

                {/* BUTTON — UPDATED WITH DARK GRADIENT */}
                <button
                  className="
                    cursor-pointer
                    bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800
                    hover:from-blue-900 hover:via-blue-950 hover:to-blue-950
                    text-white
                    rounded-lg px-8 py-3
                    text-lg font-semibold
                    transition-all duration-300
                    shadow-md hover:shadow-xl
                  "
                  onClick={() => navigate('/contact-us')}
                >
                  Yes, Let's Do This!
                </button>
              </div>
            </div>

            {/* TRUST CARD */}
            <div
              className="
                w-full p-8 rounded-2xl
                bg-gradient-to-br from-blue-50 to-blue-100
                border border-slate-200
                shadow-xl shadow-gray-300/50
                flex items-start gap-4 text-lg md:text-xl font-medium text-black leading-relaxed
              "
            >
              <img
                src="/assets/images/trustIconHome.png"
                alt="Trust Icon"
                className="w-8 h-8 mt-1 object-contain"
              />
              <span>
                Trusted by leading insurers, reinsurers, and MGUs worldwide — including major
                carriers across the US, Gulf region, and LATAM — for faster, more accurate automated
                underwriting.
              </span>
            </div>

          </div>
        </div>

        <div className="pb-20 sm:pb-32"></div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

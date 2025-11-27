"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pointer } from "@/components/ui/pointer";
import { motion } from "framer-motion";

export function PointerCardDemo() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-blue-200 px-4 py-12">
      <div className="flex flex-col gap-8 items-center w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 leading-snug">
          AI Insurance Underwriting Results - driven by MedML
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <Card className="w-full h-96 overflow-hidden border-none bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="pb-2 flex flex-col items-center justify-center">
              <img
                src="assets/images/Calculator.png"
                alt="icon"
                className="w-20 h-20 object-contain"
              />
              <CardTitle className="text-5xl font-bold mt-8">90%</CardTitle>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center text-center">
              <span className="pointer-events-none text-xl font-medium text-slate-800 ">
                Reduction in manual systems
              </span>
            </CardContent>
            <Pointer>
              <motion.div
                animate={{
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-pink-600"
                >
                  <motion.path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
            </Pointer>
          </Card>


          {/* Card 3 */}
          <Card className="w-full h-96 overflow-hidden border-none bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="pb-2 flex flex-col items-center justify-center">
                <img
                src="assets/images/image3.png"
                alt="icon"
                className="w-20 h-20 object-contain"
              />
              <CardTitle className="text-5xl font-bold mt-8 text-purple-800">
                5x
              </CardTitle>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center text-center">
              <span className="pointer-events-none text-xl font-medium text-purple-800">
                Daily quote submissions per underwriter
              </span>
            </CardContent>
            <Pointer>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" className="fill-purple-500" />
                <circle cx="12" cy="12" r="5" className="fill-white" />
              </svg>
            </Pointer>
          </Card>

          {/* Card 4 */}
          <Card className="w-full h-96 overflow-hidden border-none bg-gradient-to-br from-green-50 to-green-100 shadow-lg transition-all hover:shadow-xl">
            <CardHeader className="pb-2 flex flex-col items-center justify-center">
                <img
                src="assets/images/lightImage.png"
                alt="icon"
                className="w-20 h-20 object-contain"
              />
              <CardTitle className="text-5xl font-bold mt-8 text-green-800">
                10 Sec
              </CardTitle>
            </CardHeader>
            <CardContent className="relative flex h-40 items-center justify-center text-center">
              <span className="pointer-events-none text-xl font-medium text-green-800">
                Our Fastest Sales Closure
              </span>
            </CardContent>
            <Pointer>
              <div className="text-2xl">👆</div>
            </Pointer>
          </Card>
        </div>
      </div>
    </div>
  );
}

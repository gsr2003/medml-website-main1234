"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Pointer } from "@/components/ui/pointer";
import { motion } from "framer-motion";
import { MovingCards } from "./MovingCards";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function WhoWeWorkWith() {
  return (
    <>
      <div className="min-h-screen flex items-center px-4 py-12 bg-white">
        <div className="flex flex-col gap-8 items-center w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 leading-snug">
            Who we work with?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: ["Carrier", "Payer", "Insurer"],
                gradient:
                  "from-blue-50 to-blue-100",
                textColor: "text-blue-800",
                pointerColor: "fill-blue-500",
                image: "assets/images/ShieldIcon.png",
              },
              {
                title: ["Reinsurer","",""],
                gradient:
                  "from-purple-50 to-purple-100",
                textColor: "text-purple-800",
                customPointer: (
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-purple-500"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                ),
                image: "assets/images/Layers.png",
              },
              {
                title: ["MGA", "MGU", "TPA"],
                gradient:
                  "from-green-50 to-green-100",
                textColor: "text-green-800",
                customPointer: (
                  <Pointer>
                    <div className="text-2xl">👆</div>
                  </Pointer>
                ),
                image: "assets/images/Briefcase.png",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="flex justify-center"
              >
                <Card
                  className={`w-72 h-96 flex flex-col justify-center items-center text-center overflow-hidden border-none bg-gradient-to-br ${card.gradient} shadow-lg hover:shadow-xl transition-all`}
                >
                  <CardHeader className="space-y-4 flex flex-col items-center">
                    <img
                      src={card.image}
                      alt="icon"
                      className="w-20 h-20 object-contain"
                    />
                    <div className="space-y-1">
                      {card.title.map((t, idx) => (
                        <CardTitle
                          key={idx}
                          className={`text-4xl font-bold ${card.textColor}`}
                        >
                          {t}
                        </CardTitle>
                      ))}
                    </div>
                  </CardHeader>

                  {card.customPointer ?? (
                    <Pointer className={card.pointerColor} />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <MovingCards />
    </>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "slow" | "normal";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const container = containerRef.current;

    if (!scroller || !container) return;

    const scrollerContent = Array.from(scroller.children) as HTMLElement[];

    // Duplicate for infinite loop
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
    });

    container.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "slow" ? "60s" : "45s"
    );

    container.style.setProperty(
      "--animation-direction",
      direction === "right" ? "reverse" : "normal"
    );
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden w-full",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <div ref={scrollerRef} className="flex items-center gap-6 animate-scroll">
        {items.map((item, idx) => (
          <Card
            key={idx}
            quote={item.quote}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>

      <style>{`
        .animate-scroll {
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

interface CardProps {
  quote: string;
  name: string;
  title: string;
}

function Card({ quote, name, title }: CardProps) {
  return (
    <div
      className="
        min-w-[20rem]
        max-w-[20rem]
        min-h-[220px]
        max-h-[220px]
        mb-6
        p-5
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-xl shadow-gray-300/50
        flex flex-col justify-between
      "
    >
      <p className="text-slate-700 text-base leading-relaxed">
        "{quote}"
      </p>

      {/* NAME + TITLE HIDDEN VISUALLY BUT KEPT IN COMPONENT */}
      <div className="hidden">
        <span className="font-semibold text-slate-900">{name}</span>
        <span className="text-sm text-slate-500">{title}</span>
      </div>
    </div>
  );
}

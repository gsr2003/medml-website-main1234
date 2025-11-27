"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";    
export function MovingCards() {
  return (
    <div className="h-[40rem] min-h-screen flex items-center px-4 py-12 rounded-md flex-col antialiased bg-gradient-to-br from-blue-50 to-blue-200 justify-center relative overflow-hidden">
      <div className="flex flex-col gap-6 items-center w-full max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 leading-snug">
          MedML – The Leading AI-Powered Automated Underwriting Platform for Insurance
        </h2>

        <p className="text-lg md:text-xl text-slate-700 text-center max-w-3xl">
          Discover why group underwriters worldwide trust MedML.ai for fast, accurate, and personalized 
          insurance underwriting. Here’s what industry professionals are saying about our AI-powered 
          insurance solutions.
        </p>

        <div className="mt-8 w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I highly recommend MedML, we will soon start using MedML in many more projects to come.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "MedML works like magic. They are fast and care for our needs, I speak to MedML CEO on a regular basis.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "Instead of spending all our time & energy building pricing models we now have MedML to base our premium decisions, far more accurately. So grateful and really appreciate MedML’s great efforts and support.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "MedML aligns with our business needs, assisting underwriters to work more efficiently and faster.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
];

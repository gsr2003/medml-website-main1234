"use client";

import { useNavigate } from "react-router-dom";

export default function Integration() {
  const navigate = useNavigate();

  return (
    <>
      {/* ----------- SECTION 1 ----------- */}
      <section className="py-16 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 leading-snug">
          MedML – Fully Integrated AI-Powered Insurance Software for Underwriters{" "}
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="flex justify-center order-1">
            <img
              src="/assets/images/MO_facing exited.gif"
              alt="Integration GIF"
              className="max-w-full h-auto"
            />
          </div>

          <div className="space-y-6 order-2">
            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              medml.ai is a one-of-a-kind AI-powered insurance underwriting platform, fully integrated with
              claims and provider data. Real-time updates to actuarial, AI/ML pricing, and group underwriting
              solutions enable underwriters to work faster with minimal manual effort.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- NEW INSERTED SECTION: AGENTIC AI ----------- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 leading-snug">
          Agentic AI in MedML – Smarter, Autonomous Insurance Underwriting
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">

          {/* LEFT — GIF (MATCHED SIZE WITH OTHER GIFS) */}
          <div className="flex justify-center order-1">
            <img
              src="src\assets\images\AgenticAI.gif"
              alt="Agentic AI GIF"
              className="w-[30%] md:w-[50%] lg:w-[50%] h-auto object-contain"
            />
          </div>

          {/* RIGHT — TEXT CONTENT */}
          <div className="space-y-6 order-2">
            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              medml.ai leverages Agentic AI to revolutionize insurance underwriting workflows. By combining
              autonomous decision-making AI agents with actuarial and machine learning models, MedML enables 
              real-time risk assessment, automated pricing, and group underwriting solutions with minimal 
              human intervention.
            </p>

            <p className="text-base sm:text-lg font-semibold text-slate-900 mt-4">
              With Agentic AI, underwriters can:
            </p>

            <ul className="list-disc ml-6 text-base sm:text-lg text-slate-900 leading-relaxed space-y-2">
              <li>Automatically analyze broker slips, RFQs, and claims data</li>
              <li>Generate personalized insurance quotations in seconds</li>
              <li>Make data-driven strategic decisions when required</li>
              <li>Continuously update pricing and underwriting models with minimal manual input</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ----------- SECTION 2 ----------- */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-200 py-16 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 leading-snug">
          MedML.ai – AI-Powered Automated Underwriting Software for Insurance{" "}
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1">
            <img
              src="/assets/images/Mo_system_output.gif"
              alt="Integration GIF"
              className="max-w-full h-auto"
            />
          </div>

          <div className="space-y-6 order-2">
            <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
              Revolutionize group and commercial insurance underwriting with MedML.ai's actuarial, AI/ML,
              and Agentic AI-driven platform. Generate personalized quotes, real-time pricing updates, and
              automated policy issuance with minimal manual effort.
            </p>

            <div className="flex flex-col sm:flex-row justify-center mt-14 sm:mt-0 md:justify-start gap-3 md:mb-14 md:mt-10">
              <button
                className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-2 font-medium transition-colors duration-300"
                onClick={() => navigate("/contact-us")}
              >
                Get Started with AI Underwriting Today
              </button>
            </div>

            <div className="inline-flex items-center gap-2 bg-white text-black text-sm sm:text-base font-medium px-4 py-2 rounded-md shadow-md border border-gray-200 w-fit mt-6">
              <span className="text-orange-500">⚡</span>
              <span>
                Free Setup + 50% Off Your First Year of AI-Powered Underwriting Software.
                Streamline insurance underwriting with MedML.ai’s automated, actuarial and AI/ML-driven
                platform. Limited-time offer!
              </span>
              <span className="text-orange-500">⚡</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

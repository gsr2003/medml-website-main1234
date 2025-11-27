import integrationGif from "../assets/images/cute_robot_New.gif";
import integrationGif1 from "../assets/images/MO_WAVE.gif";
import integrationGif2 from "../assets/images/MO_happy.gif";
import { useNavigate } from "react-router-dom";

export function TimelineCompo() {
  const sections = [
    {
      title: "medml.ai for Life Insurers",
      text:
        "medml.ai helps life insurers to underwrite corporate/group life policies, release quotes/policies in seconds.",
      buttonText: "Get a demo",
      gifUrl: integrationGif
    },
    {
      title: "medml.ai for Non-Life Insurers",
      text:
        "medml.ai helps P&C insurers to underwrite commercial building and specialty risks, release quotes/policies in seconds.",
      buttonText: "Get a demo",
      gifUrl: integrationGif1
    },
    {
      title: "medml.ai for Health Insurers",
      text:
        "medml.ai helps health insurers to underwrite corporate/group health policies, release quotes/policies in seconds.",
      buttonText: "Get a demo",
      gifUrl: integrationGif2
    },
    {
      title: "medml.ai for Reinsurers",
      text:
        "medml.ai helps insurers to underwrite corporate/group life and non-life policies, release quotes/policies in seconds.",
      buttonText: "Get a demo",
      gifUrl: integrationGif1
    },
    {
      title: "medml.ai for MGAs",
      text:
        "medml.ai helps MGAs to underwrite corporate/group policies, release quotes/policies in seconds.",
      buttonText: "Get a demo",
      gifUrl: integrationGif2
    },
  ];
 const navigate = useNavigate();
  return (
    <div className="my-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 mb-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left: Heading, Text, and Button */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                {section.text}
              </p>
              <div className="flex justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition cursor-pointer"
                onClick={() => navigate("/contact-us")}>
                  {section.buttonText}
                </button>
              </div>
            </div>

            {/* Right: GIF */}
            <div className="w-full md:w-1/2">
              <img
                src={section.gifUrl}
                alt="medml.ai integration animation"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

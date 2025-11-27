"use client";

import { useState, useEffect } from "react";
import {
  FaFileSignature,
  FaChartLine,
  FaClipboardList,
  FaLink,
  FaLanguage,
  FaChevronDown,
  FaCalculator,
  FaDownload,
  FaTimes,FaExchangeAlt,FaDatabase
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const navData = [
  {
    label: "Features",
    items: [
      {
        title: "Underwriting Platform",
        desc: "Group insurance underwriting software built by actuaries, for underwriters,streamlining workflows and improving accuracy.",
        icon: <FaFileSignature className="w-5 h-5" />,
      },
      // {
      //   title: "Next-Gen Automation",
      //   desc: "Transform group & commercial underwriting with first corporate-grade underwriting solution.Actuarially smart models assessing risk like a seasoned underwriter, dynamically adjusting premiums in real time",
      //   icon: <FaCogs className="w-5 h-5" />,
      // },
      {
        title: "Faster Quote Submissions",
        desc: "Submit more insurance quotes faster with automated underwriting, helping underwriters close deals efficiently.",
        icon: <FaChartLine className="w-5 h-5" />,
      },
      {
        title: "Multi-line Capability",
        desc: "Supports Life, Health, and Non-Life insurance, enabling comprehensive risk assessment across all insurance products.",
        icon: <FaClipboardList className="w-5 h-5" />,
      },
      {
        title: "Integrated APIs",
        desc: "Seamlessly sync with claims, renewals, and loss ratio systems for a fully connected insurance ecosystem.",
        icon: <FaLink className="w-5 h-5" />,
      },
      {
        title: "Seamless Workflow",
        desc: "Automated hierarchical approvals, quotation management, and policy issuance for smoother underwriting operations.",
        icon: <FaExchangeAlt className="w-5 h-5" />,
      },
      {
        title: "Data-Driven Growth",
        desc: "Leverage automated underwriting insights integrated with group insurance claims data to drive smarter business decisions.",
        icon: <FaDatabase className="w-5 h-5" />,
      },
      {
        title: "Real-Time Pricing",
        desc: "Make instant pricing and premium adjustments using real-time actuarial and AI/ML assumptions.",
        icon: <FaCalculator className="w-5 h-5" />,
      },
      {
        title: "Multi-lingual Support",
        desc: "Available in English, Spanish, Arabic, and other languages to support global underwriting teams.",
        icon: <FaLanguage className="w-5 h-5" />,
      },
      
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-950 to-blue-900 text-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4 md:px-16">
          <div>
            <a onClick={() => navigate("/")}>
              <img
                src="/assets/images/logo.png"
                alt="MedML Logo"
                className="w-28 h-16 cursor-pointer"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center justify-end gap-8 w-full">
            <nav className="flex gap-8">
              {navData.map((section) => (
                <div key={section.label} className="relative group">
                  <button className="flex items-center gap-1 font-medium hover:text-blue-300 cursor-pointer">
                    {section.label}
                    <FaChevronDown className="w-3 h-3 mt-[1px]" />
                  </button>

                  {section.label === "Features" && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[750px] bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 invisible group-hover:visible transition-all duration-200 z-50 p-6">
                      <div className="grid grid-cols-3 gap-6 text-sm">
                        <div className="col-span-1 border-r pr-4">
                          <h3 className="text-lg font-semibold mb-2">
                            MedML - AI-Powered Insurtech Solutions
                          </h3>
                          <p className="text-gray-600 text-sm">
                            The first corporate-grade automated underwriting platform, combining digital insurance 
                            technology with personalized insurance solutions. Assess risk like an experienced underwriter 
                            and dynamically adjust premiums in real-time.
                          </p>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                          {section.items.map((item, index) => (
                            <div
                              key={`${item.title}-${index}`}
                              className="flex gap-3"
                            >
                              <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex items-center justify-center">
                                {item.icon}
                              </div>
                              <div>
                                <span className="font-medium">{item.title}</span>
                                <p className="text-gray-500 text-xs">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="/MedMLProductDeck.pdf"
                download
                className="transition-all flex items-center gap-2 cursor-pointer"
              >
                <FaDownload className="w-4 h-4" />
                Product Deck
              </a>
              <button
                className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-medium rounded-md px-6 py-2 transition-all cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Get Demo
              </button>
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-md px-6 py-2 transition-all cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Talk to Niti
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-4 bg-blue-950 text-white">
            {navData.map((section) => (
              <div key={section.label}>
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className="w-full text-left font-semibold py-2 flex items-center gap-2 cursor-pointer"
                >
                  {section.label}
                  <FaChevronDown className="w-3 h-3 mt-[1px]" />
                </button>
                {openDropdown === section.label && (
                  <div className="ml-4 mt-1 space-y-2 text-sm font-semibold">
                    {section.items.map((item, index) => (
                      <a
                        key={`${item.title}-${index}`}
                        href="#"
                        className="block hover:text-blue-300 flex gap-3 items-center cursor-pointer"
                      >
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="/MedMLProductDeck.pdf"
                download
                className="w-full flex items-center justify-center gap-2 mx-auto bg-white text-blue-700 hover:bg-blue-700 hover:text-white border border-blue-700 font-medium rounded-md px-6 py-2 transition-all cursor-pointer"
              >
                <FaDownload className="w-4 h-4" />
                Product Deck
              </a>
              <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white border border-blue-700 font-medium rounded-md px-6 py-2 transition-all w-full cursor-pointer"
              onClick={() => navigate("/contact-us")}>
                Get Demo
              </button>
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 font-medium rounded-md px-6 py-2 transition-all w-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                Talk to Niti
              </button>
            </div>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/10"
          onClick={() => setIsModalOpen(false)} // Close on backdrop click
        >
          <div
            className="bg-white text-blue-900 p-6 rounded-lg w-[90%] max-w-md relative shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Niti Founder/CEO</h2>
            <p className="mb-2">
              📧 Email:{" "}
              <a
                href="mailto:niti.jain@medml.ai"
                className="text-blue-700 hover:underline"
              >
                niti.jain@medml.ai
              </a>
            </p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/niti-jain-b6083b73/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                linkedin.com/in/niti-Jain
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

"use client";

import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white pt-12 pb-6">
      
      {/* ---------------- MAIN FOOTER CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left items-center md:items-start">
        
        {/* Logo + Social */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white">
            <img 
              src="/assets/images/logo.png"
              alt="MedML"
              className="w-24 h-14 cursor-pointer"
            />
          </h2>

          <a href="mailto:medml_support@medml.ai" className="text-sm hover:underline">
            medml_support@medml.ai
          </a>

          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://www.youtube.com/@MedML-kz9ve" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-5 h-5 hover:text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/company/medml/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-gray-200" />
            </a>
          </div>
        </div>

        {/* Platform */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-md mb-3">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-gray-200 cursor-default">Underwriting Platform</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Next-Gen Automation</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Faster Quote Submissions</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Multi-line Capability</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Integrated APIs</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Real-Time Pricing</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Multi-lingual Support</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-md mb-3">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-gray-200 cursor-default">For Life Insurers</a></li>
            <li><a className="hover:text-gray-200 cursor-default">For Non-Life Insurers</a></li>
            <li><a className="hover:text-gray-200 cursor-default">For Health Insurers</a></li>
            <li><a className="hover:text-gray-200 cursor-default">For Reinsurers</a></li>
            <li><a className="hover:text-gray-200 cursor-default">For MGAs</a></li>
            <li><a className="hover:text-gray-200 cursor-default">Our Generative AI – Genie</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-md mb-3">Contact MedML – AI-Powered Underwriting Solutions</h3>
          <p className="text-sm mb-4 max-w-xs">
            Learn how medml.ai can automate your insurance underwriting, speed up policy issuance, and improve group and commercial risk assessment.
          </p>
          <button
            className="bg-white text-blue-800 px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-100 transition w-full sm:w-auto cursor-pointer"
            onClick={() => navigate("/contact-us")}
          >
            Request a Demo
          </button>
        </div>

      </div>

      {/* ---------------- SEPARATOR LINE ---------------- */}
      <hr className="border-t border-blue-700 mt-10 mb-6" />

      {/* ---------------- SITE LANGUAGE SECTION ---------------- */}
      <div className="text-center space-y-4">
        <h3 className="font-semibold text-md">Site language:</h3>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-gray-200">العربية</a>
          <a href="#" className="hover:text-gray-200">English</a>
          <a href="#" className="hover:text-gray-200">Español</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

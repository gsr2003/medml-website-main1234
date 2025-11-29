import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CompareComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assets/images/productImage1.png",
    "/assets/images/productImage2.png",
    "/assets/images/productImage3.png",
    "/assets/images/productImage4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 leading-snug">
        Traditional underwriting{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
          V/S
        </span>{" "}
        MedML Automated Underwriting
      </h2>

      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0"
      >

        {/* Traditional Underwriting */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-slate-200 bg-red-50 flex flex-col">
          
          <h3 className="text-lg sm:text-xl font-semibold mb-6 pt-4 text-center md:text-left min-h-[60px] flex items-center">
            Traditional underwriting
          </h3>

          <ul className="space-y-4 text-slate-800 text-sm sm:text-base">
            {[
              "Overwhelming manual data entry for repeated quote submissions and resubmissions.",
              "Manual underwriting adjustments leading to inconsistency and rework.",
              "Inability to handle large or complex schemes without delays.",
              "Manual tracking of pricing assumptions and portfolio impact.",
              "Disconnected systems and broken quotation workflows creating bottlenecks.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaTimesCircle className="text-red-500 mt-1 shrink-0" />
                <span className="text-slate-800">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Image Section */}
        <div className="flex flex-col items-center justify-center bg-white p-6">
          <img
            src="/assets/images/OldSchool.png"
            alt="Old School Underwriting"
            className="w-full max-w-xs mb-6 rounded-lg border-4 border-red-300 shadow-md"
          />
          <div className="text-lg font-bold text-blue-600 bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm z-10">
            VS
          </div>
          <div className="w-full max-w-xs mt-6 h-64 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`MedML Underwriting Visualization ${currentImageIndex + 1}`}
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg border-4 border-green-300 shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* MedML.ai Underwriting */}
        <div className="p-6 border-t md:border-t-0 md:border-l border-slate-200 bg-green-50 flex flex-col">
          
          <h3 className="text-lg sm:text-xl font-semibold mb-6 pt-4 text-center md:text-left min-h-[60px] flex items-center">
            MedML - Automated Underwriting Software for Insurance
          </h3>

          <ul className="space-y-4 text-slate-900 text-sm sm:text-base">
            {[
              "Data is automatically extracted from broker slips, reducing manual entry.",
              "Automated adjustments using actuarial models, with the flexibility for expert overrides.",
              "Easily quote large and complex schemes with built-in pricing engines.",
              "Real-time tracking of pricing assumptions and portfolio impact.",
              "Fully integrated ecosystem — manage all quotations from one connected platform."
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span className="text-slate-900">{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </motion.div>
    </div>
  );
};

export default CompareComponent;

// import { useInView } from "framer-motion";

// const fadeLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// };

const MedmlPlatform = () => {
  // const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-4 sm:px-6 lg:px-16">
        {/* TOP SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 leading-snug">
            MedML – AI-Powered Automated Underwriting Software for Insurance
          </h2>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div className="text-left space-y-6">
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
                At MedML,we are transforming insurance underwriting by combining advanced actuarial science with cutting-edge technologies, 
                including artificial intelligence (AI), machine learning, large language models (LLMs), Agentic AI, and Generative AI. Our 
                platform is the world’s first corporate-grade automated underwriting solution designed by actuaries for underwriters, enabling 
                highly personalized insurance underwriting and group insurance solutions. MedML delivers fast, accurate, and scalable underwriting 
                automation while remaining the most affordable AI-powered underwriting software worldwide.
            
              </p>
            </div>

            {/* Right: GIF/Image */}
            <div className="flex justify-center">
              <img
                src="/assets/images/MO-FACE-EXCITED.gif" // direct path string
                alt="medml.ai in action"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* BOTTOM SECTION */}
        <section className="px-4 py-4 md:py-14">
          <div className="flex flex-col items-center gap-14">
            <div className="flex flex-col gap-2">
              <h5 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900 leading-snug">
                The Next Generation of Automated Underwriting
              </h5>
              <div className="items-center justify-center hidden w-full px-8 mx-auto lg:flex max-w-7xl">
                <div className="flex items-center gap-4">
                  {/* Cloud Upload + Text */}
                  <div className="flex flex-col items-center text-center">
                    <img
                      className="h-32 w-36"
                      src="/assets/images/cloudUpload.png" // direct path string
                      alt="cloud"
                    />
                    <p className="w-40 mt-2 text-sm font-medium text-[#0B1A33]">
                      Upload Broker Slip / Quote / RFQ
                    </p>
                  </div>

                  {/* Arrow */}
                  <img className="w-20 h-10" src="/assets/images/rightArror.png" alt="arrow" />

                  {/* Robot + Text */}
                  <div className="flex flex-col items-center text-center">
                    <img className="w-96 h-86" src="/assets/images/MO_happy.gif" alt="robot" />
                    <p className="w-48 text-sm font-medium text-[#0B1A33]">
                      Using multiple layers of actuarial models, artificial intelligence (AI), machine learning (ML), and large language models (LLMs), 
                      MedML instantly analyzes risk and calculates optimal pricing for group insurance and commercial underwriting.
                    </p>
                  </div>

                  {/* Side Arrow (if needed) */}
                  <img className="w-20 h-10" src="/assets/images/rightArror.png" alt="arrow" />
                </div>
                <div className="flex flex-col ml-10">
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start w-3/4">
                      <p className="text-base font-bold text-[rgb(34,34,34)]">
                        If NO Strategic Decisions are needed:
                      </p>
                      <p className="text-sm font-medium text-[#222222]">
                        Quotation is instantly generated<br />
                        Policy is automatically Issued <br />
                        Data is Updated in real time 
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div className="flex flex-col items-start w-3/4">
                      <p className="text-base font-bold text-[#222222]">
                        If Strategic Decisions are needed:
                      </p>
                      <p className="text-sm font-medium text-[#222222]">
                        Underwriter reviews and adjusts premium or coverage<br />
                        Quotation is Released <br />
                        Policy is Issued <br />
                        Data is Updated in real-time 
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="flex flex-col items-center w-full max-w-3xl mx-auto lg:hidden space-y-6">
                {/* Step 1: Upload */}
                <div className="flex flex-col items-center">
                  <img className="h-32 w-36" src="/assets/images/cloudUpload.png" alt="cloud" />
                  <p className="text-sm font-medium text-center text-[#0B1A33] mt-2">
                    Upload Broker Slip / Quote / RFQ
                  </p>
                </div>

                {/* Arrow */}
                <img className="w-20 h-20" src="/assets/images/arrowdown.png" alt="arrow" />

                {/* Step 2: MedML Does the Magic */}
                <div className="flex flex-col items-center">
                  <img className="w-64 h-56" src="/assets/images/MO_happy.gif" alt="robot" />
                  <p className="w-4/5 text-sm font-medium text-center text-[#0B1A33] mt-2">
                    Using multiple layers of actuarial models, artificial intelligence (AI), machine learning (ML), 
                    and large language models (LLMs), MedML instantly analyzes risk and calculates optimal pricing for group 
                    insurance and commercial underwriting.
                  </p>
                </div>

                {/* Arrow */}
                <img className="w-20 h-20" src="/assets/images/arrowdown.png" alt="arrow" />

                {/* Step 3: Automated Decision Flow*/}
                <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 w-full px-4">
                  {/* No Strategic Decisions Card */}
                  <div className="flex-1 border rounded-xl shadow-md p-4 bg-white">
                    <div className="flex flex-col items-center text-center">
                      <h4 className="text-base font-bold text-[#0B1A33] mb-1">
                        If NO Strategic Decisions are required:
                      </h4>
                      <ul className="text-sm text-[#222222] space-y-1">
                        <li>Quotation is instantly generated</li>
                        <li>Policy is automatically issued</li>
                        <li>Data is updated in real-time</li>
                      </ul>
                    </div>
                  </div>

                  {/* Strategic Decisions Card */}
                  <div className="flex-1 border rounded-xl shadow-md p-4 bg-white">
                    <div className="flex flex-col items-center text-center">
                      <h4 className="text-base font-bold text-[#0B1A33] mb-1">
                        If Strategic Underwriting Decisions are required:
                      </h4>
                      <ul className="text-sm text-[#222222] space-y-1">
                        <li>Underwriter reviews and adjusts premium or coverage</li>
                        <li>Quotation is released</li>
                        <li>Policy is issued</li>
                        <li>Data is updated</li>
                        <li>Data is updated in real-time </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedmlPlatform;

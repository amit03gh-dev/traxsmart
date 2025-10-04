// "use client";

// import { useState, useEffect } from "react";
// import MobileView from "./MobileView";
// import DesktopView from "./DesktopView";
// import styles from "./section.six.module.css";

// type FeatureKey =
//   | "AIS140 VLTD"
//   | "m2m eSIM Solutions"
//   | "Software Solutions"
//   | "Custom Manufacturing";

// export default function SectionSix() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [selectedFeature, setSelectedFeature] = useState<FeatureKey>("AIS140 VLTD");

//   const features = {
//     "AIS140 VLTD": {
//       image: "https://traxsmart.in/media/ais140stack/1.png",
//       description: "Certified AIS140 vehicle tracking devices with advanced GPS technology for real-time monitoring and compliance.",
//       icon: "bi-geo-alt",
//     },
//     "m2m eSIM Solutions": {
//       image: "https://traxsmart.in/media/ais140stack/2.jpg",
//       description: "Seamless connectivity solutions with embedded SIM technology for reliable machine-to-machine communication.",
//       icon: "bi-wifi",
//     },
//     "Software Solutions": {
//       image: "https://traxsmart.in/media/ais140stack/software.png",
//       description: "Comprehensive software platforms for fleet management, analytics, and operational efficiency.",
//       icon: "bi-code-slash",
//     },
//     "Custom Manufacturing": {
//       image: "https://traxsmart.in/media/ais140stack/4.jpg",
//       description: "Tailored hardware solutions designed to meet your specific requirements and use cases.",
//       icon: "bi-gear-fill",
//     },
//   };

//   const featureKeys: FeatureKey[] = Object.keys(features) as FeatureKey[];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     <section id="services" className={`py-5 ${styles.container}`}>
//       <div className="container">
//         {isMobile ? (
//           <MobileView
//             selectedFeature={selectedFeature}
//             setSelectedFeature={setSelectedFeature}
//             features={features}
//             featureKeys={featureKeys}
//           />
//         ) : (
//           <DesktopView
//             selectedFeature={selectedFeature}
//             setSelectedFeature={setSelectedFeature}
//             features={features}
//             featureKeys={featureKeys}
//           />
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

export default function SectionSix() {
  return (
    <section
      className="bg-gradient-solitude-blue-transparent"
      id="services"
    >
      <div className="container">
        <div className="row justify-content-left mb-4">
          <div
            className="col-lg-7 col-12 md-mb-50px last-paragraph-no-margin appear anime-child anime-complete"
            // data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                An one-stop solution for all your AIS140 needs.
              </span>
            </div>
            <h2 className="w-85 lg-w-100 text-dark-gray fw-700 ls-minus-2px">
              Grow your AIS140 business with us
            </h2>
            <p className="w-85 lg-w-100 text-dark-gray">
              Elevate your business with Traxsmart&apos;s AIS140 Stack, the all-in-one solution
              for AIS140-compliant vehicle tracking devices, eSIM technology, and expert
              software and hardware support, empowering you to thrive in the passenger
              commercial vehicle market!
            </p>
          </div>
        </div>

        <div
          className="row align-items-center"
          // data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px">
            {/* start tab navigation */}
            <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
              <li className="nav-item">
                <a
                  data-bs-toggle="tab"
                  href="#tab_four1"
                  className="nav-link d-flex align-items-center active"
                >
                  <i className="feather icon-feather-compass icon-extra-medium text-dark-gray"></i>
                  <span>AIS140 VLTD</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab_four2"
                >
                  <i className="feather icon-feather-wifi icon-extra-medium text-dark-gray"></i>
                  <span>m2m eSIM Solutions</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab_four3"
                >
                  <i className="feather icon-feather-monitor icon-extra-medium text-dark-gray"></i>
                  <span>Software Solutions</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab_four4"
                >
                  <i className="feather icon-feather-settings icon-extra-medium text-dark-gray"></i>
                  <span>Custom Manufacturing</span>
                </a>
              </li>
            </ul>
            {/* end tab navigation */}
          </div>

          <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="tab-content">
              {/* start tab content */}
              <div className="tab-pane fade in active show" id="tab_four1">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-xl-1 sm-mb-30px">
                    <Image
                      src="/media/ais140stack/1.png"
                      alt=""
                      className="border-radius-6px w-100"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                    <p>
                      Discover reliable white-labeled GPS devices tailored to your brand&apos;s
                      needs, ensuring seamless integration and precise location tracking
                      capabilities.
                    </p>
                  </div>
                </div>
              </div>
              {/* end tab content */}

              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_four2">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-xl-1 sm-mb-30px">
                    <Image
                      src="/media/ais140stack/2.jpg"
                      alt=""
                      className="border-radius-6px w-100"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                    <p>
                      Explore cutting-edge eSIM solutions, empowering connectivity for IoT
                      devices with global coverage and secure, scalable management options.
                    </p>
                  </div>
                </div>
              </div>
              {/* end tab content */}

              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_four3">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-xl-1 sm-mb-30px">
                    <Image
                      src="/media/ais140stack/software.png"
                      alt=""
                      className="border-radius-6px w-100"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                    <p>
                      Harness powerful software solutions for comprehensive tracking, MIS
                      reporting, and efficient device management across diverse industries.
                    </p>
                  </div>
                </div>
              </div>
              {/* end tab content */}

              {/* start tab content */}
              <div className="tab-pane fade in" id="tab_four4">
                <div className="row align-items-center">
                  <div className="col-md-6 offset-xl-1 sm-mb-30px">
                    <Image
                      src="/media/ais140stack/4.jpg"
                      alt=""
                      className="border-radius-6px w-100"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                    <p>
                      Leverage expertise in custom manufacturing of AIS140-compliant GPS
                      devices, designed to meet specific regulatory requirements and
                      operational demands with precision.
                    </p>
                  </div>
                </div>
              </div>
              {/* end tab content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

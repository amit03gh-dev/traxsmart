// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// // import Header from "../common/Header";

// export default function AIS140() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (imageRef.current) {
//         const rect = imageRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const moveX = (x - rect.width / 2) / 25;
//         const moveY = (y - rect.height / 2) / 25;
//         setPosition({ x: moveX, y: moveY });
//       }
//     };

//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const sectionRect = sectionRef.current.getBoundingClientRect();
//         const scrollPercent = Math.max(
//           0,
//           Math.min(
//             1,
//             (window.innerHeight - sectionRect.top) /
//               (sectionRect.height + window.innerHeight)
//           )
//         );
//         const scrollY = (scrollPercent - 0.5) * 100; // -50 to +50 px
//         setScrollPosition(scrollY);
//       }
//     };

//     const container = imageRef.current;
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("scroll", handleScroll);
//       handleScroll();

//       return () => {
//         container.removeEventListener("mousemove", handleMouseMove);
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);

//   console.log("position",position)
//   return (
//     <section
//       id="ais140"
//       ref={sectionRef}
//       className="bg-gradient-solitude-blue-transparent py-5"
//     >
//       <div className="container">
//         <div className="row align-items-center g-5">
//           {/* Left Side */}
//           <div
//             className="col-xl-5 col-lg-6 col-md-9 md-mb-50px text-center text-lg-start"
//             // data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
//           >
//             <div className="mb-10px">
//               <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
//                 Our Flagship Product
//               </span>
//             </div>
//             <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
//               TSINDIA140
//             </h3>
//             <p className="text-dark-gray">
//               Introducing TSIndia140, Traxsmart&apos;s flagship AIS140-compliant
//               solution designed for superior vehicle tracking and fleet
//               management. With IRNSS support, MFF2 eSIM capability, and
//               adherence to both AIS140 and BIS 16833 standards, it delivers
//               real-time insights for enhanced safety, reliability, and
//               operational efficiency in modern transportation.
//             </p>
//             <div className="mb-20px">
//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">
//                       AIS-140 & BIS-16833 complaint
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">
//                       IP65 certified
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">IRNSS Ready</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="icon-with-text-style-08">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">
//                       e-Sim (MFF2) Ready
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-inline-flex flex-wrap">
//               <a
//                 href="products-gps-tsindia140.html"
//                 target="_blank"
//                 className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
//               >
//                 <span>
//                   <span>
//                     <i className="feather icon-feather-thumbs-up"></i>
//                   </span>
//                   <span
//                     className="btn-double-text ls-minus-05px"
//                     data-text="Discover more"
//                   >
//                     Discover more
//                   </span>
//                 </span>
//               </a>
//               <div className="feature-box feature-box-left-icon-middle mt-15px">
//                 <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
//                   <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
//                 </div>
//                 <div className="feature-box-content">
//                   <span className="d-block fs-14">Have any question?</span>
//                   <a
//                     href="tel: 18002129911"
//                     className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
//                   >
//                     1800 889 5802
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="col-xl-6 col-lg-6 offset-xl-1 position-relative">
//             <div
//               ref={imageRef}
//               className="w-80 ms-auto shadow-in"
//               style={{
//                 transform: `translateY(${scrollPosition}px)`,
//                 transition: "transform 0.2s ease-out",
//               }}
//             >
//               <Image
//                 src="/media/ais1402.png"
//                 alt="AIS140 Device Main"
//                 width={600}
//                 height={400}
//                 className="border-radius-15px w-100"
//               />
//             </div>

//             <div className="w-50 overflow-hidden position-absolute left-minus-40px bottom-20px shadow-in">
//               <Image
//                 src="/media/ais140.png"
//                 alt="AIS140 Device Small"
//                 width={400}
//                 height={300}
//                 className="border-radius-15px box-shadow-quadruple-large"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function AIS140() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollY = useMotionValue(0);
  const scrollTransform = useTransform(scrollY, [0, 1], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) / 25;
        const moveY = (y - rect.height / 2) / 25;
        setPosition({ x: moveX, y: moveY });
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - sectionRect.top) /
              (sectionRect.height + window.innerHeight)
          )
        );
        scrollY.set(scrollPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const container = imageRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);

    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scrollY]);

  return (
    <section
      id="ais140"
      ref={sectionRef}
      className="bg-gradient-solitude-blue-transparent py-5"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side */}
          <motion.div
            className="col-xl-5 col-lg-6 col-md-9 md-mb-50px text-center text-lg-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10px">
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                Our Flagship Product
              </span>
            </div>
            <motion.h3
              className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              TSINDIA140
            </motion.h3>
            <motion.p
              className="text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              Introducing TSIndia140, Traxsmart&apos;s flagship AIS140-compliant
              solution designed for superior vehicle tracking and fleet
              management. With IRNSS support, MFF2 eSIM capability, and
              adherence to both AIS140 and BIS 16833 standards, it delivers
              real-time insights for enhanced safety, reliability, and
              operational efficiency in modern transportation.
            </motion.p>

            {/* Feature boxes */}
            <div className="mb-20px">
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-600">
                      AIS-140 & BIS-16833 complaint
                    </span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-600">IP65 certified</span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08 mb-10px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-600">IRNSS Ready</span>
                  </div>
                </div>
              </div>
              <div className="icon-with-text-style-08">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                    <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="text-dark-gray fw-600">e-Sim (MFF2) Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-inline-flex flex-wrap">
              <a
                href="products-gps-tsindia140.html"
                target="_blank"
                className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
              >
                <span>
                  <span>
                    <i className="feather icon-feather-thumbs-up"></i>
                  </span>
                  <span
                    className="btn-double-text ls-minus-05px"
                    data-text="Discover more"
                  >
                    Discover more
                  </span>
                </span>
              </a>
              <div className="feature-box feature-box-left-icon-middle mt-15px">
                <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
                  <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
                </div>
                <div className="feature-box-content">
                  <span className="d-block fs-14">Have any question?</span>
                  <a
                    href="tel: 18002129911"
                    className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
                  >
                    1800 889 5802
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="col-xl-6 col-lg-6 offset-xl-1 position-relative">
            <motion.div
              ref={imageRef}
              className="w-80 ms-auto shadow-in"
              style={{
                translateX: position.x,
                translateY: position.y,
                y: scrollTransform,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/media/ais1402.png"
                alt="AIS140 Device Main"
                width={600}
                height={400}
                className="border-radius-15px w-100"
              />
            </motion.div>

            <motion.div
              className="w-50 overflow-hidden position-absolute left-minus-40px bottom-20px shadow-in"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/media/ais140.png"
                alt="AIS140 Device Small"
                width={400}
                height={300}
                className="border-radius-15px box-shadow-quadruple-large"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

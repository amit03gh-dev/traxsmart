// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function HeroSection() {
//   const [showVideo, setShowVideo] = useState(false);

//   return (
//     <section className="p-0">
//       <div className="container-fluid p-0">
//         <div className="row g-0">
//           {/* Left: Large image with Play Button */}
//           <div
//             className="col-xxl-7 col-lg-6 cover-background md-h-600px sm-h-400px"
//             style={{ minHeight: "90vh" }}
//           >
//             <div style={{ position: "relative", width: "100%", height: "100%" }}>
//               <Image
//                 src="https://manufacturing-today.com/wp-content/uploads/sites/4/2024/05/Electronics-Manufacturing-article-image-800x445.png"
//                 alt="Electronics Manufacturing"
//                 fill
//                 priority
//                 sizes="(max-width: 992px) 100vw, 50vw"
//                 style={{ objectFit: "cover" }}
//                 className="shadow"
//               />
//             </div>

//             {/* Play button with glow/wave */}
//             <button
//               onClick={() => setShowVideo(true)}
//               className="btn btn-light rounded-circle position-absolute shadow-lg d-flex align-items-center justify-content-center play-btn-glow"
//               style={{
//                 width: 96,
//                 height: 96,
//                 left: "50%",
//                 top: "50%",
//                 transform: "translate(-50%, -50%)",
//                 zIndex: 3,
//               }}
//               aria-label="Play demo"
//             >
              
//               <i className="bi bi-play-fill text-primary" style={{ fontSize: 36 }} />
//             </button>
//           </div>

//           {/* Right: Content */}
//           <div
//             className="col-xxl-5 col-lg-6 bg-solitude-blue p-6 xl-p-4 md-p-50px sm-p-30px"
//             // data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
//           >
//             {/* <h1>khhkhh</h1> */}
//             <div className="mb-10px">
//               <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
//               <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">Electronics Manufacturing Services</span>
//             </div>
//             <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">{"Innovating Tomorrow's Technology Today"}</h3>
//             <p className="w-80 sm-w-100 text-dark-gray">
//               TraxSmart specializes in cutting-edge electronics manufacturing services, delivering quality and efficiency to power your vision.
//             </p>
//             <div className="mb-20px">
//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">State-of-the-Art Facilities</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">End-to-End Solutions</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="icon-with-text-style-08">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">Commitment to Quality</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="d-inline-flex flex-wrap">
//               <a
//                 href="https://forms.gle/9TW51UbmnRzjowat7"
//                 target="_blank"
//                 className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
//               >
//                 <span>
//                   <span><i className="feather icon-feather-thumbs-up"></i></span>
//                   <span className="btn-double-text ls-minus-05px" data-text="Discover more">Discover more</span>
//                 </span>
//               </a>
//               <div className="feature-box feature-box-left-icon-middle mt-15px">
//                 <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
//                   <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
//                 </div>
//                 <div className="feature-box-content">
//                   <span className="d-block fs-14">Have any question?</span>
//                   <a href="tel: 18002129911" className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px">1800 889 5802</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {showVideo && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
//           style={{ zIndex: 1050 }}
//           onClick={() => setShowVideo(false)}
//         >
//           <div
//             className="ratio ratio-16x9"
//             style={{ maxWidth: "1000px", width: "90%" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <iframe
//               src="https://www.youtube.com/embed/VYr5qKB8K1s?si=Zk7DCmmg7OD-hBZu"
//               title="YouTube video player"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             />
//           </div>
//         </div>
//       )}

//       {/* 🔹 Extra CSS for wave/glow effect */}
//       <style jsx>{`
//         .play-btn-glow {
//           position: relative;
//         }
//         .play-btn-glow::before,
//         .play-btn-glow::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: 50%;
//           background: rgba(0, 123, 255, 0.4);
//           z-index: -1;
//           animation: pulse 2s infinite;
//         }
//         .play-btn-glow::after {
//           animation-delay: 1s;
//         }
//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//             opacity: 0.8;
//           }
//           100% {
//             transform: scale(2.2);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

// ================= TYPES =================
type HeroFeature = {
  icon: string; // icon class
  text: string;
};

type HeroButton = {
  text: string;
  href: string;
  icon: string;
};

type HeroContact = {
  label: string;
  phone: string;
};

type HeroData = {
  tagline: string;
  title: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
  };
  features: HeroFeature[];
  button: HeroButton;
  contact: HeroContact;
  videoUrl?: string;
};

type Props = {
  data: HeroData;
};

// ================= COMPONENT =================
export default function SectionFour({ data }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  const scrollY = useMotionValue(0);
  const floatY = useTransform(scrollY, [0, 1], [-30, 30]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY / (document.body.scrollHeight - window.innerHeight));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section className="p-0">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left: Large image with Play Button */}
          <motion.div
            className="col-xxl-7 col-lg-6 cover-background md-h-600px sm-h-400px"
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={data.mainImage.src}
                alt={data.mainImage.alt}
                fill
                priority
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="shadow"
              />
            </div>

            {data.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="btn btn-light rounded-circle position-absolute shadow-lg d-flex align-items-center justify-content-center play-btn-glow"
                style={{
                  width: 96,
                  height: 96,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                }}
                aria-label="Play demo"
              >
                <i className="bi bi-play-fill text-primary" style={{ fontSize: 36 }} />
              </button>
            )}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="col-xxl-5 col-lg-6 bg-solitude-blue p-6 xl-p-4 md-p-50px sm-p-30px"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                {data.tagline}
              </span>
            </div>
            <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">{data.title}</h3>
            <p className="w-80 sm-w-100 text-dark-gray">{data.description}</p>

            <div className="mb-20px">
              {data.features.map((feature, i) => (
                <div key={i} className="icon-with-text-style-08 mb-10px">
                  <div className="feature-box feature-box-left-icon-middle">
                    <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                      <i className={feature.icon + " fs-14 text-dark-gray"}></i>
                    </div>
                    <div className="feature-box-content">
                      <span className="text-dark-gray fw-600">{feature.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-inline-flex flex-wrap">
              <a
                href={data.button.href}
                target="_blank"
                className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
              >
                <span>
                  <span>
                    <i className={data.button.icon}></i>
                  </span>
                  <span className="btn-double-text ls-minus-05px" data-text={data.button.text}>
                    {data.button.text}
                  </span>
                </span>
              </a>

              <div className="feature-box feature-box-left-icon-middle mt-15px">
                <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
                  <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
                </div>
                <div className="feature-box-content">
                  <span className="d-block fs-14">{data.contact.label}</span>
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
                  >
                    {data.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && data.videoUrl && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          style={{ zIndex: 1050 }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="ratio ratio-16x9"
            style={{ maxWidth: "1000px", width: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={data.videoUrl}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 🔹 Extra CSS for wave/glow effect */}
      <style jsx>{`
        .play-btn-glow {
          position: relative;
        }
        .play-btn-glow::before,
        .play-btn-glow::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.4);
          z-index: -1;
          animation: pulse 2s infinite;
        }
        .play-btn-glow::after {
          animation-delay: 1s;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

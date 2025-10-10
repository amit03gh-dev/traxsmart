"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeroContentItem } from "@/types/home";

type Slide = {
  title: string;
  subtitle: string[];
  backgroundLeft: string;
  backgroundRight: string;
  ctaLink: string;
};

const slides: Slide[] = [
  {
    title: "Location Tracking Services",
    subtitle: ["Track anything,", "anywhere", "anytime"],
    backgroundLeft: "/media/bg-blue.png",
    backgroundRight: "/media/banner/gps.jpg",
    ctaLink: "https://forms.gle/9TW51UbmnRzjowat7",
  },
  {
    title: "SaaS Platforms",
    subtitle: ["Software", "Development"],
    backgroundLeft: "/media/bg-blue.png",
    backgroundRight: "/media/banner/saas.jpg",
    ctaLink: "https://forms.gle/9TW51UbmnRzjowat7",
  },
  {
    title: "Electronics Manufacturing Services",
    subtitle: ["Hardware design", "and", "manufacturing"],
    backgroundLeft: "/media/bg-blue.png",
    backgroundRight: "/media/banner/ems.jpg",
    ctaLink: "https://forms.gle/9TW51UbmnRzjowat7",
  },
  {
    title: "m2m mobility services",
    subtitle: ["m2m", "e-Sim", "services."],
    backgroundLeft: "/media/bg-blue.png",
    backgroundRight: "/media/banner/esim.jpg",
    ctaLink: "https://forms.gle/9TW51UbmnRzjowat7",
  },
];


interface Props {
  data: HeroContentItem[]
}

export default function HeroSlider({data}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // each child delays 0.15s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }, // button delayed
  };

  return (
    <section className="p-0 top-space-margin position-relative overflow-hidden" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ el: ".swiper-number", clickable: true }}
        navigation={{
          nextEl: ".slider-one-slide-next-1",
          prevEl: ".slider-one-slide-prev-1",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper full-screen swiper-number-pagination-style-01 md-h-auto magic-cursor"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container-fluid h-100 g-0">
              <div className="row h-100 p-0">
                <div
                  className="col-xxl-5 col-lg-6 text-white bg-theme cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20"
                  style={{ backgroundImage: `url(${slide.backgroundLeft})` }}
                >
                  {activeIndex === index && (
                    <motion.div
                      className="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100"
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                    >
                      <motion.span
                        className="fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white-very-light text-uppercase"
                        variants={itemVariants}
                      >
                        {slide.title}
                      </motion.span>
                      <motion.div
                        className="fs-75 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90"
                        variants={containerVariants}
                      >
                        {slide.subtitle.map((line, i) => (
                          <motion.span key={i} variants={itemVariants}>
                            {line}{" "}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div className="d-inline-block mt-45px sm-mt-30px" variants={buttonVariants}>
                        <a
                          href={slide.ctaLink}
                          target="_blank"
                          className="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon"
                        >
                          <span>
                            <span>
                              <i className="feather icon-feather-thumbs-up"></i>
                            </span>
                            <span className="btn-double-text ls-minus-05px" data-text="Discover more">
                              Discover more
                            </span>
                          </span>
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
                <div
                  className="col-xxl-7 col-lg-6 cover-background sm-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px"
                  style={{ backgroundImage: `url(${slide.backgroundRight})` }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="position-relative">
        <div className="swiper-pagination w-auto left-0 md-right-0px text-center swiper-pagination-clickable swiper-number fs-14 ps-6 xxl-ps-4 md-ps-0"></div>
      </div>
    </section>
  );
}




// 'use client';

// import { useRef, useState } from 'react';
// import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// type Slide = {
//   title: string;
//   subtitle: string[];
//   backgroundLeft: string;
//   backgroundRight: string;
//   buttonLink: string;
//   buttonText: string;
// };

// const slides: Slide[] = [
//   {
//     title: 'Location Tracking Services',
//     subtitle: ['Track anything,', 'anywhere', 'anytime'],
//     backgroundLeft: '/media/bg-blue.png',
//     backgroundRight: '/media/banner/gps.jpg',
//     buttonLink: 'https://forms.gle/9TW51UbmnRzjowat7',
//     buttonText: 'Discover more',
//   },
//   {
//     title: 'SaaS Platforms',
//     subtitle: ['Software', 'Development'],
//     backgroundLeft: '/media/bg-blue.png',
//     backgroundRight: '/media/banner/saas.jpg',
//     buttonLink: 'https://forms.gle/9TW51UbmnRzjowat7',
//     buttonText: 'Discover more',
//   },
//   {
//     title: 'Electronics Manufacturing Services',
//     subtitle: ['Hardware design', 'and', 'manufacturing'],
//     backgroundLeft: '/media/bg-blue.png',
//     backgroundRight: '/media/banner/ems.jpg',
//     buttonLink: 'https://forms.gle/9TW51UbmnRzjowat7',
//     buttonText: 'Discover more',
//   },
//   {
//     title: 'm2m mobility services',
//     subtitle: ['m2m', 'e-Sim', 'services.'],
//     backgroundLeft: '/media/bg-blue.png',
//     backgroundRight: '/media/banner/esim.jpg',
//     buttonLink: 'https://forms.gle/9TW51UbmnRzjowat7',
//     buttonText: 'Discover more',
//   },
// ];

// export default function HeroSlider() {
// //   const swiperRef = useRef<any>(null);
// const swiperRef = useRef<SwiperClass | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="p-0 top-space-margin position-relative overflow-hidden" id="home" style={{marginTop: "40px"}}>
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         modules={[Navigation, Autoplay, Keyboard]}
//         slidesPerView={1}
//         loop={true}
//         navigation={{
//           nextEl: '.slider-one-slide-next-1',
//           prevEl: '.slider-one-slide-prev-1',
//         }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         keyboard={{ enabled: true, onlyInViewport: true }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="swiper full-screen swiper-number-pagination-style-01 md-h-auto magic-cursor"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="swiper-slide">
//             <div className="container-fluid h-100 g-0">
//               <div className="row h-100 p-0">
//                 {/* Left Column */}
//                 <div
//                   className="col-xxl-5 col-lg-6 text-white bg-theme cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20"
//                   style={{ backgroundImage: `url('${slide.backgroundLeft}')` }}
//                 >
//                   <div
//                     className="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100"
//                     data-anime='{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'
//                   >
//                     <span className="fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white-very-light text-uppercase">
//                       {slide.title}
//                     </span>
//                     <div className="fs-75 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90">
//                       {slide.subtitle.map((line, i) => (
//                         <span key={i}>{line} {" "}</span>
//                       ))}
//                     </div>
//                     <div className="d-inline-block mt-45px sm-mt-30px">
//                       <a
//                         href={slide.buttonLink}
//                         target="_blank"
//                         className="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon"
//                       >
//                         <span>
//                           <span>
//                             <i className="feather icon-feather-thumbs-up"></i>
//                           </span>
//                           <span
//                             className="btn-double-text ls-minus-05px"
//                             data-text={slide.buttonText}
//                           >
//                             {slide.buttonText}
//                           </span>
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div
//                   className="col-xxl-7 col-lg-6 cover-background sm-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px"
//                   style={{ backgroundImage: `url('${slide.backgroundRight}')` }}
//                 ></div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Numbered Pagination */}
//       <div className="position-relative">
//         <div className="swiper-pagination w-auto left-0 md-right-0px text-center swiper-number fs-14 ps-6 xxl-ps-4 md-ps-0">
//           {slides.map((_, idx) => (
//             <span
//               key={idx}
//               className={idx === activeIndex ? 'active' : ''}
//               style={{ marginRight: '10px', cursor: 'pointer' }}
//               onClick={() => swiperRef.current?.slideToLoop(idx)}
//             >
//               {idx + 1}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

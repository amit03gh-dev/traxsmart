"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// TYPEs

type INDUSTRIES = {
  title: string;
  img: string;
};

type props = {
  data: INDUSTRIES[];
};

export default function SectionFive({ data }: props) {
  return (
    <section
      id="industries"
      className="ps-7 pe-7 xl-ps-5 xl-pe-5 lg-ps-3 lg-pe-3 xs-ps-15px xs-pe-15px"
    >
      <div className="overflow-hidden bg-solitude-blue border-radius-20px lg-border-radius-0px pt-7 pb-5 lg-pt-5 lg-pb-5 lg-ps-3 lg-pe-3 sm-pt-50px sm-pb-50px">
        <div className="container">
          <div className="row align-items-center mb-5 sm-mb-9 text-center text-md-start">
            <div className="col-lg-5 col-md-6 md-mb-20px">
              <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
                Offering services across
              </span>
              <h2 className="text-dark-gray fw-700 mb-0 ls-minus-1px">
                15+ Industries
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 last-paragraph-no-margin md-mb-20px">
              <p className="w-100 xl-w-100 mx-auto text-dark-gray">
                We offer advanced GPS tracking technology designed to improve
                visibility and efficiency across multiple domains. Our solutions
                include real-time tracking, route optimization, and asset
                monitoring, enabling businesses to streamline processes, reduce
                costs, and enhance customer satisfaction.
              </p>
            </div>
            {/* <div className="col-lg-2 d-flex justify-content-center justify-content-xl-end">
              <div
                className="slider-one-slide-prev-1 icon-extra-medium text-dark-gray swiper-button-prev slider-navigation-style-04 bg-white box-shadow-medium-bottom"
              >
                <i className="feather icon-feather-arrow-left"></i>
              </div>
              <div
                className="slider-one-slide-next-1 icon-extra-medium text-dark-gray swiper-button-next slider-navigation-style-04 bg-white box-shadow-medium-bottom"
              >
                <i className="feather icon-feather-arrow-right"></i>
              </div>
            </div> */}

            <div className="col-lg-2 d-flex justify-content-center justify-content-xl-end gap-2">
              <button
              className="btn btn-light rounded-circle shadow nav-prev"
              style={{ width: 48, height: 48 }}
            >
              <i className="bi bi-arrow-left text-center m-0"></i>
            </button>
            <button
              className="btn btn-light rounded-circle shadow nav-next text-center"
              style={{ width: 48, height: 48 }}
            >
              <i className="bi bi-arrow-right m-0"></i>
            </button>
            </div>
          </div>

          <div>

            {/* Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={3}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".nav-next",
                prevEl: ".nav-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                768: { slidesPerView: 2.2 },
                1200: { slidesPerView: 3.2 },
              }}
            >
              {data.map((ind, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white rounded shadow-sm overflow-hidden h-100"
                    // initial={{ opacity: 0, y: 50 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                      }}
                    >
                      <Image
                        src={ind.img}
                        alt={ind.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="bg-white">
                      <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
                        <div className="fs-18 text-dark-gray fw-600">
                          {ind.title}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";

// export default function SectionFive() {
//   return (
//     <section
//       className="ps-7 pe-7 xl-ps-5 xl-pe-5 lg-ps-3 lg-pe-3 xs-ps-15px xs-pe-15px"
//       id="industries"
//     >
//       <div className="overflow-hidden bg-solitude-blue border-radius-20px lg-border-radius-0px pt-7 pb-5 lg-pt-5 lg-pb-5 lg-ps-3 lg-pe-3 sm-pt-50px sm-pb-50px">
//         <div className="container">
//           <div
//             className="row align-items-center mb-5 sm-mb-9 text-center text-md-start"
//             // data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
//           >
//             <div className="col-lg-5 col-md-6 md-mb-20px">
//               <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
//                 Offering services across
//               </span>
//               <h2 className="text-dark-gray fw-700 mb-0 ls-minus-1px">
//                 15+ Industries
//               </h2>
//             </div>
//             <div className="col-lg-5 col-md-6 last-paragraph-no-margin md-mb-20px">
//               <p className="w-100 xl-w-100 mx-auto text-dark-gray">
//                 We offer advanced GPS tracking technology designed to improve
//                 visibility and efficiency across multiple domains. Our solutions
//                 include real-time tracking, route optimization, and asset
//                 monitoring, enabling businesses to streamline processes, reduce
//                 costs, and enhance customer satisfaction.
//               </p>
//             </div>
//             <div className="col-lg-2 d-flex justify-content-center justify-content-xl-end">
//               <div className="slider-one-slide-prev-1 icon-extra-medium text-dark-gray swiper-button-prev slider-navigation-style-04 bg-white box-shadow-medium-bottom">
//                 <i className="feather icon-feather-arrow-left"></i>
//               </div>
//               <div className="slider-one-slide-next-1 icon-extra-medium text-dark-gray swiper-button-next slider-navigation-style-04 bg-white box-shadow-medium-bottom">
//                 <i className="feather icon-feather-arrow-right"></i>
//               </div>
//             </div>
//           </div>
//           <div className="row align-items-center mb-5 xs-mb-30px">
//             <div
//               className="col-12"
//               data-anime='{ "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
//             >
//               <div className="outside-box-right-25 sm-outside-box-right-0">
//                 <div
//                   className="swiper magic-cursor drag-cursor slider-one-slide"
//                   data-slider-options='{ "slidesPerView": 1, "spaceBetween": 30, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
//                 >
//                   <div className="swiper-wrapper">
//                     <div className="swiper-slide">
//                       <div className="services-box-style-03 last-paragraph-no-margin border-radius-6px overflow-hidden">
//                         <div className="position-relative">
//                           <a href="#">
//                             <Image
//                               src="/media/domains/logistics.jpg"
//                               alt="logistics"
//                               width={400}
//                               height={300}
//                             />
//                           </a>
//                         </div>
//                         <div className="bg-white">
//                           <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
//                             <div className="fs-18 text-dark-gray fw-600">
//                               Logistics
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="swiper-slide">
//                       <div className="services-box-style-03 last-paragraph-no-margin border-radius-6px overflow-hidden">
//                         <div className="position-relative">
//                           <a href="#">
//                             <Image
//                               src="/media/domains/agriculture.jpg"
//                               alt="agriculture"
//                               width={400}
//                               height={300}
//                             />
//                           </a>
//                         </div>
//                         <div className="bg-white">
//                           <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
//                             <div className="fs-18 text-dark-gray fw-600">
//                               Agriculture
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Continue same pattern for remaining industries... */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";

// export default function SectionFive() {
//   const industries = [
//     {
//       title: "Logistics",
//       img: "/media/domains/logistics.jpg",
//     },
//     {
//       title: "Agriculture",
//       img: "/media/domains/agriculture.jpg",
//     },
//     {
//       title: "Emergency Services",
//       img: "/media/domains/emergency-services.jpg",
//     },
//     {
//       title: "Smart Waste",
//       img: "/media/domains/swm.jpg",
//     },
//     {
//       title: "Schools",
//       img: "/media/domains/schools.jpg",
//     },
//     {
//       title: "Mining",
//       img: "/media/domains/mining.jpg",
//     },
//     {
//       title: "Oil and Gas",
//       img: "/media/domains/oil-and-gas.jpg",
//     },
//     {
//       title: "Passerger Transit",
//       img: "/media/domains/passenger_transit.jpg",
//     },
//     {
//       title: "Railways",
//       img: "/media/domains/railways.jpg",
//     },
//     {
//       title: "Waterways",
//       img: "/media/domains/waterways.jpg",
//     },
//   ];

//   return (
//     <section id="industries" className="py-5 bg-white">
//       <div
//         className="container p-3"
//         style={{
//           background: "#F4F7FE",
//           borderRadius: "20px",
//         }}
//       >
//         {/* Header with text + arrows */}
//         <div className="d-flex justify-content-between align-items-start flex-wrap">
//           {/* Left content */}
//           <div style={{ maxWidth: 700 }}>
//             <p className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
//               OFFERING SERVICES ACROSS
//             </p>
//             <h2 className="text-dark-gray fw-700 mb-1 ls-minus-1px">
//               15+ Industries
//             </h2>
//             <p className="w-100 xl-w-100 mx-auto text-dark-gray">
//               We offer advanced GPS tracking technology designed to improve
//               visibility and efficiency across multiple domains. Our solutions
//               include real-time tracking, route optimization, and asset
//               monitoring, enabling businesses to streamline processes, reduce
//               costs, and enhance customer satisfaction.
//             </p>
//           </div>
//         </div>

//         <div>
//           {/* Navigation Arrows */}
//           <div className="d-flex justify-content-end gap-3 mb-1 mt-lg-0">
//             <button
//               className="btn btn-light rounded-circle shadow nav-prev"
//               style={{ width: 48, height: 48 }}
//             >
//               <i className="bi bi-arrow-left text-center m-0"></i>
//             </button>
//             <button
//               className="btn btn-light rounded-circle shadow nav-next text-center"
//               style={{ width: 48, height: 48 }}
//             >
//               <i className="bi bi-arrow-right m-0"></i>
//             </button>
//           </div>

//           {/* Slider */}
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={3}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             navigation={{
//               nextEl: ".nav-next",
//               prevEl: ".nav-prev",
//             }}
//             breakpoints={{
//               0: { slidesPerView: 1.2 },
//               768: { slidesPerView: 2.2 },
//               1200: { slidesPerView: 3.2 },
//             }}
//           >
//             {industries.map((ind, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="bg-white rounded shadow-sm overflow-hidden h-100"
//                   style={{ borderRadius: "12px" }}
//                 >
//                   <div
//                     style={{ position: "relative", width: "100%", height: 200 }}
//                   >
//                     <Image
//                       src={ind.img}
//                       alt={ind.title}
//                       fill
//                       style={{ objectFit: "cover" }}
//                     />
//                   </div>
//                   {/* <div className="fs-18 text-dark-gray fw-600">{ind.title}</div> */}
//                   <div className="bg-white">
//                     <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
//                       <div className="fs-18 text-dark-gray fw-600">
//                         {ind.title}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function SectionFive() {
  const industries = [
    { title: "Logistics", img: "/media/domains/logistics.jpg" },
    { title: "Agriculture", img: "/media/domains/agriculture.jpg" },
    { title: "Emergency Services", img: "/media/domains/emergency-services.jpg" },
    { title: "Smart Waste", img: "/media/domains/swm.jpg" },
    { title: "Schools", img: "/media/domains/schools.jpg" },
    { title: "Mining", img: "/media/domains/mining.jpg" },
    { title: "Oil and Gas", img: "/media/domains/oil-and-gas.jpg" },
    { title: "Passerger Transit", img: "/media/domains/passenger_transit.jpg" },
    { title: "Railways", img: "/media/domains/railways.jpg" },
    { title: "Waterways", img: "/media/domains/waterways.jpg" },
  ];

  return (
    <section id="industries" className="py-5 bg-white">
      <motion.div
        className="container p-3"
        style={{ background: "#F4F7FE", borderRadius: "20px" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header with text + arrows */}
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          <div style={{ maxWidth: 700 }}>
            <p className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
              OFFERING SERVICES ACROSS
            </p>
            <h2 className="text-dark-gray fw-700 mb-1 ls-minus-1px">
              15+ Industries
            </h2>
            <p className="w-100 xl-w-100 mx-auto text-dark-gray">
              We offer advanced GPS tracking technology designed to improve
              visibility and efficiency across multiple domains. Our solutions
              include real-time tracking, route optimization, and asset
              monitoring, enabling businesses to streamline processes, reduce
              costs, and enhance customer satisfaction.
            </p>
          </div>
        </div>

        <div>
          {/* Navigation Arrows */}
          <div className="d-flex justify-content-end gap-3 mb-1 mt-lg-0">
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
            {industries.map((ind, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded shadow-sm overflow-hidden h-100"
                  style={{ borderRadius: "12px" }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div style={{ position: "relative", width: "100%", height: 200 }}>
                    <Image
                      src={ind.img}
                      alt={ind.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-white">
                    <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
                      <div className="fs-18 text-dark-gray fw-600">{ind.title}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}











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

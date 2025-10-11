// "use client";

// import Image from "next/image";

// const clientLogos = [
//   "/media/clients/1.png",
//   "/media/clients/2.png",
//   "/media/clients/3.png",
//   "/media/clients/4.png",
//   "/media/clients/5.png",
//   "/media/clients/6.png",
//   "/media/clients/7.png",
//   "/media/clients/8.png",
// ];

// export default function ImageSlider() {
//   // Duplicate logos for seamless loop
//   const logos = [...clientLogos, ...clientLogos];

//   return (
//     <div className="container">
//       <div className="text-center mb-50px">
//         <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
//           Our Empanelments
//         </span>
//       </div>

//       <div className="marquee-wrapper">
//         <div className="marquee">
//           {logos.map((logo, index) => (
//             <div className="marquee-item" key={index}>
//               <Image
//                 src={logo}
//                 alt={`Client ${index + 1}`}
//                 width={147.42}
//                 height={147.42}
//                 // className="w-80"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         .marquee-wrapper {
//           overflow: hidden;
//           position: relative;
//         }
//         .marquee {
//           display: flex;
//           width: max-content;
//           justify-content: center;
//           align-items: center;
//           // border: 1px solid red;
//           animation: scroll 20s linear infinite;
//         }
//         .marquee-item {
//           margin-right: 30px;
//           //  border: 1px solid red;
//           flex: 0 0 auto;
//         }
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const clients = [
  "/media/clients/1.png",
  "/media/clients/2.png",
  "/media/clients/3.png",
  "/media/clients/4.png",
  "/media/clients/5.png",
  "/media/clients/6.png",
  "/media/clients/7.png",
  "/media/clients/8.png",
];

export default function TX_LogoSlider() {
  return (
    <div className="row">
      <div className="text-center mb-50px">
        <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
          Our Empanelments
        </span>
      </div>
      <div className="row position-relative clients-style-08">
        {/* <div className="text-center mb-50px">
            <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">Our Empanelments</span>
          </div> */}
        <div
          className="col swiper text-center feather-shadow"
          // data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 3000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false, "pauseOnMouseEnter": false}, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 7 }, "768": { "slidesPerView": 6 }, "576": { "slidesPerView": 5 } }, "effect": "slide" }'
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Keyboard]}
            slidesPerView={2}
            spaceBetween={0}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation={{
              nextEl: ".slider-four-slide-next-2",
              prevEl: ".slider-four-slide-prev-2",
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            pagination={{
              el: ".slider-four-slide-pagination-2",
              clickable: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 7 },
              768: { slidesPerView: 6 },
              576: { slidesPerView: 5 },
            }}
            effect="slide"
            className="marquee-slide"
          >
            {clients.map((src, i) => (
              <SwiperSlide key={i}>
                <a href="#">
                  <Image
                    src={src}
                    alt={`Client ${i + 1}`}
                    width={100}
                    height={100}
                    className="w-80"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

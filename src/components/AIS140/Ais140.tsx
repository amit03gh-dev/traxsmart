"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ImageSlider from "../Product/ImageSlider";

// Define props types
interface Feature {
  label: string;
}

interface Button {
  text: string;
  href: string;
  icon?: string;
}

interface Contact {
  phone: string;
  label?: string;
}

interface AIS140Props {
  id?: string;
  tagline: string;
  title: string;
  description: string;
  features: Feature[];
  button: Button;
  contact: Contact;
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export default function AIS140({
  id = "ais140",
  tagline,
  title,
  description,
  features,
  button,
  contact,
  mainImage,
  secondaryImage,
}: AIS140Props) {
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

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scrollY]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="bg-gradient-solitude-blue-transparent"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
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
                {tagline}
              </span>
            </div>
            <motion.h3
              className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              {description}
            </motion.p>

            {/* Feature boxes */}
            <div className="mb-20px">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="icon-with-text-style-08 mb-10px"
                >
                  <div className="feature-box feature-box-left-icon-middle">
                    <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                      <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                    </div>
                    <div className="feature-box-content">
                      <span className="text-dark-gray fw-600">{f.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons & Contact */}
            <div className="d-inline-flex flex-wrap">
              <a
                href={button.href}
                target="_blank"
                className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
              >
                <span>
                  <span>
                    {button.icon && <i className={button.icon}></i>}
                  </span>
                  <span
                    className="btn-double-text ls-minus-05px"
                    data-text={button.text}
                  >
                    {button.text}
                  </span>
                </span>
              </a>
              <div className="feature-box feature-box-left-icon-middle mt-15px">
                <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
                  <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
                </div>
                <div className="feature-box-content">
                  <span className="d-block fs-14">
                    {contact.label ?? "Have any question?"}
                  </span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
                  >
                    {contact.phone}
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
                src={mainImage.src}
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                className="border-radius-15px w-100"
              />
            </motion.div>

            {secondaryImage && (
              <motion.div
                className="w-50 overflow-hidden position-absolute left-minus-40px bottom-20px shadow-in"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  width={secondaryImage.width}
                  height={secondaryImage.height}
                  className="border-radius-15px box-shadow-quadruple-large"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="row position-relative clients-style-08 mt-15">
          <ImageSlider/>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import Image from "next/image";
// import ImageSlider from "../Product/ImageSlider";

// export default function AIS140() {
//   return (
//     <section className="bg-gradient-solitude-blue-transparent" id="ais140">
//       <div className="container">
//         <div className="row align-items-center justify-content-center">
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
//               {/* start features box item */}
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
//               {/* end features box item */}

//               <div className="icon-with-text-style-08 mb-10px">
//                 <div className="feature-box feature-box-left-icon-middle">
//                   <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
//                     <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
//                   </div>
//                   <div className="feature-box-content">
//                     <span className="text-dark-gray fw-600">IP65 certified</span>
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

//           {/* Images Section */}
//           <div className="col-xl-6 col-lg-6 offset-xl-1 position-relative">
//             <div
//               className="w-80 ms-auto skrollable skrollable-between shadow-in"
//               data-animation-delay="500"
//               data-shadow-animation="true"
//               data-bottom-top="transform: translateY(50px)"
//               data-top-bottom="transform: translateY(-50px)"
//               style={{ transform: "translateY(32.3418px)" }}
//             >
//               <Image
//                 src="/media/ais1402.png"
//                 alt=""
//                 width={800}
//                 height={600}
//                 className="border-radius-15px w-100"
//               />
//             </div>

//             <div
//               className="w-50 overflow-hidden position-absolute left-minus-40px bottom-20px skrollable shadow-in skrollable-between"
//               data-shadow-animation="true"
//               data-animation-delay="500"
//               data-bottom-top="transform: translateY(-20px)"
//               data-top-bottom="transform: translateY(50px)"
//               style={{ transform: "translateY(-13.3991px)" }}
//             >
//               <Image
//                 src="/media/ais140.png"
//                 alt=""
//                 width={400}
//                 height={300}
//                 className="border-radius-15px box-shadow-quadruple-large"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Clients Section */}
//         <div
//           className="row position-relative clients-style-08 mt-15"
//           // data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 800, "delay":100, "staggervalue": 150, "easing": "easeOutQuad" }'
//         >
//           <div className="text-center mb-50px">
//             <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
//               Our Empanelments
//             </span>
//           </div>
//           <ImageSlider/>
//           {/* <div
//             className="col swiper text-center feather-shadow"
//             data-slider-options='{ "slidesPerView": 2, "spaceBetween":0, "speed": 3000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay":0, "disableOnInteraction": false, "pauseOnMouseEnter": false}, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 7 }, "768": { "slidesPerView": 6 }, "576": { "slidesPerView": 5 } }, "effect": "slide" }'
//           >
//             <div className="swiper-wrapper marquee-slide">
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/1.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/2.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/3.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/4.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/5.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/6.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/7.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//               <div className="swiper-slide">
//                 <a href="#">
//                   <Image src="/media/clients/8.png" alt="" width={120} height={80} className="w-80" />
//                 </a>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }


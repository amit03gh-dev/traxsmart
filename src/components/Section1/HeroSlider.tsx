"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeroContentItem } from "@/types/home";


interface Props {
  data: HeroContentItem[]
}

export default function HeroSlider({data}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

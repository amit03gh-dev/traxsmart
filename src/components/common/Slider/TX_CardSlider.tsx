"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


interface CardSliderType {
  title: string;
  img: string;
  alt: string;
}

interface Props {
  data: CardSliderType[]
}

export default function TX_CardSlider({data}:Props) {
  return (
    <div className="row align-items-center mb-5 xs-mb-30px">
      <div className="col-12">
        <div className="outside-box-right-25 sm-outside-box-right-0">
          <Swiper
            modules={[Navigation, Autoplay, Keyboard]}
            spaceBetween={30}
            loop={true}
            navigation={{
               nextEl: ".nav-next",
              prevEl: ".nav-prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              320: { slidesPerView: 1 },
            }}
            effect="slide"
            className="swiper magic-cursor drag-cursor slider-one-slide"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="services-box-style-03 last-paragraph-no-margin border-radius-6px overflow-hidden">
                  <div className="position-relative">
                    <a href="#">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={400}
                        height={250}
                        className="w-100 h-auto"
                        priority
                        fetchPriority="high"
                      />
                    </a>
                  </div>
                  <div className="bg-white">
                    <div className="d-flex justify-content-center border-top border-color-extra-medium-gray pt-20px pb-20px ps-50px pe-50px position-relative text-center">
                      <div className="fs-18 text-dark-gray fw-600">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

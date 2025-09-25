'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const clientLogos = [
  '/media/clients/1.png',
  '/media/clients/2.png',
  '/media/clients/3.png',
  '/media/clients/4.png',
  '/media/clients/5.png',
  '/media/clients/6.png',
  '/media/clients/7.png',
  '/media/clients/8.png',
];

export default function ImageSlider() {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="row position-relative clients-style-08">
            {/* Title */}
            <div className="text-center mb-50px">
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                Our Empanelments
              </span>
            </div>

            {/* Continuous Slider */}
            <div className="col text-center feather-shadow">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                speed={5000} // duration of full loop
                autoplay={{
                  delay: 0, // no waiting between transitions
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                allowTouchMove={false}
                breakpoints={{
                  576: { slidesPerView: 5 },
                  768: { slidesPerView: 6 },
                  1200: { slidesPerView: 7 },
                }}
                className="marquee-slide"
              >
                {clientLogos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <a href="#">
                      <Image
                        src={logo}
                        alt={`Client ${index + 1}`}
                        width={120}
                        height={80}
                        className="w-80"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Text from "./common/Text";

type SlideData = {
  src: string;
  alt?: string;
  title?: string;
  subTitle?: string;
  buttonText?: string;
  layout?: "left" | "center" | "right" | "custom";
  textColor?: string;
  customClass?: string; // for full flexibility
};

type ImageSliderProps = {
  images: SlideData[];
  slidesPerView?: number;
  width?: number;
  height?: number;
  gap?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean;
  breakpoints?: { [key: number]: { slidesPerView: number } };
  imageStyle?: string;
  slidesPerGroup?: number;
  delay?: number;
  mode?: string;
  speed?: number;
};

export default function ImageSlider({
  images,
  slidesPerView = 1,
  width = 1200,
  height = 600,
  gap = 20,
  showNavigation = true,
  showPagination = true,
  autoplay = true,
  breakpoints,
  imageStyle = "",
  slidesPerGroup = 1,
  delay = 3000,
  mode = "normal",
  speed,
}: ImageSliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={showNavigation}
      pagination={showPagination ? { clickable: true } : false}
      autoplay={
        autoplay ? { delay: delay, disableOnInteraction: false } : false
      }
      {...(speed ? { speed } : {})}
      // allowTouchMove={false} // optional: prevent manual drag
      freeMode={{
        enabled: mode == "continous" ? true : false,
        momentum: false,
      }}
      loop
      spaceBetween={gap}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      slidesPerGroup={slidesPerGroup}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div style={{ width, height }}>
            {/* Background Image */}
            <Image
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              fill
              priority={index === 0}
              style={{ objectFit: "cover" }}
              className={`object-cover position-relative ${imageStyle}`}
            />

            {/* Overlay Content */}
            {(img.title || img.subTitle || img.buttonText) && (
              <div
                className={`position-absolute top-0 start-0 w-100 h-100 d-flex ${
                  img.layout === "center"
                    ? "justify-content-center align-items-center text-center"
                    : img.layout === "right"
                    ? "justify-content-end align-items-center text-end pe-5"
                    : img.layout === "custom"
                    ? img.customClass || "" // full custom control
                    : "align-items-center ps-5" // default left
                }`}
              >
                <div className={img.textColor || "text-white"}>
                  {img.subTitle && (
                    <Text className="text-uppercase fw-bold small mb-2">
                      {img.subTitle}
                    </Text>
                  )}
                  {img.title && (
                    <Text className="fw-bold display-2">{img.title}</Text>
                  )}
                  {img.buttonText && (
                    // <button className="btn btn-light btn-lg rounded-pill px-4 py-3 mt-3 border shadow-sm">
                    //   <i className="bi bi-hand-thumbs-up me-2 fw-bold"></i>
                    //   <span className="fw-semibold">{img.buttonText}</span>
                    // </button>
                    <div className="d-inline-block mt-45px sm-mt-30px">
                      <a
                        href="https://forms.gle/9TW51UbmnRzjowat7"
                        target="_blank"
                        className="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon"
                      >
                        <span>
                          <span>
                            <i className="feather icon-feather-thumbs-up"></i>
                          </span>
                          <span
                            className="btn-double-text ls-minus-05px"
                            data-text="Discover more"
                          >
                            {img.buttonText}
                          </span>
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

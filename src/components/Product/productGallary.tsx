'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { GalleryImage } from '@/types/product';


export default function ProductGallery({galleryImages}:{galleryImages: GalleryImage[]}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="col-lg-7 pe-50px md-pe-15px md-mb-40px">
      <div className="row overflow-hidden position-relative">
        {/* Main Image Slider */}
        <div className="col-12 col-lg-10 position-relative order-lg-2 product-image ps-30px md-ps-15px">
          <Swiper
            modules={[Navigation, Thumbs, Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.slider-product-next',
              prevEl: '.slider-product-prev',
            }}
            thumbs={{ swiper: thumbsSwiper }}
            className="product-image-slider"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i} className="gallery-box">
                <a href={img.src} data-group="lightbox-gallery" title={img.title}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={600}
                    height={600}
                    className="w-100"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnail Slider */}
        <div className="col-12 col-lg-2 order-lg-1 position-relative single-product-thumb">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Navigation, Thumbs]}
            spaceBetween={15}
            slidesPerView="auto"
            direction="vertical"
            className="product-image-thumb slider-vertical"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img.src}
                  alt={img.title}
                  width={120}
                  height={120}
                  className="w-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

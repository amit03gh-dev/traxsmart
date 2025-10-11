'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Text from './common/Text';
import Button from './common/Button';

type SlideData = {
    src: string;
    title?: string;
    subTitle?: string;
    buttonText?: string;
    layout?: 'left' | 'center' | 'right' | 'custom';
    textColor?: string;
    customClass?: string;
};

type VerticalSliderProps = {
    images: SlideData[];
    height?: number;
    autoplay?: boolean;
    showNavigation?: boolean;
    showPagination?: boolean;
};

export default function VerticalSlider({
    images,
    height = 300,
    autoplay = true,
    showNavigation = false,
    showPagination = false,
}: VerticalSliderProps) {
    // ✅ Group images into pairs
    const pairedSlides = images.reduce((rows, img, i) => {
        if (i % 2 === 0) rows.push([img, images[i + 1]]);
        return rows;
    }, [] as SlideData[][]);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            direction="vertical"
            navigation={showNavigation}
            pagination={showPagination ? { clickable: true } : false}
            autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
            loop
            slidesPerView={1} // 👈 one "pair" per cycle
            spaceBetween={0}
            style={{ height: `${height * 2}px` }} // two stacked
        >
            {pairedSlides.map((pair, index) => (
                <SwiperSlide key={index}>
                    <div className="d-flex flex-column" style={{ height: `${height * 2}px` }}>
                        {pair.map(
                            (img, i) =>
                                img && (
                                    <div
                                        key={i}
                                        style={{ flex: 1, position: 'relative', width: '100%', height: `${height}px` }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.title || `Slide ${index}-${i}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority
                                            fetchPriority="high"
                                        />

                                        {/* Overlay Content */}
                                        {(img.title || img.subTitle || img.buttonText) && (
                                            <div
                                                className={`position-absolute top-0 start-0 w-100 h-100 d-flex ${img.layout === 'center'
                                                    ? 'justify-content-center align-items-center text-center'
                                                    : img.layout === 'right'
                                                        ? 'justify-content-end align-items-center text-end pe-5'
                                                        : img.layout === 'custom'
                                                            ? img.customClass || ''
                                                            : 'align-items-center ps-5'
                                                    }`}
                                            >
                                                <div className={img.textColor || 'text-white'}>
                                                    {img.subTitle && (
                                                        <Text className="text-uppercase fw-bold small mb-2" style={{ textDecoration: 'underline', textDecorationColor: 'blue' }}>
                                                            {img.subTitle}
                                                        </Text>
                                                    )}
                                                    {img.title && <Text className="fw-bold h2">{img.title}</Text>}
                                                    {img.buttonText && (
                                                        <Button className="btn-light btn-sm rounded-pill px-3 py-3 mt-2 border shadow-sm fw-bold">
                                                            {img.buttonText}
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}



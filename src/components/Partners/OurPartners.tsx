'use client';

import ImageSlider from "../Product/ImageSlider";

// import ImageSlider from "../Slider";

// import ImageSlider from "../ImageSlider";

export default function OurPartnersComp() {
  const sliderImages = [
    { src: 'https://traxsmart.in/media/clients/6.png', alt: 'Partner 6' },
    { src: 'https://traxsmart.in/media/clients/1.png', alt: 'Partner 1' },
    { src: 'https://traxsmart.in/media/clients/7.png', alt: 'Partner 7' },
    { src: 'https://traxsmart.in/media/clients/2.png', alt: 'Partner 2' },
    { src: 'https://traxsmart.in/media/clients/5.png', alt: 'Partner 5' },
    { src: 'https://traxsmart.in/media/clients/3.png', alt: 'Partner 3' },
    { src: 'https://traxsmart.in/media/clients/8.png', alt: 'Partner 8' },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* <h2 className="text-center fw-bold mb-4">Our Empanelments</h2> */}
         {/* <div className="text-center mb-50px">
            <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">Our Empanelments</span>
          </div> */}
        <div className="col swiper text-center feather-shadow">
          <ImageSlider/>
          {/* <ImageSlider
            images={sliderImages}
            slidesPerView={4}
            width={100}
            height={100}
            gap={30}
            showNavigation={false}
            showPagination={false}
            delay={0}
            mode = {'continous'}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 2.5 },   // Mobile
              768: { slidesPerView: 3.5 }, // Tablet
              1200: { slidesPerView: 5.5 } // Desktop
            }}
            imageStyle="rounded-circle border shadow-sm bg-white p-2"
          /> */}
        </div>
      </div>
    </section>
  );
}

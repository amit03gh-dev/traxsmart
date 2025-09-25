'use client';

// import SliderComp from '../Slider';
// import VerticalSlider from '../VerticalSlider';
import HeroSlider from './HeroSlider';

// type SlideData = {
//   src: string;
//   title?: string;
//   subTitle?: string;
//   buttonText?: string;
//   layout?: 'left' | 'center' | 'custom' | 'right';
//   textColor?: string;
//   customClass?: string;
// };

export default function HomeComp() {
  // const sliderImages: SlideData[] = [
  //   {
  //     src: 'https://traxsmart.in/media/bg-blue.png',
  //     title: 'Software Development',
  //     buttonText: 'Discover more',
  //     layout: 'left',
  //     textColor: 'text-white',
  //   },
  //   { src: 'https://traxsmart.in/media/banner/saas.jpg' },
  //   {
  //     src: 'https://traxsmart.in/media/bg-blue.png',
  //     title: 'm2m eSim Services',
  //     subTitle: 'IoT Connectivity',
  //     buttonText: 'Discover more',
  //     layout: 'left',
  //     textColor: 'text-white',
  //   },
  //   { src: 'https://traxsmart.in/media/banner/esim.jpg' },
  //   {
  //     src: 'https://traxsmart.in/media/bg-blue.png',
  //     title: 'Track Anything, Anytime',
  //     buttonText: 'Discover more',
  //     layout: 'left',
  //     textColor: 'text-white',
  //   },
  //   { src: 'https://traxsmart.in/media/banner/gps.jpg' },
  // ];

  return (
    <HeroSlider/>
    // <div id="home">
    //   {/* Desktop / Tablet: Horizontal Slider */}
    //   <div className="d-none d-lg-block">
    //     <SliderComp
    //       images={sliderImages}
    //       slidesPerView={2}
    //       width={800}
    //       height={700}
    //       gap={0}
    //       showNavigation={false}
    //       showPagination={false}
    //       slidesPerGroup={2}
    //       breakpoints={{
    //         0: { slidesPerView: 1 }, // Mobile
    //         768: { slidesPerView: 2 }, // Tablet & Desktop
    //       }}
    //     />
    //   </div>

    //   {/* Mobile: Vertical Slider */}
    //   <div className="d-block d-lg-none">
    //     <VerticalSlider
    //       images={sliderImages}
    //       height={300} // each slide height
    //       autoplay={true}
    //       showPagination={false}
    //     />
    //   </div>
    // </div>
  );
}

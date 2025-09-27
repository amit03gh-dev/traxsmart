// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import HeroSlider from './HeroSlider';
// import styles from './home.module.css';

// export default function HomeComp() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const homeRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const homeElement = homeRef.current;
//     if (!homeElement) return;

//     const updatePosition = (e: MouseEvent) => {
//       const rect = homeElement.getBoundingClientRect();
//       setPosition({
//         x: e.clientX - rect.left, // relative X
//         y: e.clientY - rect.top,  // relative Y
//       });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => {
//       setIsHovering(false);
//       setPosition({ x: -100, y: -100 }); // hide cursor outside
//     };

//     homeElement.addEventListener('mousemove', updatePosition);
//     homeElement.addEventListener('mouseenter', handleMouseEnter);
//     homeElement.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       homeElement.removeEventListener('mousemove', updatePosition);
//       homeElement.removeEventListener('mouseenter', handleMouseEnter);
//       homeElement.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div id="home" ref={homeRef} className={styles.cursorArea}>
//       {/* Custom Cursor */}
//       <div
//         className={`${styles.customCursor} ${isHovering ? styles.customCursorHover : ''}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           opacity: isHovering ? 1 : 0, // fades out outside
//         }}
//       >
//         {isHovering && (
//           <span className={`${styles.cursorText} ${styles.cursorTextVisible}`}>
//             {" < DRAG >"}
//           </span>
//         )}
//       </div>

//       <HeroSlider />
//     </div>
//   );
// }






'use client';

import MagicCursor from '../common/MagicCursor';
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
    <>
    <MagicCursor/>
    <HeroSlider/>
    </>
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

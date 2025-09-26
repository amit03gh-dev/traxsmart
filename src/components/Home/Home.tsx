// 'use client';

// import { useEffect, useState } from 'react';
// import HeroSlider from './HeroSlider';
// import styles from './home.module.css';

// export default function HomeComp() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updatePosition = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     // Add event listeners to the entire component
//     const homeElement = document.getElementById('home');
//     if (homeElement) {
//       homeElement.addEventListener('mouseenter', handleMouseEnter);
//       homeElement.addEventListener('mouseleave', handleMouseLeave);
//     }

//     window.addEventListener('mousemove', updatePosition);

//     return () => {
//       window.removeEventListener('mousemove', updatePosition);
//       if (homeElement) {
//         homeElement.removeEventListener('mouseenter', handleMouseEnter);
//         homeElement.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <div id="home" className={styles.cursorArea}>
//       {/* Custom Cursor - Dual Circle Animation */}
//       <div className={`${styles.cursor} ${isHovering ? styles.cursorHover : ''}`}>
//         {/* Big circle */}
//         <div 
//           className={styles.cursorBallBig}
//           style={{
//             transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//           }}
//         >
//           <svg height="30" width="30">
//             <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
//           </svg>
//         </div>
        
//         {/* Small circle */}
//         <div 
//           className={styles.cursorBallSmall}
//           style={{
//             transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//           }}
//         >
//           <svg height="10" width="10">
//             <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
//           </svg>
//         </div>

//         {/* Drag text */}
//         {isHovering && (
//           <div 
//             className={`${styles.cursorText} ${styles.cursorTextVisible}`}
//             style={{
//               left: `${position.x}px`,
//               top: `${position.y}px`,
//             }}
//           >
//             DRAG
//           </div>
//         )}
//       </div>
      
//       <HeroSlider />
//     </div>
//   );
// }





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

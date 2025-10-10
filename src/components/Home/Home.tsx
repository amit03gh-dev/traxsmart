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

import { HeroContentItem } from '@/types/home';
import MagicCursor from '../common/MagicCursor';
// import SliderComp from '../Slider';
// import VerticalSlider from '../VerticalSlider';
import HeroSlider from './HeroSlider';

type HeroData = {
  componentName: string;
  content: HeroContentItem[]
};

interface Props {
  data: HeroData
}

export default function HomeComp({data}:Props ) {
  return (
    <>
    <MagicCursor/>
    <HeroSlider data={data.content}/>
    </>
  );
}

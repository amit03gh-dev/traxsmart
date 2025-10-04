// 'use client';

// import Image from 'next/image';

// const clientLogos = [
//   '/media/clients/1.png',
//   '/media/clients/2.png',
//   '/media/clients/3.png',
//   '/media/clients/4.png',
//   '/media/clients/5.png',
//   '/media/clients/6.png',
//   '/media/clients/7.png',
//   '/media/clients/8.png',
// ];

// export default function ImageSlider() {
//   // Duplicate logos for seamless loop
//   const logos = [...clientLogos, ...clientLogos];

//   return (
//     <section className="pt-0 overflow-hidden">
//       <div className="container">
//         <div className="text-center mb-50px">
//           <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
//             Our Empanelments
//           </span>
//         </div>

//         <div className="marquee-wrapper">
//           <div className="marquee">
//             {logos.map((logo, index) => (
//               <div className="marquee-item" key={index}>
//                 <Image src={logo} alt={`Client ${index + 1}`} width={120} height={120} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .marquee-wrapper {
//           overflow: hidden;
//           position: relative;
//         }
//         .marquee {
//           display: flex;
//           width: max-content;
//           justify-content: center;
//           animation: scroll 20s linear infinite;
//         }
//         .marquee-item {
//           margin-right: 30px;
//           flex: 0 0 auto;
//         }
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }








"use client";

import Image from "next/image";

const clientLogos = [
  "/media/clients/1.png",
  "/media/clients/2.png",
  "/media/clients/3.png",
  "/media/clients/4.png",
  "/media/clients/5.png",
  "/media/clients/6.png",
  "/media/clients/7.png",
  "/media/clients/8.png",
];

export default function ImageSlider() {
  // Duplicate logos for seamless loop
  const logos = [...clientLogos, ...clientLogos];

  return (
    <>        
        <div className="marquee-wrapper">
          <div className="marquee">
            {logos.map((logo, index) => (
              <div className="marquee-item" key={index}>
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={147.42}
                  height={147.42}
                />
              </div>
            ))}
          </div>
        </div>
      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          position: relative;
        }
        .marquee {
          display: flex;
          width: max-content;
          justify-content: center;
          align-items: center;
          // border: 1px solid red;
          animation: scroll 20s linear infinite;
        }
        .marquee-item {
          margin-right: 30px;
          //  border: 1px solid red;
          flex: 0 0 auto;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

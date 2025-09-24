"use client";

import useBootstrapHover from "@/hooks/useBootstrapHover";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  useBootstrapHover();
  return (
    <header>
      {/* start navigation */}
      <nav
        className="navbar navbar-expand-lg header-light bg-white header-reverse"
        data-header-hover="light"
      >
        <div className="container-fluid">
          {/* Logo */}
          <div className="col-auto">
            <Link className="navbar-brand" href="/">
              {/* <Image
                src="media/tx_logo.png"
                data-at2x="media/tx_logo.png"
                alt="logo1"
                className="default-logo"
                width={0}
                height={0}
              />
              <Image
                src="media/tx_logo.png"
                data-at2x="media/tx_logo.png"
                alt="logo2"
                className="alt-logo"
                width={0}
                height={0}
              />
              <Image
                src="media/tx_logo.png"
                data-at2x="media/tx_logo.png"
                alt="logo3"
                className="mobile-logo"
                width={0}
                height={0}
              /> */}

              <Image
                src="/media/tx_logo.png"
                alt="Logo"
                width={130}
                height={70}
                className="default-logo"
              />
              <Image
                src="/media/tx_logo.png"
                alt="Logo"
                width={140}
                height={70}
                className="alt-logo"
              />
              <Image
                src="/media/tx_logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="mobile-logo"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="col-auto menu-order left-nav">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#home" className="nav-link inner-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#ais140" className="nav-link inner-link">
                    AIS140
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#services" className="nav-link inner-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#industries" className="nav-link inner-link">
                    Industries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#contact" className="nav-link inner-link">
                    Contact
                  </Link>
                </li>

                {/* Partners Dropdown */}
                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a
                    className="nav-link dropdown-toggle fs-5 text-dark fw-semibold"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Partners
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <li>
                      <Link
                        href="https://vaspinfotech.com/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="line-icon-Security-Camera align-middle text-base-color"></i>
                        Vasp Infotech
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.ventel.in/"
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="line-icon-Cloud align-middle text-base-color"></i>
                        Ventel
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown dropdown-with-icon-style02">
                  <a
                    className="nav-link dropdown-toggle fs-5 text-dark fw-semibold"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul
                    className="dropdown-menu p-0"
                    aria-labelledby="navbarDropdownMenuLink1"
                  >
                    <li>
                      <Link href="/products/2g-gps" className="dropdown-item">
                        <i className="line-icon-Device-SyncwithCloud align-middle text-base-color"></i>
                        2G GPS Trackers
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/4g-gps" className="dropdown-item">
                        <i className="line-icon-Device-SyncwithCloud align-middle text-base-color"></i>
                        4G GPS Trackers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-auto ms-auto ps-lg-0 d-none d-sm-flex">
            <div className="d-none d-xl-flex me-25px xl-me-0">
              <div className="d-flex align-items-center widget-text fw-600">
                <a href="tel:18002129911">
                  <span className="d-inline-block align-middle me-10px bg-solitude-blue h-45px w-45px lh-44 text-center rounded-circle text-base-color">
                    <i className="feather icon-feather-phone-call"></i>
                  </span>
                  <span className="d-none d-xxl-inline-block align-middle">
                    1800 889 5802
                  </span>
                </a>
              </div>
            </div>
            <div className="header-icon">
              <div className="header-button">
                <a
                  href="https://forms.gle/9TW51UbmnRzjowat7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-1 btn-base-color btn-small btn-rounded btn-box-shadow left-icon btn-switch-text"
                >
                  <span>
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <span
                      className="btn-double-text"
                      data-text="Send a message"
                    >
                      Send
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* end navigation */}
    </header>
  );
}

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to handle smooth scrolling to sections
//   const scrollToSection = (sectionId:string) => {
//     setIsOpen(false); // Close mobile menu after click
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
//       <div className="container py-3">
//         {/* Logo */}
//         <Link href="/" className="navbar-brand me-4">
//           <Image
//             src="https://traxsmart.in/media/tx_logo.png"
//             alt="TraxSmart Logo"
//             width={200}
//             height={60}
//             priority
//             className="img-fluid"
//           />
//         </Link>

//         {/* Toggler for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu Items */}
//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
//             <li className="nav-item">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="nav-link fs-5 text-dark border-0 bg-transparent fw-semibold"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Home
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 onClick={() => scrollToSection('ais140')}
//                 className="nav-link fs-5 text-dark border-0 bg-transparent fw-semibold"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 AIS140
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 onClick={() => scrollToSection('services')}
//                 className="nav-link fs-5 text-dark border-0 bg-transparent fw-semibold"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Services
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 onClick={() => scrollToSection('industries')}
//                 className="nav-link fs-5 text-dark border-0 bg-transparent fw-semibold"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Industries
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="nav-link fs-5 text-dark border-0 bg-transparent fw-semibold"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Contact
//               </button>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle fs-5 text-dark fw-semibold"
//                 href="#"
//                 id="partnersDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Partners
//               </a>
//               <ul className="dropdown-menu p-0" aria-labelledby="partnersDropdown">
//                 <li>
//                   <Link href="https://vaspinfotech.com/" className="dropdown-item" target="_blank" rel="noopener noreferrer">
//                     <i className="fas fa-building me-2"></i>
//                     Vasp Infotech
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.ventel.in/" className="dropdown-item" target="_blank" rel="noopener noreferrer">
//                     <i className="fas fa-cloud me-2"></i>
//                     Ventel
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle fs-5 text-dark fw-semibold"
//                 href="#"
//                 id="productsDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 onMouseOver={(e) => e.currentTarget.classList.add('text-primary')}
//                 onMouseOut={(e) => e.currentTarget.classList.remove('text-primary')}
//               >
//                 Products
//               </a>
//               <ul className="dropdown-menu p-0" aria-labelledby="productsDropdown">
//                 <li>
//                   <Link href="/products/2g-gps" className="dropdown-item">
//                     <i className="fas fa-location-arrow me-2"></i>
//                     2G GPS Trackers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/products/4g-gps" className="dropdown-item">
//                     <i className="fas fa-satellite-dish me-2"></i>
//                     4G GPS Trackers
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//           {/* Right Button with Call Icon - Bootstrap Only */}
//           <div className="d-flex align-items-center">
//             {/* <div className="me-3">
//               <span className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle p-2">
//                 <i className="bi bi-telephone-inbound"></i>
//               </span>
//             </div> */}
//             <Link
//               href="/contact"
//               className="btn btn-primary fw-semibold d-flex align-items-center rounded-pill px-4"
//             >
//               <i className="fas fa-envelope me-2"></i>
//               <span>Send</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

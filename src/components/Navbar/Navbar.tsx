// "use client";

// import useBootstrapHover from "@/hooks/useBootstrapHover";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   useBootstrapHover();
//   return (
//     <header>
//       {/* start navigation */}
//       <nav
//         className="navbar navbar-expand-lg header-light bg-white header-reverse"
//         data-header-hover="light"
//       >
//         <div className="container-fluid">
//           {/* Logo */}
//           <div className="col-auto">
//             <Link className="navbar-brand" href="/">
//               <Image
//                 src="/media/tx_logo.png"
//                 alt="logo"
//                 width={227}
//                 height={36}
//                 className="default-logo"
//               />
//               <Image
//                 src="/media/tx_logo.png"
//                 alt="logo"
//                 width={227}
//                 height={36}
//                 className="alt-logo"
//               />
//               <Image
//                 src="/media/tx_logo.png"
//                 alt="logo"
//                 width={227}
//                 height={36}
//                 className="mobile-logo"
//               />
//             </Link>
//           </div>

//           {/* Nav links */}
//           <div className="col-auto menu-order left-nav">
//             <button
//               className="navbar-toggler float-start"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-line"></span>
//               <span className="navbar-toggler-line"></span>
//               <span className="navbar-toggler-line"></span>
//               <span className="navbar-toggler-line"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse justify-content-center"
//               id="navbarNav"
//             >
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link href="/#home" className="nav-link inner-link">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/#ais140" className="nav-link inner-link">
//                     AIS140
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/#services" className="nav-link inner-link">
//                     Services
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/#industries" className="nav-link inner-link">
//                     Industries
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href="/#contact" className="nav-link inner-link">
//                     Contact
//                   </Link>
//                 </li>

//                 {/* Partners Dropdown */}
//                 <li className="nav-item dropdown dropdown-with-icon-style02">
//                   <a href="#" className="nav-link">
//                     Partners
//                   </a>
//                   <i
//                     className="fa-solid fa-angle-down dropdown-toggle"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   ></i>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink1"
//                   >
//                     <li>
//                       <a
//                         target="_blank"
//                         href="https://www.vaspinfotech.com/"
//                         rel="noopener noreferrer"
//                       >
//                         <i className="line-icon-Security-Camera align-middle text-base-color"></i>
//                         Vasp Infotech
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         target="_blank"
//                         href="https://www.ventel.in/"
//                         rel="noopener noreferrer"
//                       >
//                         <i className="line-icon-Cloud align-middle text-base-color"></i>
//                         Ventel
//                       </a>
//                     </li>
//                   </ul>
//                 </li>

//                 {/* Products Dropdown */}
//                 <li className="nav-item dropdown dropdown-with-icon-style02">
//                   <a href="#" className="nav-link">
//                     Products
//                   </a>
//                   <i
//                     className="fa-solid fa-angle-down dropdown-toggle"
//                     id="navbarDropdownMenuLink"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   ></i>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="navbarDropdownMenuLink1"
//                   >
//                     <li>
//                       <a href="/products/2g-gps" className="dropdown-item" target="_blank" rel="noopener noreferrer">
//                         <i className="line-icon-Device-SyncwithCloud align-middle text-base-color"></i>
//                         2G GPS Trackers
//                       </a>
//                     </li>
//                     <li>
//                       <a href="/products/4g-gps" className="dropdown-item" target="_blank" rel="noopener noreferrer">
//                         <i className="line-icon-Device-SyncwithCloud align-middle text-base-color"></i>
//                         4G GPS Trackers
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="col-auto ms-auto ps-lg-0 d-none d-sm-flex">
//             <div className="d-none d-xl-flex me-25px xl-me-0">
//               <div className="d-flex align-items-center widget-text fw-600">
//                 <a href="tel:18002129911">
//                   <span className="d-inline-block align-middle me-10px bg-solitude-blue h-45px w-45px lh-44 text-center rounded-circle text-base-color">
//                     <i className="feather icon-feather-phone-call"></i>
//                   </span>
//                   <span className="d-none d-xxl-inline-block align-middle">
//                     1800 889 5802
//                   </span>
//                 </a>
//               </div>
//             </div>
//             <div className="header-icon">
//               <div className="header-button">
//                 <a
//                   href="https://forms.gle/9TW51UbmnRzjowat7"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn border-1 btn-base-color btn-small btn-rounded btn-box-shadow left-icon btn-switch-text"
//                 >
//                   <span>
//                     <span>
//                       <i className="fa-regular fa-envelope"></i>
//                     </span>
//                     <span
//                       className="btn-double-text"
//                       data-text="Send a message"
//                     >
//                       Send a message
//                     </span>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {/* end navigation */}
//     </header>
//   );
// }




"use client";

import useBootstrapHover from "@/hooks/useBootstrapHover";
import Image from "next/image";
import Link from "next/link";
import { NavbarData } from "@/types/navbar";

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  useBootstrapHover();
  const { logo, menu_items, phone_number, cta_button } = data;

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
              <Image
                src={logo?.data?.attributes?.url || "/media/tx_logo.png"}
                alt="logo"
                width={227}
                height={36}
                className="default-logo"
              />
              <Image
                src={logo?.data?.attributes?.url || "/media/tx_logo.png"}
                alt="logo"
                width={227}
                height={36}
                className="alt-logo"
              />
              <Image
                src={logo?.data?.attributes?.url || "/media/tx_logo.png"}
                alt="logo"
                width={227}
                height={36}
                className="mobile-logo"
              />
            </Link>
          </div>

          {/* Nav links */}
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
                {menu_items.map((item) => (
                  <li
                    key={item.id}
                    className={`nav-item ${
                      item.hasDropdown ? "dropdown dropdown-with-icon-style02" : ""
                    }`}
                  >
                    <Link href={item.url || "#"} className="nav-link">
                      {item.label}
                    </Link>

                    {item.hasDropdown && (
                      <>
                        <i
                          className="fa-solid fa-angle-down dropdown-toggle"
                          id={`navbarDropdownMenuLink${item.id}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></i>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`navbarDropdownMenuLink${item.id}`}
                        >
                          {item.dropdown_items?.map((sub) => (
                            <li key={sub.id}>
                              <a
                                href={sub.url}
                                target={sub.isExternal ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className={sub.icon ? "" : ""}
                              >
                                {sub.icon && (
                                  <i
                                    className={`${sub.icon} align-middle text-base-color`}
                                  ></i>
                                )}
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="col-auto ms-auto ps-lg-0 d-none d-sm-flex">
            <div className="d-none d-xl-flex me-25px xl-me-0">
              <div className="d-flex align-items-center widget-text fw-600">
                <a href={`tel:${phone_number}`}>
                  <span className="d-inline-block align-middle me-10px bg-solitude-blue h-45px w-45px lh-44 text-center rounded-circle text-base-color">
                    <i className="feather icon-feather-phone-call"></i>
                  </span>
                  <span className="d-none d-xxl-inline-block align-middle">
                    {phone_number}
                  </span>
                </a>
              </div>
            </div>
            {cta_button && (
              <div className="header-icon">
                <div className="header-button">
                  <a
                    href={cta_button.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn border-1 btn-base-color btn-small btn-rounded btn-box-shadow left-icon btn-switch-text"
                  >
                    <span>
                      {cta_button.icon && <i className={cta_button.icon}></i>}
                      <span
                        className="btn-double-text"
                        data-text={cta_button.text}
                      >
                        {cta_button.text}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* end navigation */}
    </header>
  );
}

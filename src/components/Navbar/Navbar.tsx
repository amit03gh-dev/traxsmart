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
  console.log("logo is>>>>>>>>>",logo)

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
                priority
                fetchPriority="high"
              />
              <Image
                src={logo?.data?.attributes?.url || "/media/tx_logo.png"}
                alt="logo"
                width={227}
                height={36}
                className="alt-logo"
                priority
                fetchPriority="high"
              />
              <Image
                src={logo?.data?.attributes?.url || "/media/tx_logo.png"}
                alt="logo"
                width={227}
                height={36}
                className="mobile-logo"
                priority
                fetchPriority="high"
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

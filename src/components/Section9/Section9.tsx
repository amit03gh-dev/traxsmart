"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section9 = () => {
  return (
    <section
      className="bg-base-color py-0 ps-6 pe-6 xl-ps-3 xl-pe-3 md-ps-0 md-pe-0 position-relative overflow-hidden text-white"
      style={{ backgroundColor: "#000a16" }}
    >
      <div className="container-fluid">
        <div className="row justify-content-end g-0 flex-row-reverse">
          <div className="col-xl-5 col-lg-6 pt-7 pb-7 md-pb-5 sm-pt-50px sm-pb-50px tab-style-09 d-flex justify-content-between flex-column border-start md-border-start-0 border-color-transparent-white-very-light">
            <div className="ps-12 md-ps-4 sm-ps-0 pb-10 md-pb-5 position-relative z-index-9 text-center text-md-start">
              <h2 className="w-85 lg-w-100 fw-700 ls-minus-2px">
                Explore our product line
              </h2>
              {/* start tab navigation */}
              <ul className="nav nav-tabs border-0 flex-column align-items-start justify-content-start fs-45 lg-fs-30 mt-9 md-mt-5">
                <li className="nav-item p-0 mb-20px lg-mb-10px">
                  <a
                    data-bs-toggle="tab"
                    href="#tab_f1"
                    className="nav-link active"
                  >
                    Basic Trackers
                  </a>
                </li>
                <li className="nav-item p-0 mb-20px lg-mb-10px">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_f2">
                    Personal Trackers
                  </a>
                </li>
                <li className="nav-item p-0 mb-20px lg-mb-10px">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_f3">
                    OBD Trackers
                  </a>
                </li>
                <li className="nav-item p-0 mb-20px lg-mb-10px">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_f4">
                    AIS140 Trackers
                  </a>
                </li>
                <li className="nav-item p-0">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_f5">
                    Solutions
                  </a>
                </li>
              </ul>
              {/* end tab navigation */}
            </div>
            <div className="border-top border-color-transparent-white-very-light ps-12 md-ps-4 sm-ps-0 text-center text-md-start">
              <span className="fs-20 d-block fw-500 mb-10px text-white pt-10 md-pt-5 sm-pt-30px">
                Helping your business
              </span>
              <p className="text-white opacity-6 w-70 xxl-w-100 mb-0">
                We developed a rich set of features to let you authorise
                drivers, prevent fuel thefts, and recover stolen vehicles.
                Effectively minimise the chances of your vehicle and cargo loss
                with our GPS trackers.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 pe-7 pt-7 pb-7 md-pt-0 md-ps-4 md-pe-4 sm-ps-0 sm-pe-0 sm-pb-50px">
            <div className="tab-content">
              {/* start tab content */}
              <div
                className="tab-pane interactive-banner-style-01 fade in active show"
                id="tab_f1"
              >
                <figure className="m-0 position-relative hover-box border-radius-15px overflow-hidden">
                  {/* <img
                      className="w-100"
                      src="/Screenshot.png"
                      alt=""
                    /> */}
                  <Image
                    className="w-100"
                    src="/Screenshot.png"
                    alt="Screenshot"
                    width={800} // adjust based on your image size
                    height={600} // adjust based on your image size
                    priority // optional: loads immediately (good for above-the-fold images)
                  />
                  <div className="position-absolute top-0px left-0px w-100 h-100 bg-gradient-dark-transparent opacity-2"></div>
                  <figcaption className="w-100 h-100 d-flex flex-column align-items-center p-40px">
                    <div className="position-relative d-flex flex-column h-100 z-index-1">
                      <Link
                        href="/productListing?id=1"
                        className="d-flex justify-content-center align-items-center mx-auto mt-auto icon-box w-90px h-90px rounded-circle bg-white box-shadow-quadruple-large"
                      >
                        <i className="bi bi-arrow-right-short text-dark-gray icon-medium lh-0px"></i>
                      </Link>
                      <a href="" className="text-white d-block mt-auto">
                        Discover case study
                      </a>
                    </div>
                    <div className="box-overlay bg-gradient-black-bottom-transparent"></div>
                  </figcaption>
                </figure>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div
                className="tab-pane interactive-banner-style-01 fade in"
                id="tab_f2"
              >
                <figure className="m-0 position-relative hover-box border-radius-15px overflow-hidden">
                  <Image 
                  className="w-100"
                  src="/media/tsindia140/2.jpg"
                  alt="Teltonika GH5200"
                  width={800}
                  height={800}
                  />
                  {/* <img
                    className="w-100"
                    src="https://beamonboard.com/wp-content/uploads/teltonika-gh5200-iphone.jpg"
                    alt=""
                  /> */}
                  <div className="position-absolute top-0px left-0px w-100 h-100 bg-gradient-dark-transparent opacity-2"></div>
                  <figcaption className="w-100 h-100 d-flex flex-column align-items-center p-40px">
                    <div className="position-relative d-flex flex-column h-100 z-index-1">
                      <Link
                        href="/productListing?id=2"
                        className="d-flex justify-content-center align-items-center mx-auto mt-auto icon-box w-90px h-90px rounded-circle bg-white box-shadow-quadruple-large"
                      >
                        <i className="bi bi-arrow-right-short text-dark-gray icon-medium lh-0px"></i>
                      </Link>
                      <a href="" className="text-white d-block mt-auto">
                        Discover case study
                      </a>
                    </div>
                    <div className="box-overlay bg-gradient-black-bottom-transparent"></div>
                  </figcaption>
                </figure>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div
                className="tab-pane interactive-banner-style-01 fade in"
                id="tab_f3"
              >
                <figure className="m-0 position-relative hover-box border-radius-15px overflow-hidden">
                  <Image 
                  className="w-100"
                  src="https://manuals.plus/wp-content/uploads/2023/04/000-Copy-14.jpg"
                  alt="Teltonika GH5200"
                  width={800}
                  height={800}
                  />
                  {/* <img
                    className="w-100"
                    src="https://manuals.plus/wp-content/uploads/2023/04/000-Copy-14.jpg"
                    alt=""
                  /> */}
                  <div className="position-absolute top-0px left-0px w-100 h-100 bg-gradient-dark-transparent opacity-2"></div>
                  <figcaption className="w-100 h-100 d-flex flex-column align-items-center p-40px">
                    <div className="position-relative d-flex flex-column h-100 z-index-1">
                      <Link
                        href="/productListing?id=3"
                        className="d-flex justify-content-center align-items-center mx-auto mt-auto icon-box w-90px h-90px rounded-circle bg-white box-shadow-quadruple-large"
                      >
                        <i className="bi bi-arrow-right-short text-dark-gray icon-medium lh-0px"></i>
                      </Link>
                      <a href="" className="text-white d-block mt-auto">
                        Discover case study
                      </a>
                    </div>
                    <div className="box-overlay bg-gradient-black-bottom-transparent"></div>
                  </figcaption>
                </figure>
              </div>
              {/* end tab content */}
              {/* start tab content */}
              <div
                className="tab-pane interactive-banner-style-01 fade in"
                id="tab_f4"
              >
                <figure className="m-0 position-relative hover-box border-radius-15px overflow-hidden">
                  <Image 
                  className="w-100"
                  src="https://traxsmart.in/media/tsindia140/2.jpg"
                  alt="Teltonika GH5200"
                  width={800}
                  height={800}
                  />
                  {/* <img
                    className="w-100"
                    src="https://traxsmart.in/media/tsindia140/2.jpg"
                    alt=""
                  /> */}
                  <div className="position-absolute top-0px left-0px w-100 h-100 bg-gradient-dark-transparent opacity-2"></div>
                  <figcaption className="w-100 h-100 d-flex flex-column align-items-center p-40px">
                    <div className="position-relative d-flex flex-column h-100 z-index-1">
                      <Link
                        href="/productListing?id=4"
                        className="d-flex justify-content-center align-items-center mx-auto mt-auto icon-box w-90px h-90px rounded-circle bg-white box-shadow-quadruple-large"
                      >
                        <i className="bi bi-arrow-right-short text-dark-gray icon-medium lh-0px"></i>
                      </Link>
                      <a href="" className="text-white d-block mt-auto">
                        Discover case study
                      </a>
                    </div>
                    <div className="box-overlay bg-gradient-black-bottom-transparent"></div>
                  </figcaption>
                </figure>
              </div>

              <div
                className="tab-pane interactive-banner-style-01 fade in"
                id="tab_f5"
              >
                <figure className="m-0 position-relative hover-box border-radius-15px overflow-hidden">
                  {/* <img className="w-100" src="media/banner/ems.jpg" alt="" /> */}
                  <Image
                  className="w-100"
                  src="/media/banner/gps.jpg"
                  alt="Teltonika GH5200"
                  width={800}
                  height={800}
                  />
                  <div className="position-absolute top-0px left-0px w-100 h-100 bg-gradient-dark-transparent opacity-2"></div>
                  <figcaption className="w-100 h-100 d-flex flex-column align-items-center p-40px">
                    <div className="position-relative d-flex flex-column h-100 z-index-1">
                      <Link
                        href="/productListing?id=5"
                        className="d-flex justify-content-center align-items-center mx-auto mt-auto icon-box w-90px h-90px rounded-circle bg-white box-shadow-quadruple-large"
                      >
                        <i className="bi bi-arrow-right-short text-dark-gray icon-medium lh-0px"></i>
                      </Link>
                      <a href="" className="text-white d-block mt-auto">
                        Discover case study
                      </a>
                    </div>
                    <div className="box-overlay bg-gradient-black-bottom-transparent"></div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;

"use client";

// import { useState } from "react";

// type Product = {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
//   images: string[];
//   features: string[];
//   technical: Record<string, string | number>;
// };

// type Props = {
//   product: Product;
// };

export default function ProductDetails() {

  return (
    <div className="col-12 col-lg-5 product-info">
      <span className="fw-500 text-dark-gray d-block">GPS Trackers</span>
      <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
        TSINDIA 140 (2G)
      </h3>
      <p className="w-100 xl-w-100 mx-auto text-dark-gray">
        The TSindia140 GPS Device is a rugged, AIS140 & BIS16833-certified
        tracker designed for all vehicle types. With IP65 protection, a 1000mAh
        backup battery, fast 30-second GPS cold start, and support for SOS panic
        button, driver behavior monitoring, and fuel/temperature/load sensors,
        it offers reliable performance and complete fleet control in any
        environment.
      </p>

      <div className="mb-20px h-1px w-100 bg-extra-medium-gray d-block"></div>
      <div className="row mb-15px">
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-shield top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  AIS140 & BIS16833 Certified
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-droplet top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  IP65 Certified
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-alert-triangle top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  SOS Panic Button Support{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-truck top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  Driver Behavior Monitoring
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-zap top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  Multi sensor support
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-map-pin top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  Fast 30-Second Cold Start{" "}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-battery top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  1000mAh Inbuilt Battery{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-archive top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  9-90V Support{" "}
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 icon-with-text-style-08 mb-10px">
          <div className="feature-box feature-box-left-icon d-inline-flex align-middle">
            <div className="feature-box-icon me-10px">
              <i className="feather icon-feather-power top-6px position-relative align-middle text-primary"></i>
            </div>
            <div className="feature-box-content">
              <span>
                <span className="alt-font text-dark-gray fw-500">
                  Remote Immobilization Support{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

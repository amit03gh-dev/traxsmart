"use client";
import Image from "next/image";

export default function ProductTabs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 tab-style-04">
          <ul className="nav nav-tabs border-0 justify-content-center alt-font fs-19">
            <li className="nav-item">
              <a
                data-bs-toggle="tab"
                href="#tab_five1"
                className="nav-link active"
              >
                Description<span className="tab-border bg-dark-gray"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab_five2">
                Features<span className="tab-border bg-dark-gray"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab_five3">
                Technical Specifications
                <span className="tab-border bg-dark-gray"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab_five4">
                Packaging and Shipping
                <span className="tab-border bg-dark-gray"></span>
              </a>
            </li>
          </ul>
          <div className="mb-5 h-1px w-100 bg-extra-medium-gray sm-mt-10px xs-mb-8"></div>
          <div className="tab-content">
            <div className="tab-pane fade in active show" id="tab_five1">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 md-mb-40px">
                  <div className="d-flex align-items-center mb-5px">
                    <div className="col alt-font fw-500 text-base-color">
                      Unrivaled Reliability, Ultimate Control. Track Smarter,
                      Drive Safer.
                    </div>
                  </div>
                  <h4 className="alt-font text-dark-gray fw-500 mb-20px w-90 lg-w-100">
                    The TSindia140: Advanced Tech for Modern Fleets.
                  </h4>
                  <p className="w-90">
                    Certified for AIS140 and BIS16833, the TSindia140 is a
                    next-generation GPS tracker engineered for total fleet
                    control, regulatory compliance, and real-time visibility.
                    Designed for vehicles of all kinds — from commercial fleets
                    to heavy-duty machines — it delivers advanced features,
                    remote management, and data-driven insights to maximize
                    operational efficiency.
                  </p>
                  <div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          AIS140 & BIS IS16833 Certified
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Remote Immobilization & Real-Time Alerts
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Advanced Sensor Integration
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Fast & Accurate GPS Tracking
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Built Rugged with IP65 Protection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 position-relative z-index-1 md-mb-40px">
                  <div className="atropos atropos-rotate-touch" data-atropos="">
                    <div
                      className="atropos-scale appear anime-complete"
                      data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
                      style={{
                        translate: "0px",
                        transform: "translate3d(0px, 0px, 0px)",
                        transitionDuration: "300ms",
                      }}
                    >
                      <div
                        className="atropos-rotate"
                        style={{
                          transitionDuration: "300ms",
                          transform:
                            "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)",
                        }}
                      >
                        <div className="atropos-inner">
                          <div
                            data-atropos-offset="3"
                            style={{
                              transitionDuration: "300ms",
                              transform: "translate3d(0px, 0px, 0px)",
                            }}
                          >
                            
                            <Image
                              src="/media/tsindia140/fleet.jpg"
                              alt=""
                              className="border-radius-6px w-100"
                              width={800}
                              height={600}
                              priority={true}
                            />
                          </div>
                          <span
                            className="atropos-highlight"
                            style={{
                              transform: "translate3d(0px, 0px, 0px)",
                              transitionDuration: "300ms",
                              opacity: "0",
                            }}
                          ></span>
                        </div>
                        <span
                          className="atropos-shadow"
                          style={{
                            transform: "translate3d(0px, 0px, -50px) scale(1)",
                            transitionDuration: "300ms",
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute-middle-center md-absolute-middle-center right-minus-45px md-right-auto d-inline-block text-center z-index-9">
                    <a
                      href="https://www.youtube.com/watch?v=knWmuAiJur4"
                      className="bg-white box-shadow-extra-large rounded-circle video-icon-box video-icon-extra-large popup-youtube d-inline-block appear anime-complete"
                      data-anime='{ "translate": [0, 0], "scale": [0,1], "duration": 1000, "delay": 300, "staggervalue": 300, "easing": "easeOutBack" }'
                      style={{ translate: "0px" }}
                    >
                      <span>
                        <span className="video-icon bg-white">
                          <i className="fa-solid fa-play text-base-color"></i>
                          <span className="video-icon-sonar">
                            <span className="video-icon-sonar-bfr bg-base-color opacity-9"></span>
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade in" id="tab_five2">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Certification:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      AIS140 & BIS IS16833 Approved
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Protocol Support:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Government-mandated VLT and emergency button protocols
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Supported Alerts:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      SOS button press, Over speeding, Harsh braking, Harsh
                      acceleration, Ignition ON/OFF, Tow detection, Power cut,
                      GPS signal lost, Emergency alert, Geofence entry/exit,
                      Device health check
                    </div>
                  </div>

                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      SOS Button:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Included for emergency response (AIS140 requirement)
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Remote Immobilization:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Vehicle ignition cut-off supported for theft or misuse
                      control
                    </div>
                  </div>

                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      GPS Tracking:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Live location updates, 30s cold start, geo-fencing enabled
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Power Backup:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      1000mAh internal battery for power-loss protection
                    </div>
                  </div>

                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Sensor Support:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Fuel, door, AC, temperature, load sensors supported via
                      I/Os
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      OTA Updates:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Over-the-air configuration and firmware upgrade support
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade in" id="tab_five3">
              <div className="row m-0">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Power Supply:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      9–36 V DC
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Cellular:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Quad Band 900/1800/850/1900
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      GPRS Data:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      GPRS class 12: max. 85.6 kbps (downlink/uplink)
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      GNSS Sensitivity:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Acquisition: -147 dBm, Tracking: -163 dBm, Reacquisition:
                      -156 dBm
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      GNSS Acquisition:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      TTFF @ -130dBm, Cold Start: 32s, Warm Start: 25s, Hot
                      Start: 2s
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      GNSS Receiving Bands:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      GPS L1/Galileo E1 C/A: 1575.42 MHz,
                      <br />
                      IRNSS L5 C/A: 1176.45 MHz,
                      <br />
                      GLONASS L1 C/A: 1602.5625 MHz,
                      <br />
                      BD2 B1 C/A: 1561.098 MHz
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Horizontal Position Accuracy:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      &lt; 1.8 m CEP
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Communication:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      TCP/IP, HTTP (For CDAC), FTP, SMS
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Accelerometer:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      6 Axis Motion Sensing
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Internal Battery:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      3.7 V Li-Poly, 600mAh
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Antenna:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      High Gain Onboard Antennas for GSM & GNSS
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      LEDs:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Three LEDs for Power, GPS and GSM status indication
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Device Working Mode:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Active mode & Sleep mode
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Memory:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Storage for 40000+ packets
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Housing:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Dust & Water Proof (IP65)
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      SIM Type:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Dual profile eSIM/ Plastic Sim
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Operating Temperature:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      -20°C to 85°C
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Storage Temperature:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      -40°C to 85°C
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Protections:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Reverse Polarity, Overvoltage, Short Circuit, Surge, Load
                      Dump
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Certification:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      AIS140 Compliant (ARAI), ROHS Compliant
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Current Consumption:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Active Mode: 50–90 mA, Sleep Mode: &lt;20 mA
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Software Features:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      FOTA, Odometer, Turn Detection, GPS Drift Control, Driving
                      Behavior
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Connector:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      14 Pins (4 Pin + 6 Pin + 4 Pin)
                    </div>
                  </div>
                  <div className="row bg-very-light-gray">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Connectivity:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      Ignition, Panic Button, 2 Digital Input,
                      <br />1 Digital Output, 2 Analog Input, 1 RS232
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
                      Wire Harness:
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
                      4 Sqmm (7–36) SWG High Quality Flexible Wire,
                      <br />
                      Current Rating: 1.5 Amps Max,
                      <br />
                      Length: 1 mtr
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade in" id="tab_five4">
              <div className="row">
                <div className="col-12 col-md-4 last-paragraph-no-margin sm-mb-30px">
                  <div className="alt-font fs-22 text-dark-gray mb-15px fw-500 mb-20px">
                    Packaging information
                  </div>
                  <div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          TSindia140 GPS Device
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Wiring Harness
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          External GNSS & GSM Antennas (if applicable)
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          SOS Button (AIS140 variant)
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Installation Guide
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 last-paragraph-no-margin sm-mb-30px">
                  <div className="alt-font fs-22 text-dark-gray mb-15px fw-500 mb-20px">
                    Shipping Information
                  </div>
                  <div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Free shipping on orders over ₹10,000
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Standard delivery: 3–7 business days
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Express delivery available at checkout
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          International shipping via DHL/FedEx
                        </span>
                      </div>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle mb-10px">
                      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
                        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
                      </div>
                      <div className="feature-box-content">
                        <span className="d-block text-dark-gray fw-500">
                          Secure, pre-tested and sealed packaging
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4 last-paragraph-no-margin">
                  <div className="alt-font fs-22 text-dark-gray mb-15px fw-500">
                    Bulk Orders
                  </div>
                  <p className="w-80 md-w-100">
                    We support large-scale deployment for fleet operators,
                    system integrators, OEMs, and government projects. Special
                    pricing, custom branding, and integration support available
                    for orders of 50 units or more. Reach out to our sales team
                    for volume discounts and tailored logistics.
                  </p>
                </div>

                <div
                  className="row justify-content-center g-0 appear anime-complete"
                  data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                >
                  <div className="col-auto mt-60px pt-15px pb-15px ps-40px pe-40px md-ps-25px md-pe-25px bg-solitude-blue border-radius-100px">
                    <div className="feature-box feature-box-left-icon-middle">
                      <div className="feature-box-icon me-10px">
                        <Image
                          src="/images/demo-green-energy-home-icon-06.html" // make sure this is a valid image format (png/jpg/svg)
                          alt=""
                          width={50} // replace with the actual width
                          height={50} // replace with the actual height
                        />
                      </div>
                      <div className="feature-box-content text-dark-gray fs-18">
                        For custom labeling, pre-configuration, or white-label
                        requests, contact our enterprise sales desk.{" "}
                        <a
                          target="blank"
                          href="mailto:info@traxsmart.in"
                          className="text-dark-blue fw-600"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

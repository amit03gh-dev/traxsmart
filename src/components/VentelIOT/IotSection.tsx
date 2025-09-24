"use client";

import Image from "next/image";

export default function EsimSection() {
  return (
    <section style={{paddingBottom: "0px"}}>
      <div className="container-lg mb-6 md-mb-10px" style={{ maxWidth: "1140px" }}>
        {/* Row 1: Intro with text + image */}
        <div className="row justify-content-center mb-6 md-mb-10px">
          <div className="col-lg-7 col-12 md-mb-50px last-paragraph-no-margin">
            <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                Intelligent. Secure. Flexible.
              </span>
            </div>
            <h2 className="text-dark-gray fw-700 ls-minus-2px">
              Ventel - m2m IoT connectivity services
            </h2>
            <p className="w-85 lg-w-100 text-dark-gray">
              Ventel eSIM-enabled M2M connectivity solution revolutionizes IoT
              services for businesses by optimizing asset control and
              management. With remote management features and expedited
              services, our solution prioritizes M2M connectivity and
              security-by-design for safeguarding customer data.
            </p>
          </div>

          {/* Right image */}
          <div className="col-xl-4 col-lg-5 offset-xl-1 col-12">
            <div className="overflow-hidden animation-float">
              <Image
                src="/media/e-sim-blue.png"
                alt="Ventel IoT eSIM"
                width={360}
                height={360}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Features */}
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center sm-mb-50px">
          <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px">
            <div className="feature-box last-paragraph-no-margin">
              <div className="feature-box-icon">
                <Image
                  src="/media/esim/1.png"
                  alt="Space-Saving Design"
                  width={60}
                  height={60}
                  className="mb-3"
                />
              </div>

              <div className="feature-box-content">
                <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">
                  Space-Saving Design
                </span>
                <p className="w-80 xl-w-100 mx-auto">
                  Sleek and modern, offering more features in a compact form.
                  Enjoy a lighter, more streamlined experience without
                  compromising on performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px">
            <div className="feature-box last-paragraph-no-margin">
              <div className="feature-box-icon">
                <Image
                  src="/media/esim/2.png"
                  alt="Enhanced Security"
                  width={60}
                  height={60}
                  className="mb-3"
                />
              </div>

              <div className="feature-box-content">
                <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">
                  Enhanced Security
                </span>
                <p className="w-80 xl-w-100 mx-auto">
                  Your privacy matters! eSIMs offer state-of-the-art security
                  features, keeping your personal information safe from theft
                  and loss.
                </p>
              </div>
            </div>
          </div>

          <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px">
            <div className="feature-box last-paragraph-no-margin">
              <div className="feature-box-icon">
                <Image
                  src="/media/esim/3.png"
                  alt="Remote Provisioning"
                  width={60}
                  height={60}
                  className="mb-3"
                />
              </div>

              <div className="feature-box-content">
                <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">
                  Remote Provisioning
                </span>
                <p className="w-80 xl-w-100 mx-auto">
                  Say goodbye to fumbling with physical SIM cards! With eSIM,
                  effortlessly switch between carriers and plans at the touch of
                  a button.
                </p>
              </div>
            </div>
          </div>

          <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px">
            <div className="feature-box last-paragraph-no-margin">
              <div className="feature-box-icon">
                <Image
                src="/media/esim/4.png"
                alt="AIS140 Compliant"
                width={60}
                height={60}
                className="mb-3"
              />
              </div>

              <div className="feature-box-content">
                <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">
                  AIS140 Compliant
                </span>
                <p className="w-80 xl-w-100 mx-auto">
                 Our DoT Certified M2M eSIMs ensure compliance with AIS140
                standards, making them ideal for public transport and connected
                vehicle applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-theme">
        <div
          className="row align-items-center justify-content-center g-0"
          // data-anime='{  "opacity": [0,1], "duration": 600, "delay":0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          <div className="col-auto d-flex align-items-center">
            <Image src="/media/support.png" alt="support" width={50} height={50} className="w-15"/>
            <div className="fs-17 lh-26 last-paragraph-no-margin text-white pt-15px pb-15px fw-500">
              <p>
                Save your precious time and effort spent for finding a solution.
                <a
                  href="https://forms.gle/9TW51UbmnRzjowat7"
                  target="_blank"
                  className="text-decoration-line-bottom text-white"
                >
                  Let&apos;s connect
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import Image from "next/image";

// export default function IoTSection() {
//   return (
//     <section className="py-5">
//       {/* narrower container */}
//       <div className="container-lg" style={{ maxWidth: "1140px" }}>
//         {/* Row 1: Single column that contains description + image */}
//         <div className="row">
//           <div className="col-12">
//             <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
//               {/* Text block */}
//               <div className="flex-grow-1">
//                 <p className="text-primary fw-bold small mb-2">
//                   — INTELLIGENT. SECURE. FLEXIBLE.
//                 </p>
//                 <h2 className="fw-bold display-6 mb-3">
//                   Ventel - m2m IoT connectivity services
//                 </h2>
//                 <p className="text-muted mb-0">
//                   Ventel eSIM-enabled M2M connectivity solution revolutionizes IoT
//                   services for businesses by optimizing asset control and
//                   management. With remote management features and expedited
//                   services, our solution prioritizes M2M connectivity and
//                   security-by-design for safeguarding customer data.
//                 </p>
//               </div>

//               {/* Image block */}
//               <div className="flex-shrink-0">
//                 <Image
//                   src="https://traxsmart.in/media/e-sim-blue.png"
//                   alt="IoT eSIM"
//                   width={360}
//                   height={360}
//                   className="img-fluid"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Row 2: Features */}
//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
//               <div className="col">
//                 <div className="px-3">
//                   <div
//                     className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 mx-auto"
//                     style={{ width: 72, height: 72 }}
//                   >
//                     <i className="bi bi-arrows-fullscreen text-primary fs-3"></i>
//                   </div>
//                   <h6 className="fw-semibold">Space-Saving Design</h6>
//                   <p className="small text-muted">
//                     Sleek and modern, offering more features in a compact form.
//                   </p>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="px-3">
//                   <div
//                     className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 mx-auto"
//                     style={{ width: 72, height: 72 }}
//                   >
//                     <i className="bi bi-shield-check text-primary fs-3"></i>
//                   </div>
//                   <h6 className="fw-semibold">Enhanced Security</h6>
//                   <p className="small text-muted">
//                     State-of-the-art security features keep your data safe.
//                   </p>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="px-3">
//                   <div
//                     className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 mx-auto"
//                     style={{ width: 72, height: 72 }}
//                   >
//                     <i className="bi bi-cloud text-primary fs-3"></i>
//                   </div>
//                   <h6 className="fw-semibold">Remote Provisioning</h6>
//                   <p className="small text-muted">
//                     Switch carriers & plans remotely — no physical SIM hassle.
//                   </p>
//                 </div>
//               </div>

//               <div className="col">
//                 <div className="px-3">
//                   <div
//                     className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mb-3 mx-auto"
//                     style={{ width: 72, height: 72 }}
//                   >
//                     <i className="bi bi-award text-primary fs-3"></i>
//                   </div>
//                   <h6 className="fw-semibold">AIS140 Compliant</h6>
//                   <p className="small text-muted">
//                     DoT certified M2M eSIMs, suitable for connected vehicle apps.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

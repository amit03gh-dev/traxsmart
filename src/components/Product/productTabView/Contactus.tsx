// import Image from "next/image";
import React from "react";

const Contactus = () => {
  return (
    <div className="row justify-content-center g-0 appear anime-complete">
      <div className="col-auto mt-60px pt-15px pb-15px ps-40px pe-40px md-ps-25px md-pe-25px bg-solitude-blue border-radius-100px">
        <div className="feature-box feature-box-left-icon-middle">
          {/* <div className="feature-box-icon me-10px">
            <Image
              src="/images/demo-green-energy-home-icon-06.html"
              alt="Contact Icon"
              width={30}
              height={30}
            />
          </div> */}
          <div className="feature-box-content text-dark-gray fs-18">
            For custom labeling, pre-configuration, or white-label requests,
            contact our enterprise sales desk.{" "}
            <a
              target="_blank"
              href="mailto:info@traxsmart.in"
              className="text-dark-blue fw-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

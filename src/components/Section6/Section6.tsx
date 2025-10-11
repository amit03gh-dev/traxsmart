"use client";
import "swiper/css";
import "swiper/css/navigation";
import TX_CardSlider from "../common/Slider/TX_CardSlider";

type INDUSTRIES = {
  title: string;
  img: string;
  alt: string;
};

type props = {
  data: {
    componentName: string;
    content: {
      header: string;
      title: string;
      description: string;
      industriesList: INDUSTRIES[];
    };
  };
};

export default function Section6({ data }: props) {
  const { content } = data;
  return (
    <section
      id="industries"
      className="ps-7 pe-7 xl-ps-5 xl-pe-5 lg-ps-3 lg-pe-3 xs-ps-15px xs-pe-15px"
    >
      <div className="overflow-hidden bg-solitude-blue border-radius-20px lg-border-radius-0px pt-7 pb-5 lg-pt-5 lg-pb-5 lg-ps-3 lg-pe-3 sm-pt-50px sm-pb-50px">
        <div className="container">
          <div className="row align-items-center mb-5 sm-mb-9 text-center text-md-start">
            <div className="col-lg-5 col-md-6 md-mb-20px">
              <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
                {content.header}
              </span>
              <h2 className="text-dark-gray fw-700 mb-0 ls-minus-1px">
                {content.title}
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 last-paragraph-no-margin md-mb-20px">
              <p className="w-100 xl-w-100 mx-auto text-dark-gray">
                {content.description}
              </p>
            </div>

            <div className="col-lg-2 d-flex justify-content-center justify-content-xl-end gap-2">
              <button
                className="btn btn-light rounded-circle shadow nav-prev"
                style={{ width: 50, height: 50 }}
              >
                <i className="bi bi-arrow-left text-center m-0 fw-bold"></i>
              </button>
              <button
                className="btn btn-light rounded-circle shadow nav-next text-center"
                style={{ width: 50, height: 50 }}
              >
                <i className="bi bi-arrow-right m-0"></i>
              </button>
            </div>
          </div>

            <TX_CardSlider data={data.content.industriesList} />
          
        </div>
      </div>
    </section>
  );
}
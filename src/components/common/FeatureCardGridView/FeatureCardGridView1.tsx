import Image from "next/image";
import React from "react";

type EsimFeature = {
  img: string;
  title: string;
  desc: string;
};

interface Props {
  data: EsimFeature[];
}

const FeatureCardGridView1 = ({ data }: Props) => {
  return (
    <>
      {data.map((feature, i) => (
        <div
          key={i}
          className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px"
        >
          <div className="feature-box last-paragraph-no-margin">
            <div className="feature-box-icon">
              <Image
                src={feature.img}
                alt={feature.title}
                width={76.8}
                height={76.8}
                className="mb-3"
              />
            </div>
            <div className="feature-box-content">
              <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">
                {feature.title}
              </span>
              <p className="w-80 xl-w-100 mx-auto">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCardGridView1;

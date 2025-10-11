import Image from "next/image";
import React from "react";
import TX_ListItemViewOne from "../ListItemView/TX_ListItemViewOne";

interface SplitContentMediaRightTypes {
  title: string;
  description: string;
  media: string;
  videoUrl: string;
  listItems: {
    data: string[];
  };
}

interface Props {
  data: SplitContentMediaRightTypes;
}

const SplitContentMediaRight = ({ data }: Props) => {
  const listItems = data?.listItems?.data;

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 md-mb-40px">
        <div className="d-flex align-items-center mb-5px">
          <div className="col alt-font fw-500 text-base-color">
            Unrivaled Reliability, Ultimate Control. Track Smarter, Drive Safer.
          </div>
        </div>
        <h4 className="alt-font text-dark-gray fw-500 mb-20px w-90 lg-w-100">
          {data?.title}
        </h4>
        <p className="w-90">{data?.description}</p>
        <div>
          {listItems?.map((item, index) => (
            <TX_ListItemViewOne key={index} item={item} />
          ))}
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
                    // priority={true}
                    priority
                    fetchPriority="high"
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
            href={data?.videoUrl}
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
  );
};

export default SplitContentMediaRight;

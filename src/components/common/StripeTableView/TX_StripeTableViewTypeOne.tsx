import React from 'react';

export interface FeatureItem {
  key: string;
  value: string;
}

interface TXStripeProps {
  data: FeatureItem[];
}

const TX_StripeTableViewTypeOne: React.FC<TXStripeProps> = ({ data }) => {
  return (
    <div className="row">
      <div className="col-12">
        {data.map((item, index) => (
          <div
            key={index}
            className={`row ${index % 2 !== 0 ? "bg-very-light-gray" : ""}`}
          >
            <div className="col-lg-2 col-md-3 col-sm-4 pt-10px pb-10px xs-pb-0 text-dark-gray alt-font fw-500">
              {item?.key}
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 pt-10px pb-10px xs-pt-0">
              {item?.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TX_StripeTableViewTypeOne;

import React from "react";
interface ContactProps {
    phone: string;
    label?: string;
}

interface Props {
    data: ContactProps
}
const TX_ContactView1 = ({ data }: Props) => {
  const { label, phone } = data;
  return (
    <div className="feature-box feature-box-left-icon-middle mt-15px">
      <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
        <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
      </div>
      <div className="feature-box-content">
        <span className="d-block fs-14">
          {label ? label : "Have any question?"}
        </span>
        <a
          href={`tel:${phone}`}
          className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};

export default TX_ContactView1;

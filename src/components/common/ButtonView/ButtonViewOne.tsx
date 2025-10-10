import React from "react";

interface ButtonProps {
  icon?: string;
  text: string;
  href: string;
}

interface Props {
  data: ButtonProps
}

const ButtonViewOne = ({data} : Props) => {
  const {href, icon, text}= data
  return (
    <a
      href={href}
      target="_blank"
      className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
    >
      <span>
        <span>{icon && <i className={icon}></i>}</span>
        <span className="btn-double-text ls-minus-05px" data-text={text}>
          {text}
        </span>
      </span>
    </a>
  );
};

export default ButtonViewOne;

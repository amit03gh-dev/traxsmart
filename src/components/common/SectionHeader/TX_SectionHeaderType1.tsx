import React from "react";
import { motion} from "framer-motion";

interface SectionHeaderProps {
  header?: string; // made optional
  tagline?: string; // added for AIS140Props compatibility
  title: string;
  description: string;
  listItems?: string[];
  features?: { label: string }[]; // added for AIS140Props
  cta?: {
    text: string;
    href: string;
    icon?: string;
  };
  button?: {
    text: string;
    href: string;
    icon?: string;
  };
  contact?: {
    phone: string;
    label?: string;
  };
}

interface Props {
  data: SectionHeaderProps;
}

const TX_SectionHeaderType1 = ({ data }: Props) => {
  const { header, title, description} = data;
  return (
    <>
      <div className="mb-10px">
        <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
          {header}
        </span>
      </div>
      <motion.h3
        className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-dark-gray"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        {description}
      </motion.p>
      </>
  );
};

export default TX_SectionHeaderType1;

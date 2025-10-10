import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TX_ListItemViewTwo from "../ListItemView/TX_ListItemViewTwo";
import ButtonViewOne from "../ButtonView/ButtonViewOne";
import TX_ContactView1 from "../ContactView/TX_ContactView1";

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
    // <motion.div
    //   className="col-xl-5 col-lg-6 col-md-9 md-mb-50px text-center text-lg-start"
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   viewport={{ once: true, amount: 0.5 }}
    //   transition={{ duration: 0.8, ease: "easeOut" }}
    // >
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

      {/* Feature boxes */}
      {/* <div className="mb-20px">
        {listItems?.map((f, i) => (
          <TX_ListItemViewTwo key={i} item={f} />
        ))}
      </div> */}

      {/* Buttons & Contact */}
      {/* <div className="d-inline-flex flex-wrap">
       {cta && <ButtonViewOne data={cta} />} 
       {contact && <TX_ContactView1 data={contact} />} 
      </div> */}
      </>
    // </motion.div>
  );
};

export default TX_SectionHeaderType1;

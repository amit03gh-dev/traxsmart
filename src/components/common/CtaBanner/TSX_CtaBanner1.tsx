import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
interface CTA_Props {
 img: string;
  alt: string;
  text: string;
  link: {
    href: string;
    label: string;
  };
}

interface Props {
    data: CTA_Props
}
const TSX_CtaBanner1 = ({data}: Props) => {
    
  return (
    <motion.div
        className="container"
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="row align-items-center justify-content-center g-0">
          <div className="col-auto d-flex align-items-center">
            <Image
              src={data.img}
              alt={data.alt}
              width={122}
              height={92}
              // className="w-15"
            />
            <div className="fs-17 lh-26 last-paragraph-no-margin text-white pt-15px pb-15px fw-500">
              <p>
                {data.text}{" "}
                <a
                  href={data.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-line-bottom text-white"
                >
                  {data.link.label}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
  )
}

export default TSX_CtaBanner1

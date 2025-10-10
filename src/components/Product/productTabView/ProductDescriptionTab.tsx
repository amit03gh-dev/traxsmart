// import SplitContentMediaRight from "@/components/common/MediaTextLayout/SplitContentMediaRight";
import SplitContentMediaRight from "@/components/common/MediaTextLayout/TX_SplitContentMediaRight";
import React from "react";

const ProductDescriptionTab = ({ data } : {data: any}) => {
  return (
        <SplitContentMediaRight data={data.content} />
  );
};

export default ProductDescriptionTab;

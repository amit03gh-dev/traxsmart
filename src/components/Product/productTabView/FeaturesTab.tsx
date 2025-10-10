import TX_StripeTableViewTypeOne from "@/components/common/StripeTableView/TX_StripeTableViewTypeOne";
import React from "react";

interface Props {
  componentType: string;
  data: any
}

const FeaturesTab = ({ componentType, data }: Props) => {
console.log("component is>", componentType)
  // Ensure data is an array (handle nested object)
  const features = data || [];

  return (
    <TX_StripeTableViewTypeOne data={features}/>
  );
};

export default FeaturesTab;

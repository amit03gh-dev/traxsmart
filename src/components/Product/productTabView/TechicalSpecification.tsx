import TX_StripeTableViewTypeOne from "@/components/common/StripeTableView/TX_StripeTableViewTypeOne";
import React from "react";

interface Props {
  componentType: string;
  data: any
}

const TechicalSpecification = ({componentType, data}: Props) => {
   const techniacalSpecification = data || [];
  return (
    <TX_StripeTableViewTypeOne data={techniacalSpecification}/>
  );
};

export default TechicalSpecification;

import TX_ListItemViewOne from "@/components/common/ListItemView/TX_ListItemViewOne";
import React from "react";
export interface ListItem {
  id?: string | number;
  value: string; // required property
  [key: string]: any; // for any extra fields
}

export interface PackagingItem {
  title: string;
  description?: string;
  listItems?: {
    data: string[];
  };
}

interface PackagingAndShippingProps {
  componentType: string;
  data: PackagingItem[];
}

const PackagingAndShipping: React.FC<PackagingAndShippingProps> = ({
  componentType,
  data,
}) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div
          key={index}
          className="col-12 col-md-4 last-paragraph-no-margin sm-mb-30px"
        >
          <div className="alt-font fs-22 text-dark-gray mb-15px fw-500 mb-20px">
            {item.title}
          </div>
          <div>
            {item.title !== "Bulk Orders" &&
              item.listItems?.data.map((listItem, idx) => (
                <TX_ListItemViewOne key={idx} item={listItem} />
              ))}

            {item.title === "Bulk Orders" && (
              <p className="w-80 md-w-100">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagingAndShipping;

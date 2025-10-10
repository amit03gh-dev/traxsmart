import React from "react";
export interface ListItem {
  id?: string | number;
  value: string; // required property
  [key: string]: any; // for any extra fields
}

interface TX_ListItemViewOneProps {
  item: string;
}

const TX_ListItemViewOne: React.FC<TX_ListItemViewOneProps> = ({ item }) => {

  return (
    <div className="feature-box feature-box-left-icon-middle mb-10px">
      <div className="feature-box-icon feature-box-icon-rounded w-30px h-30px rounded-circle bg-very-light-gray me-10px">
        <i className="fa-solid fa-check fs-12 text-dark-gray"></i>
      </div>
      <div className="feature-box-content">
        <span className="d-block text-dark-gray fw-500">{item}</span>
      </div>
    </div>
  );
};

export default TX_ListItemViewOne;

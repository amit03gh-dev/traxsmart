import React from 'react'



const TX_ListItemViewTwo = ({item}:{item: string}) => {
  return (
    <div>
      <div className="icon-with-text-style-08 mb-10px">
            <div className="feature-box feature-box-left-icon-middle">
              <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
              </div>
              <div className="feature-box-content">
                <span className="text-dark-gray fw-600">{item}</span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TX_ListItemViewTwo

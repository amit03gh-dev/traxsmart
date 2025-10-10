import React from 'react'
interface HeaderTypes {
    header: string;
    title: string;
    description: string;
}

interface Props {
    data: HeaderTypes
}

const TX_SectionHeader2 = ({data} : Props) => {
    const {header, title, description} =  data
  return (
     <div className="row justify-content-left mb-4">
          <div className="col-lg-7 col-12 md-mb-50px last-paragraph-no-margin appear anime-child anime-complete">
            <div className="mb-10px">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                {header}
              </span>
            </div>
            <h2 className="w-85 lg-w-100 text-dark-gray fw-700 ls-minus-2px">
              {title}
            </h2>
            <p className="w-85 lg-w-100 text-dark-gray">{description}</p>
          </div>
        </div>
  )
}

export default TX_SectionHeader2

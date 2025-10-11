import Image from 'next/image'
import React from 'react'
interface TabItem {
  id: string;
  icon: string;
  title: string;
  image: string;
  desc: string;
}

interface Props {
  data: TabItem[]
}

const TabView1 = ({data}: Props) => {
  return (
     <div className="row align-items-center">
              {/* Tabs Navigation */}
              <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px">
                <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                  {data.map((tab, index) => (
                    <li className="nav-item" key={tab.id}>
                      <a
                        data-bs-toggle="tab"
                        href={`#${tab.id}`}
                        className={`nav-link d-flex align-items-center ${index === 0 ? "active" : ""}`}
                      >
                        <i className={`feather ${tab.icon} icon-extra-medium text-dark-gray`}></i>
                        <span>{tab.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Tabs Content */}
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="tab-content">
                  {data.map((tab, index) => (
                    <div
                      className={`tab-pane fade in ${index === 0 ? "active show" : ""}`}
                      id={tab.id}
                      key={tab.id}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-6 offset-xl-1 sm-mb-30px">
                          <Image
                            src={tab.image}
                            alt={tab.title}
                            className="border-radius-6px w-100"
                            width={500}
                            height={400}
                            priority
                            fetchPriority="high"
                          />
                        </div>
                        <div className="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                          <p>{tab.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  )
}

export default TabView1

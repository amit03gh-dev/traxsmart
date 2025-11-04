// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section className="about-section top-space-margin half-section bg-gradient-very-light-gray">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <h2 className="display-4 fw-bold text-primary mb-4">About Us</h2>
//             <p className="lead">
//               The TraxSmart story like many others in this field is inspired by the delicate peace of mind that comes with finding foolproof security solutions.
//             </p>
//           </div>
//           <div className="col-lg-6">
//             <div className="card shadow-sm border-0">
//               <div className="card-body p-4">
//                 <h5 className="card-title text-primary mb-3">Our Story</h5>
//                 <p className="card-text">
//                   The founders being one of the key players in the automation and security industry in India visualized the nex-gen interpretation of the word surveillance i.e. tracking/monitoring the precious ones individually. Being impressed with the efficacy and high-precision results that technological advances that the Global Positioning System (GPS) brings in a person's life, the solution they opted was a specialized tracking system, which can help families feel closer and securer, vehicle owners feel safer with an invisible security blanket and commercial entities can keep a "smart track" on their vehicular fleet.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body text-center p-4">
//                 <div className="mb-3">
//                   <i className="fas fa-bullseye fa-2x text-primary"></i>
//                 </div>
//                 <h4 className="card-title text-primary">Our Aim</h4>
//                 <p className="card-text">
//                   We aim to provide cost-effective, efficient, and state-of-the-art technology to our customers, a technology that keeps our clients safe and peaceful all the time.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body text-center p-4">
//                 <div className="mb-3">
//                   <i className="fas fa-users fa-2x text-primary"></i>
//                 </div>
//                 <h4 className="card-title text-primary">Who We Serve</h4>
//                 <p className="card-text">
//                   In TraxSmart, we have stepped ahead with the sole motive and agenda to provide and cater all specific requirements with customized solutions for EVERY SPECIFIC criterion.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body text-center p-4">
//                 <div className="mb-3">
//                   <i className="fas fa-cogs fa-2x text-primary"></i>
//                 </div>
//                 <h4 className="card-title text-primary">Our Solutions</h4>
//                 <p className="card-text">
//                   With a product basket of VARIOUS solutions, we aim at catering "pin to plane" need of all individuals, organizations, and departments.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-12">
//             <h3 className="text-center mb-4 text-primary">Our Target Verticals</h3>
//             <div className="row">
//               <div className="col-md-4 text-center mb-3">
//                 <div className="bg-white p-4 rounded shadow-sm h-100">
//                   <i className="fas fa-car fa-2x text-primary mb-3"></i>
//                   <h5>Personal Car Tracker</h5>
//                 </div>
//               </div>
//               <div className="col-md-4 text-center mb-3">
//                 <div className="bg-white p-4 rounded shadow-sm h-100">
//                   <i className="fas fa-truck fa-2x text-primary mb-3"></i>
//                   <h5>Fleet Management</h5>
//                 </div>
//               </div>
//               <div className="col-md-4 text-center mb-3">
//                 <div className="bg-white p-4 rounded shadow-sm h-100">
//                   <i className="fas fa-bus fa-2x text-primary mb-3"></i>
//                   <h5>School Buses Tracker</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="bg-primary text-white p-5 rounded text-center">
//               <h3 className="mb-3">Our Commitment</h3>
//               <p className="mb-0">
//                 No matter what the size/quantum business we achieve from you, we always aim to make you feel special and one with the topmost priority.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



'use client'
import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-section top-space-margin half-section bg-gradient-very-light-gray">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">TraxSmart</span>
            </h1>
            <p className="text-xl opacity-90">
              Pioneering next-generation GPS tracking solutions for peace of mind in an interconnected world
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Redefining Security Through Innovation
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  The TraxSmart story, like many others in this field, is inspired by the delicate peace of mind that comes with finding foolproof security solutions.
                </p>
                <p>
                  The founders, being one of the key players in the automation and security industry in India, visualized the next-generation interpretation of the word surveillance i.e. tracking/monitoring the precious ones individually.
                </p>
                <p>
                  Being impressed with the efficacy and high-precision results that technological advances that the Global Positioning System (GPS) brings in a person&apos;s life, the solution they opted was a specialized tracking system.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 ml-4">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To provide cost-effective, efficient, and state-of-the-art technology that keeps our clients safe and peaceful all the time.
                </p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">Since 2015</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-semibold">10K+ Devices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600">
              Customized tracking solutions for every specific criterion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Vehicle Tracking */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Vehicle Tracking</h3>
              <p className="text-gray-600 mb-6">
                Advanced GPS tracking for personal cars with real-time location monitoring and security features.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Real-time monitoring
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Geo-fencing alerts
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Anti-theft protection
                </li>
              </ul>
            </div>

            {/* Fleet Management */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fleet Management</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions for commercial fleets with route optimization and performance analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Route optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fuel monitoring
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Performance analytics
                </li>
              </ul>
            </div>

            {/* School Bus Tracking */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">School Bus Tracking</h3>
              <p className="text-gray-600 mb-6">
                Ensure student safety with specialized tracking solutions for school transportation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time location
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Parent alerts
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Speed monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Commitment to You</h2>
            <p className="text-xl mb-8 opacity-90">
              No matter what the size/quantum business we achieve from you, we always aim to make you feel special and one with the topmost priority.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="opacity-80">Your satisfaction is our top priority</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="opacity-80">Trusted by thousands of customers</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="opacity-80">Always ahead with technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
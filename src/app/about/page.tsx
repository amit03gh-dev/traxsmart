'use client'
import React, { useState, useEffect } from 'react';

const ModernAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="about-section top-space-margin half-section bg-gradient-very-light-gray" style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
              <span className="badge bg-primary-gradient rounded-pill px-4 py-2 mb-3">About TraxSmart</span>
              <h1 className="display-4 fw-bold text-dark mb-3">Security Through Innovation</h1>
              <p className="lead text-muted">
                Pioneering next-generation GPS tracking solutions for peace of mind in an interconnected world
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={`story-card p-4 p-lg-5 ${isVisible ? 'fade-in-left' : ''}`}
                 style={{
                   background: 'white',
                   borderRadius: '20px',
                   boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                   height: '100%'
                 }}>
              <div className="icon-wrapper mb-4">
                <div className="icon-circle bg-primary-gradient">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
              </div>
              <h3 className="h2 fw-bold text-dark mb-4">Our Journey</h3>
              <p className="text-muted mb-4">
                The TraxSmart story is inspired by the delicate peace of mind that comes with finding foolproof security solutions. 
                Our founders, key players in India&apos;s automation and security industry, envisioned a new interpretation of surveillance.
              </p>
              <p className="text-muted">
                Impressed by the precision of GPS technology, we developed specialized tracking systems that help families feel closer, 
                vehicle owners feel safer, and businesses maintain smart oversight of their fleets.
              </p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className={`visual-card position-relative ${isVisible ? 'fade-in-right' : ''}`}>
              <div className="main-visual bg-primary-gradient rounded-4 p-5 text-white text-center"
                   style={{ height: '300px' }}>
                <div className="visual-content">
                  <i className="fas fa-satellite display-1 mb-3"></i>
                  <h3 className="h4">High-Precision GPS Technology</h3>
                  <p className="mb-0">Real-time tracking with military-grade accuracy</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="floating-card card border-0 shadow position-absolute"
                   style={{
                     top: '-20px',
                     right: '-20px',
                     width: '200px',
                     background: 'white',
                     borderRadius: '15px'
                   }}>
                <div className="card-body p-3 text-center">
                  <i className="fas fa-mobile-alt text-primary fs-2 mb-2"></i>
                  <h6 className="mb-0">Mobile Enabled</h6>
                  <small className="text-muted">Always connected</small>
                </div>
              </div>
              
              <div className="floating-card card border-0 shadow position-absolute"
                   style={{
                     bottom: '-20px',
                     left: '-20px',
                     width: '200px',
                     background: 'white',
                     borderRadius: '15px'
                   }}>
                <div className="card-body p-3 text-center">
                  <i className="fas fa-bolt text-warning fs-2 mb-2"></i>
                  <h6 className="mb-0">Real-time Alerts</h6>
                  <small className="text-muted">Instant notifications</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="row mb-5">
          <div className="col-12">
            <div className={`mission-card p-4 p-lg-5 rounded-4 ${isVisible ? 'fade-in-up' : ''}`}
                 style={{
                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                   color: 'white'
                 }}>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3 className="h2 fw-bold mb-3">Our Mission</h3>
                  <p className="mb-0 fs-5">
                    To provide cost-effective, efficient, and state-of-the-art technology that keeps our clients 
                    safe and peaceful all the time through impermeable security systems.
                  </p>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="mission-icon bg-white rounded-circle d-inline-flex align-items-center justify-content-center"
                       style={{ width: '100px', height: '100px' }}>
                    <i className="fas fa-bullseye text-primary fs-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-center fw-bold text-dark mb-5">Who We Serve</h2>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className={`service-card text-center p-4 rounded-4 h-100 ${isVisible ? 'fade-in-up' : ''}`}
                 style={{
                   background: 'white',
                   boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                   transition: 'transform 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="service-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <i className="fas fa-car text-white fs-2"></i>
              </div>
              <h4 className="fw-bold text-dark mb-3">Personal Vehicle Tracking</h4>
              <p className="text-muted">
                Advanced GPS tracking for personal cars with real-time location monitoring and security features.
              </p>
              <div className="mt-3">
                <span className="badge bg-light text-primary rounded-pill">24/7 Monitoring</span>
                <span className="badge bg-light text-primary rounded-pill ms-1">Geo-fencing</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className={`service-card text-center p-4 rounded-4 h-100 ${isVisible ? 'fade-in-up' : ''}`}
                 style={{
                   background: 'white',
                   boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                   transition: 'transform 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="service-icon bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <i className="fas fa-truck text-white fs-2"></i>
              </div>
              <h4 className="fw-bold text-dark mb-3">Fleet Management</h4>
              <p className="text-muted">
                Comprehensive solutions for commercial fleets with route optimization and performance analytics.
              </p>
              <div className="mt-3">
                <span className="badge bg-light text-success rounded-pill">Route Optimization</span>
                <span className="badge bg-light text-success rounded-pill ms-1">Fuel Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className={`service-card text-center p-4 rounded-4 h-100 ${isVisible ? 'fade-in-up' : ''}`}
                 style={{
                   background: 'white',
                   boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                   transition: 'transform 0.3s ease'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                 onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="service-icon bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <i className="fas fa-bus text-white fs-2"></i>
              </div>
              <h4 className="fw-bold text-dark mb-3">School Bus Tracking</h4>
              <p className="text-muted">
                Ensure student safety with specialized tracking solutions for school transportation.
              </p>
              <div className="mt-3">
                <span className="badge bg-light text-warning rounded-pill">Child Safety</span>
                <span className="badge bg-light text-warning rounded-pill ms-1">Parent Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className={`commitment-card p-5 rounded-4 text-center ${isVisible ? 'fade-in-up' : ''}`}
                 style={{
                   background: 'white',
                   boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                   border: '1px solid rgba(0,0,0,0.05)'
                 }}>
              <div className="commitment-icon bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                   style={{ width: '80px', height: '80px' }}>
                <i className="fas fa-heart text-white fs-2"></i>
              </div>
              <h3 className="h2 fw-bold text-dark mb-3">Our Commitment</h3>
              <p className="fs-5 text-muted mb-4">
                No matter the size of your business, we always aim to make you feel special with top priority service.
                We provide customized solutions for every specific criterion with our diverse product basket.
              </p>
              <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                Discover Our Solutions <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-about {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .bg-primary-gradient {
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%) !important;
        }
        
        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .service-card:hover {
          transform: translateY(-10px) !important;
        }
      `}</style>
    </section>
  );
};

export default ModernAboutSection;
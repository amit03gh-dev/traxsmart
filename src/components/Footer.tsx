"use client";

export default function Footer() {
  return (
    <footer className="bg-dark text-muted py-5 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Left Side: Disclaimer */}
        <small className="mb-2 mb-md-0 text-center text-md-start text-white-50">
          This site is protected by reCAPTCHA and the Google privacy policy and terms of
          service apply. You must not use this website if you disagree with any of these
          website standard terms and conditions.
        </small>

        {/* Right Side: Copyright */}
        <small className="text-center text-md-end">
          © 2024 Traxsmart Limited
        </small>
      </div>
    </footer>
  );
}

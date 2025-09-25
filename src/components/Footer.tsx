'use client';

export default function Footer() {
  return (
    <footer className="bg-dark-gray pb-30px">
      <div className="container">
        {/* Footer bottom */}
        <div className="row align-items-center footer-bottom pt-30px">
          <div className="col-md-7 last-paragraph-no-margin">
            <p className="fs-14 lh-24 w-90 sm-w-100">
              This site is protected by reCAPTCHA and the Google privacy policy and terms of
              service apply. You must not use this website if you disagree with any of these
              website standard terms and conditions.
            </p>
          </div>
          <div className="col-md-5 text-md-end sm-mt-15px last-paragraph-no-margin">
            <p className="fs-14 lh-24">&copy; 2024 Traxsmart Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

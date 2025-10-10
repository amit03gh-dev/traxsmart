import { FooterData } from "@/types/footer";
import Image from "next/image";
interface PropsType {
  data: FooterData;
}
export default function Footer({ data }: PropsType) {
  const { logo, address, contact, sections } = data;

  return (
    <footer className="bg-dark-gray pb-30px">
      <div className="container">
        <div className="row mb-6 sm-mb-50px text-center text-sm-start">
          {/* Logo & Contact Section */}
          <div className="col-lg-3 col-md-8 md-mb-30px">
            <a
              href={logo.link}
              className="footer-logo d-inline-block mb-15px"
              aria-label="logo"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </a>
            <p className="w-70 mb-10px xl-w-100">{address}</p>
            <div>
              <i className="bi bi-telephone-outbound icon-very-small me-10px text-white"></i>
              <a href={`tel:${contact.phone}`} className="text-white">
                {contact.phone}
              </a>
            </div>
            <div>
              <i className="bi bi-envelope icon-very-small me-10px text-white"></i>
              <a href={`mailto:${contact.email}`} className="text-white">
                {contact.email}
              </a>
            </div>
          </div>

          {/* Dynamic Link Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className={`col-lg-2 ${
                index === 0 ? "offset-lg-1" : ""
              } col-md-4 col-sm-6 ${
                index < sections.length - 1 ? "md-mb-30px" : ""
              }`}
            >
              <span className="fw-500 d-block text-white mb-5px">
                {section.title}
              </span>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

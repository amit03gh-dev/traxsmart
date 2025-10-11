"use client";

interface ContactItem {
  icon: string;
  title: string;
  content?: string[];
  emails?: string[];
  phones?: { label: string; number: string }[];
}

interface ContactSectionData {
  header: string;
  title: string;
  description: string;
  contacts: ContactItem[];
}

interface Props {
  data:{
    componentName: string;
    content: ContactSectionData
  }
}

export default function Section8({ data }: Props) {
  const {content} = data
  return (
    <section id="contact" className="big-section">
      <div className="container">
        {/* Header */}
        <div className="row align-items-end justify-content-center mb-5 text-center text-lg-start sm-mb-8">
          <div className="col-xxl-5 col-lg-6 col-md-10 md-mb-25px">
            <span className="text-base-color fw-600 mb-15px text-uppercase d-block ls-minus-05px">
              {content.header}
            </span>
            <h2 className="fw-700 text-dark-gray w-90 lg-w-100 ls-minus-1px alt-font mb-0">
              {content.title}
            </h2>
          </div>
          <div className="col-xxl-6 offset-xxl-1 col-lg-6 col-md-10 last-paragraph-no-margin">
            <p className="w-90 xl-w-100 mb-20px xl-mb-10px lg-mb-0">{content.description}</p>
          </div>
        </div>

        {/* Contact Blocks */}
        <div className="row row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-sm-2">
          {content.contacts.map((item, index) => (
            <div key={index} className="col lg-mb-30px text-center text-sm-start">
              <span className="fs-19 fw-700 d-block w-90 text-dark-gray border-bottom border-1 border-color-dark-gray pb-15px mb-15px xs-w-100">
                <i className={`feather ${item.icon} d-inline-block icon-small me-10px`}></i>
                {item.title}
              </span>

              {/* Content Text */}
              {item.content && (
                <div className="last-paragraph-no-margin">
                  {item.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}

              {/* Emails */}
              {item.emails &&
                item.emails.map((email, i) => (
                  <div key={i}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                ))}

              {/* Phones */}
              {item.phones &&
                item.phones.map((phone, i) => (
                  <div key={i}>
                    <span className="text-dark-gray fw-600">{phone.label}: </span>
                    <a href={`tel:${phone.number}`}>{phone.number}</a>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

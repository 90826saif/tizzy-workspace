import React from "react";
import styles from "@/components/home/faqs/Faqs.module.css";

const Faqs = () => {
  return (
    <section
      className={`${styles.faqSection} section-spacing`}
      id="faqs"
      aria-labelledby="faqs-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <span className={styles.faqKicker}>Got questions?</span>
            <h2 className="main-title color-000000" id="faqs-title">
              Frequently Asked Questions
            </h2>
            <p className="small-text">
              Everything you need to know about Google Workspace licensing and
              Tizzy's managed services.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={`${styles.faqList} accordion`} id="faq-accordion">
              <div className={styles.accordionItem}>
                <h3 className="accordion-header" id="faq-heading-one">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-one"
                    aria-expanded="false"
                    aria-controls="faq-one"
                  >
                    What is the difference between Google Workspace plans?
                  </button>
                </h3>
                <div
                  id="faq-one"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-heading-one"
                  data-bs-parent="#faq-accordion"
                >
                  <div className={styles.accordionBody}>
                    Starter includes 30 GB storage and 100-participant meetings.
                    Standard adds 2 TB pooled storage, shared drives, and
                    meeting recording. Business Plus adds 5 TB, Google Vault,
                    500-participant meetings, and advanced device management.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h3 className="accordion-header" id="faq-heading-two">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-two"
                    aria-expanded="false"
                    aria-controls="faq-two"
                  >
                    Can I use my existing business domain?
                  </button>
                </h3>
                <div
                  id="faq-two"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-heading-two"
                  data-bs-parent="#faq-accordion"
                >
                  <div className={styles.accordionBody}>
                    Yes. Keep the domain you already own. Tizzy connects it to
                    Google Workspace, verifies the DNS records, and sets up
                    addresses such as name@yourcompany.com.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h3 className="accordion-header" id="faq-heading-three">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-three"
                    aria-expanded="false"
                    aria-controls="faq-three"
                  >
                    Can I migrate my existing email to Google Workspace?
                  </button>
                </h3>
                <div
                  id="faq-three"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-heading-three"
                  data-bs-parent="#faq-accordion"
                >
                  <div className={styles.accordionBody}>
                    Yes. Mail, contacts, and calendars move from your current
                    provider with zero email downtime, so your team keeps
                    working while the migration runs.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h3 className="accordion-header" id="faq-heading-four">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-four"
                    aria-expanded="false"
                    aria-controls="faq-four"
                  >
                    How long does setup take?
                  </button>
                </h3>
                <div
                  id="faq-four"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-heading-four"
                  data-bs-parent="#faq-accordion"
                >
                  <div className={styles.accordionBody}>
                    Most businesses are ready in 2–4 hours. Domain connection,
                    user setup, and DNS checks are handled for you.
                  </div>
                </div>
              </div>
              <div className={styles.accordionItem}>
                <h3 className="accordion-header" id="faq-heading-five">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-five"
                    aria-expanded="false"
                    aria-controls="faq-five"
                  >
                    Can I upgrade my plan later?
                  </button>
                </h3>
                <div
                  id="faq-five"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-heading-five"
                  data-bs-parent="#faq-accordion"
                >
                  <div className={styles.accordionBody}>
                    Yes. Add users or move to a higher plan whenever you need
                    more storage, larger meetings, or stronger admin controls.
                    Tizzy handles the license change and billing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;

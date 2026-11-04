import Image from "next/image";
import React from "react";
import styles from "@/components/home/testimonial/Testimonial.module.css";
import quote from "@/assets/images/icons/quote.png";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Moving 85 users from legacy webmail to Google Workspace was seamless with Tizzy. Zero email downtime and support whenever our team had questions.",
      featured: false,
    },
    {
      text: "Having our own @studiolumina.com email instantly made us look professional to international clients. Tizzy set it all up and verified our DNS records in under 3 hours.",
      featured: true,
    },
    {
      text: "Tizzy Cloud simplified our GST invoicing and handles our license additions effortlessly. Their proactive renewal reminders ensure our services are never interrupted.",
      featured: false,
    },
  ];

  return (
    <section
      className={`${styles.trustBusiness} section-spacing counters-section`}
      aria-labelledby="trust-business-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="main-title" id="trust-business-title">
              <span className="color-000000">Trusted by Over 2,500+</span>
              <br />
              <span className="color-0355AC">Growing Businesses</span>
            </h2>

            <p className="small-text">
              See why fast-scaling startups and established enterprises rely on
              Tizzy Cloud for Google Workspace.
            </p>
          </div>
        </div>

        <div className={`${styles.trustCards} row g-4`}>
          {testimonials.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <article
                className={`${styles.trustCard} ${
                  item.featured ? styles.trustCardFeatured : ""
                }`}
              >
                <span className={styles.trustQuote} aria-hidden="true">
                  <Image src={quote} alt="" width={25} height={25} />
                </span>

                <div
                  className={styles.trustStars}
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                <p>“{item.text}”</p>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.trustMetrics}>
          <div className="row text-center">
            <div className="col-md-4">
              <strong>99.9%</strong>
              <span>Uptime SLA guaranteed</span>
            </div>

            <div className="col-md-4">
              <strong>2,500+</strong>
              <span>Organizations managed</span>
            </div>

            <div className="col-md-4">
              <strong>&lt; 15 Min</strong>
              <span>Average support response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

"use client";

import React from "react";
import styles from "@/components/home/choose-business/ChooseBusiness.module.css";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Vector115 from "@/assets/images/bg/Vector-115.png";
import Vector114 from "@/assets/images/bg/Vector-114.png";
import Vector116 from "@/assets/images/bg/Vector-116.png";
import { FaArrowRight } from "react-icons/fa";
const plans = [
  {
    title: "Starter",
    badge: "Small Teams",
    description:
      "Essential collaboration tools and professional email for startup teams.",
    price: "125",
    ariaLabel: "125 rupees per user per month",
    features: [
      { bold: "30 GB", text: "Cloud Storage per user" },
      { text: "Custom business email", br: "(@yourcompany.com)" },
      { bold: "100 participant", text: "video meetings" },
      { text: "Standard security & admin controls" },
      { text: "Full Tizzy managed setup & onboarding" },
      { text: "Full Tizzy managed setup & onboarding" },
      { text: "Full Tizzy managed setup & onboarding" },
    ],
  },
  {
    title: "Standard",
    badge: "Recommended",
    description:
      "Enhanced storage, meeting recordings, and team shared drives for growing companies.",
    price: "672",
    ariaLabel: "672 rupees per user per month",
    recommended: true,
    features: [
      { bold: "2 TB", text: "Pooled Cloud Storage per user" },
      { text: "Custom email + Shared Drives for team" },
      {
        bold: "150 participant",
        text: "meetings + Cloud Recording",
      },
      { text: "Advanced security & audit reporting" },
      { text: "Free assisted domain & email migration" },
      { text: "24/7 Priority Phone & WhatsApp Support" },
    ],
  },
  {
    title: "Starter",
    badge: "Small Teams",
    description:
      "Essential collaboration tools and professional email for startup teams.",
    price: "125",
    ariaLabel: "125 rupees per user per month",
    features: [
      { bold: "30 GB", text: "Cloud Storage per user" },
      { text: "Custom business email", br: "(@yourcompany.com)" },
      { bold: "100 participant", text: "video meetings" },
      { text: "Standard security & admin controls" },
      { text: "Full Tizzy managed setup & onboarding" },
      { text: "Full Tizzy managed setup & onboarding" },
      { text: "Full Tizzy managed setup & onboarding" },
    ],
  },
  {
    title: "Business Plus",
    badge: "organizations",
    description:
      "Suggested for established organizations and advanced device management controls.",
    price: "1700",
    ariaLabel: "1700 rupees per user per month",
    features: [
      { bold: "5 TB", text: "Cloud Storage per user" },
      { bold: "Google Vault", text: "for eDiscovery & compliance" },
      {
        bold: "500 participant",
        text: "video meetings + attendance",
      },
      { text: "Advanced Endpoint & Mobile Device Wipe" },
      { text: "Dedicated Account Manager & SLA guarantee" },
      { text: "Full enterprise data migration support" },
    ],
  },
];

const ChooseBusiness = () => {
  return (
    <>
      <section
        className={`${styles.workspacePlansSection} section-spacing`}
        id="plans"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-title">
                <span className="color-000000">
                  Choose the Workspace Plan That Fits <br />
                </span>
                Your Business
              </h2>

              <p className="small-text">
                Official Google pricing with complimentary setup, zero-downtime
                onboarding, and 24/7 dedicated support by Tizzy Cloud.
              </p>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {plans.map((plan, index) => (
              <div
                className="col-12 col-md-6 col-lg-3"
                key={`${plan.title}-${index}`}
              >
                <article
                  className={`${styles.planCard} ${
                    plan.recommended ? styles.recommendedPlan : ""
                  }`}
                >
                  <div className={styles.planCardHead}>
                    <h3 className={styles.planCardTitle}>{plan.title}</h3>
                    <span className={styles.planCardBadge}>{plan.badge}</span>
                  </div>

                  <p className={styles.planCardText}>{plan.description}</p>

                  <div
                    className={styles.planCardPrice}
                    aria-label={plan.ariaLabel}
                  >
                    <span className={styles.planCardCurrency}>₹</span>
                    <strong>{plan.price}</strong>
                    <span className={styles.planCardUnit}>per user/month</span>
                  </div>

                  <p className={styles.planCardNote}>
                    Billed annually · GST additional
                  </p>

                  <ul className={styles.planCardFeatures}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i data-lucide="check" aria-hidden="true" />

                        {feature.bold && <strong>{feature.bold}</strong>}

                        {feature.bold && " "}
                        {feature.text}

                        {feature.br && (
                          <>
                            <br />
                            {feature.br}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  <a className={styles.submitBtn} href="#consultation-form">
                    Choose Plan
                  </a>
                </article>
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-12 text-center">
              <a
                className={styles.compareFeatures}
                href="#"
                aria-label="Compare All Detailed Features & Security Controls"
              >
                Compare All Detailed Features &amp; Security Controls
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.partnerSwitch} section-spacing pt-0`}
        aria-labelledby="partner-switch-title"
      >
        <div className="container">
          <div
            className={`${styles.partnerSwitchBanner} position-relative overflow-hidden`}
          >
            <div className={styles.partnerSwitchBannerBg}>
              <Image
                src={Vector115}
                className={styles.Vector115}
                alt="Partner switch background"
              />
              <Image
                src={Vector114}
                className={styles.Vector114}
                alt="Partner switch background"
              />
              <Image
                src={Vector116}
                className={styles.Vector116}
                alt="Partner switch background"
              />
            </div>
            <div className="row align-items-center position-relative">
              <div className="col-lg-7 col-md-8">
                <div className={styles.partnerSwitchContent}>
                  <span className={styles.workspaceEyebrow}>
                    Switch your partner
                  </span>
                  <h2
                    className={styles.partnerSwitchTitle}
                    id="partner-switch-title"
                  >
                    Already using Google Workspace with another partner?
                  </h2>
                  <p className={styles.partnerSwitchText}>
                    Move your existing Workspace to Tizzy Cloud at no extra
                    cost. Keep your data and configurations while getting
                    dedicated support, GST billing, and renewal monitoring.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
                <div
                  className={`${styles.partnerSwitchActions}  d-flex flex-wrap justify-content-lg-end gap-3`}
                >
                  <a
                    className={styles.workspaceAction}
                    href="#consultation-form"
                  >
                    Transfer to Tizzy
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseBusiness;

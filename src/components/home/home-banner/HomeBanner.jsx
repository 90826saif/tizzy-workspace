"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import gmail from "@/assets/images/workspace-tools/gmail.svg";
import drive from "@/assets/images/workspace-tools/drive.svg";
import meet from "@/assets/images/workspace-tools/meet.svg";
import calendar from "@/assets/images/workspace-tools/calendar.svg";
import chat from "@/assets/images/workspace-tools/chat.svg";
import docs from "@/assets/images/workspace-tools/docs.svg";
import sheets from "@/assets/images/workspace-tools/sheets.svg";
import slides from "@/assets/images/workspace-tools/slides.svg";
import forms from "@/assets/images/workspace-tools/forms.svg";
import sites from "@/assets/images/workspace-tools/sites.svg";
import gemini from "@/assets/images/workspace-tools/gemini.png";
import Mascot01 from "@/assets/images/Mascot-01.png";
import styles from "@/components/home/home-banner/HomeBanner.module.css";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";

const benefits = [
  "Professional Business Email",
  "Secure Cloud Storage",
  "Dedicated Support",
];

const userCounts = [
  { value: "1-10", label: "1-10 Users" },
  { value: "11-25", label: "11-25 Users" },
  { value: "26-50", label: "26-50 Users" },
  { value: "51-100", label: "51-100 Users" },
  { value: "100+", label: "100+ Users" },
];

// phone country code + flag
const phoneCountries = [
  { name: "India", iso: "in", dial: "+91" },
  { name: "United States", iso: "us", dial: "+1" },
  { name: "United Kingdom", iso: "gb", dial: "+44" },
  { name: "United Arab Emirates", iso: "ae", dial: "+971" },
  { name: "Singapore", iso: "sg", dial: "+65" },
  { name: "Australia", iso: "au", dial: "+61" },
  { name: "Canada", iso: "ca", dial: "+1" },
  { name: "Germany", iso: "de", dial: "+49" },
  { name: "France", iso: "fr", dial: "+33" },
  { name: "Saudi Arabia", iso: "sa", dial: "+966" },
  { name: "Qatar", iso: "qa", dial: "+974" },
  { name: "Kuwait", iso: "kw", dial: "+965" },
  { name: "Bahrain", iso: "bh", dial: "+973" },
  { name: "Oman", iso: "om", dial: "+968" },
  { name: "Malaysia", iso: "my", dial: "+60" },
  { name: "Bangladesh", iso: "bd", dial: "+880" },
  { name: "Nepal", iso: "np", dial: "+977" },
  { name: "Sri Lanka", iso: "lk", dial: "+94" },
  { name: "Pakistan", iso: "pk", dial: "+92" },
  { name: "Indonesia", iso: "id", dial: "+62" },
  { name: "Philippines", iso: "ph", dial: "+63" },
  { name: "Thailand", iso: "th", dial: "+66" },
  { name: "Vietnam", iso: "vn", dial: "+84" },
  { name: "Hong Kong", iso: "hk", dial: "+852" },
  { name: "Japan", iso: "jp", dial: "+81" },
  { name: "South Korea", iso: "kr", dial: "+82" },
  { name: "China", iso: "cn", dial: "+86" },
  { name: "South Africa", iso: "za", dial: "+27" },
  { name: "Kenya", iso: "ke", dial: "+254" },
  { name: "Nigeria", iso: "ng", dial: "+234" },
  { name: "Egypt", iso: "eg", dial: "+20" },
  { name: "Netherlands", iso: "nl", dial: "+31" },
  { name: "Ireland", iso: "ie", dial: "+353" },
  { name: "Italy", iso: "it", dial: "+39" },
  { name: "Spain", iso: "es", dial: "+34" },
  { name: "Switzerland", iso: "ch", dial: "+41" },
  { name: "Sweden", iso: "se", dial: "+46" },
  { name: "New Zealand", iso: "nz", dial: "+64" },
  { name: "Brazil", iso: "br", dial: "+55" },
  { name: "Mexico", iso: "mx", dial: "+52" },
];

const flagSrc = (iso) => `https://flagcdn.com/w40/${iso}.png`;

const workspaceApps = [
  { name: "Gmail", href: "https://mail.google.com/", src: gmail },
  { name: "Drive", href: "https://drive.google.com/", src: drive },
  { name: "Meet", href: "https://meet.google.com/", src: meet },
  { name: "Calendar", href: "https://calendar.google.com/", src: calendar },
  { name: "Chat", href: "https://chat.google.com/", src: chat },
  { name: "Docs", href: "https://docs.google.com/", src: docs },
  { name: "Sheets", href: "https://sheets.google.com/", src: sheets },
  { name: "Slides", href: "https://slides.google.com/", src: slides },
  { name: "Forms", href: "https://forms.google.com/", src: forms },
  { name: "Sites", href: "https://sites.google.com/", src: sites },
  { name: "Gemini", href: "https://gemini.google.com/", src: gemini },
];

const HomeBanner = () => {
  // ---- phone country picker state ----
  const [selectedIso, setSelectedIso] = useState("in");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fieldRef = useRef(null);
  const toggleRef = useRef(null);
  const listRef = useRef(null);

  const selectedCountry =
    phoneCountries.find((c) => c.iso === selectedIso) || phoneCountries[0];

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openMenu = () => {
    const idx = phoneCountries.findIndex((c) => c.iso === selectedIso);
    setActiveIndex(idx > -1 ? idx : 0);
    setMenuOpen(true);
  };

  const selectCountry = (country) => {
    setSelectedIso(country.iso);
    setMenuOpen(false);
  };

  // close on outside click + keyboard navigation (only while open)
  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (event) => {
      if (fieldRef.current && !fieldRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        toggleRef.current?.focus();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, phoneCountries.length - 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (
        event.key === "Enter" &&
        document.activeElement === toggleRef.current
      ) {
        event.preventDefault();
        setActiveIndex((i) => {
          const country = phoneCountries[i];
          if (country) selectCountry(country);
          return i;
        });
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, closeMenu]);

  // keep the active option visible
  useEffect(() => {
    if (!menuOpen || !listRef.current) return;
    const options = listRef.current.querySelectorAll(".phone-country-option");
    options[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, menuOpen]);

  return (
    <section className={styles.workspacePage}>
      <div className={styles.workspaceHero} aria-labelledby="workspace-title">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-7 col-xl-7">
              <div className={styles.workspaceCopy}>
                <span className={`${styles.workspaceEyebrow} section-title`}>
                  Google Workspace for Business
                </span>
                <h1
                  id="workspace-title"
                  className={`${styles.workspaceTitle} main-title`}
                >
                  Power Your Business With Google Workspace
                </h1>
                <p className={`${styles.workspaceDescription} p-content`}>
                  Professional business email, cloud storage and collaboration
                  tools — all managed with reliable support from Tizzy Cloud.
                </p>
                <div
                  className={styles.workspacePrice}
                  aria-label="Starting at 130 rupees per month"
                >
                  <span>₹</span>
                  <strong>130</strong>
                  <span>/ month</span>
                </div>

                <div className={styles.workspaceActions}>
                  <a className={styles.workspaceAction} href="#workspace-apps">
                    View Plan{" "}
                    <span aria-hidden="true">
                      <GoArrowRight />
                    </span>
                  </a>
                </div>

                <div className={styles.workspaceBenefits}>
                  {benefits.map((benefit) => (
                    <span className={styles.workspaceBenefit} key={benefit}>
                      <span
                        className={styles.workspaceBenefitIcon}
                        aria-hidden="true"
                      >
                        <FaRegCircleCheck size={22} />
                      </span>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation form */}
            <div className="col-md-12 col-lg-5 col-xl-5">
              <div className={`${styles.workspaceFormWrap} position-relative`}>
                <form
                  className={styles.workspaceForm}
                  id="consultation-form"
                  action="#"
                  method="post"
                >
                  <p className={styles.formKicker}>
                    We will help you choose the right plan.
                  </p>
                  <h2 className={styles.formHeading}>Get Free Consultation</h2>

                  <div className="mb-3">
                    <label className={styles.formLabel} htmlFor="full-name">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      id="full-name"
                      name="full_name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className={styles.formLabel}
                      htmlFor="business-email"
                    >
                      Business Email
                    </label>
                    <input
                      className="form-control"
                      id="business-email"
                      name="business_email"
                      type="email"
                      placeholder="name@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className={styles.formLabel} htmlFor="phone-number">
                      Phone Number
                    </label>
                    <div
                      className="phone-field"
                      id="phone-field"
                      ref={fieldRef}
                    >
                      <button
                        ref={toggleRef}
                        className={styles.phoneCountryBtn}
                        id="phone-country-btn"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={menuOpen}
                        aria-controls="phone-country-list"
                        aria-label={`Country code, ${selectedCountry.name} ${selectedCountry.dial}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (menuOpen) closeMenu();
                          else openMenu();
                        }}
                      >
                        <Image
                          className={styles.phoneFlag}
                          id="phone-flag"
                          src={flagSrc(selectedCountry.iso)}
                          alt=""
                          width={20}
                          height={15}
                          unoptimized
                        />
                        <span className="phone-dial" id="phone-dial">
                          {selectedCountry.dial}
                        </span>
                        <span
                          className={styles.phoneCaret}
                          aria-hidden="true"
                        ></span>
                      </button>

                      <input
                        type="hidden"
                        name="country_code"
                        id="country-code"
                        value={selectedCountry.dial}
                        readOnly
                      />

                      <input
                        className="form-control"
                        id="phone-number"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        placeholder="98765 43210"
                        autoComplete="tel-national"
                        required
                      />

                      <div
                        className={styles.phoneCountryMenu}
                        id="phone-country-menu"
                        hidden={!menuOpen}
                      >
                        <ul
                          className={styles.phoneCountryList}
                          id="phone-country-list"
                          role="listbox"
                          aria-label="Country codes"
                          ref={listRef}
                        >
                          {menuOpen &&
                            phoneCountries.map((country, index) => (
                              <li key={country.iso}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={country.iso === selectedIso}
                                  className={`phone-country-option${
                                    index === activeIndex
                                      ? " styles.isActive"
                                      : ""
                                  }`}
                                  onClick={() => selectCountry(country)}
                                  onMouseEnter={() => setActiveIndex(index)}
                                >
                                  <Image
                                    className="phone-flag"
                                    src={flagSrc(country.iso)}
                                    alt=""
                                    width={20}
                                    height={15}
                                    unoptimized
                                  />
                                  <span className={styles.phoneCountryame}>
                                    {country.name}
                                  </span>
                                  <span className={styles.phoneCountryCode}>
                                    {country.dial}
                                  </span>
                                </button>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className={styles.formLabel} htmlFor="company-name">
                      Company Name
                    </label>
                    <input
                      className="form-control"
                      id="company-name"
                      name="company_name"
                      type="text"
                      placeholder="Your company name"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="mb-3">
                    <label className={styles.formLabel} htmlFor="user-count">
                      Number of Users
                    </label>
                    <select
                      className="form-select"
                      id="user-count"
                      name="number_of_users"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select number of users
                      </option>
                      {userCounts.map((item) => (
                        <option value={item.value} key={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className={styles.submitBtn} type="submit">
                    Get Started{" "}
                    <span aria-hidden="true">
                      <GoArrowRight />
                    </span>
                  </button>
                </form>

                <Image
                  className={styles.workspaceCharacter}
                  src={Mascot01}
                  alt="Tizzy Cloud mascot"
                  aria-hidden="true"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Google Workspace apps */}
          <div className="mobile-md-none">
            <nav
              className={styles.workspaceApps}
              id="workspace-apps"
              aria-label="Google Workspace apps"
            >
              {workspaceApps.map((app) => (
                <a
                  className={styles.workspaceApp}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={app.name}
                >
                  <Image
                    src={app.src}
                    alt={`${app.name} icon`}
                    width={40}
                    height={40}
                  />
                  <span>{app.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

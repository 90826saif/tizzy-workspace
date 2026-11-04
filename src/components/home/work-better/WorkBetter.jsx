"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/components/home/work-better/WorkBetter.module.css";
import { FaArrowRight } from "react-icons/fa";
import GmailImg from "@/assets/images/Gmail-img.jpg";
import GmailIcon from "@/assets/images/workspace-tools/gmail.svg";
import Image from "next/image";
import calendarImg from "@/assets/images/calendar-img.jpg";
import calendarIcon from "@/assets/images/workspace-tools/calendar.svg";
import docsImg from "@/assets/images/docs-img.jpg";
import docIcon from "@/assets/images/workspace-tools/docs.svg";
import DriveImg from "@/assets/images/Drive-img.jpg";
import DriveIcon from "@/assets/images/workspace-tools/drive.svg";
import MeetImg from "@/assets/images/Meet-img.jpg";
import MeetIcon from "@/assets/images/workspace-tools/meet.svg";
import GeminiImg from "@/assets/images/Gemini-img.jpg";
import GeminiIcon from "@/assets/images/workspace-tools/gemini.png";
import securityStayArt from "@/assets/images/security-stay-art.png";

const cards = [
  {
    visual: GmailImg,
    icon: GmailIcon,
    brand: "Gmail",
    title: "Professional Email for Your Business",
    text: "World-class spam blocking, 99.9% SLA uptime, 30GB to 5TB storage per mailbox, and instant search across millions of messages.",
  },
  {
    visual: calendarImg,
    icon: calendarIcon,
    brand: "Calendar",
    title: "Plan Your Work, Stay on Schedule",
    text: "Manage meetings, events, and deadlines in one place. Keep your team aligned with shared calendars, smart scheduling, and timely reminders.",
  },
  {
    visual: docsImg,
    icon: docIcon,
    brand: "Docs",
    title: "Create, Edit & Collaborate Effortlessly",
    text: "Create professional documents, edit them in real time, and collaborate with your team from anywhere. Keep your work organized and always.",
  },
  {
    visual: DriveImg,
    icon: DriveIcon,
    brand: "Drive",
    title: "Store, Share & Access Files Anywhere",
    text: "Securely store your business files in the cloud, collaborate with your team in real time, and access important documents from anywhere.",
  },
  {
    visual: MeetImg,
    icon: MeetIcon,
    brand: "Meet",
    title: "Connect Your Team From Anywhere",
    text: "Host secure video meetings, collaborate in real time, and stay connected with your team wherever work takes you.",
  },
  {
    visual: GeminiImg,
    icon: GeminiIcon,
    brand: "Gemini",
    title: "Work Smarter With AI-Powered Assistance",
    text: "Create content, find insights, summarize information, and get everyday tasks done faster with AI built into your Google Workspace.",
  },
];

const WorkBetter = () => {
  const swiperEl = useRef(null);
  const nextEl = useRef(null);

  useEffect(() => {
    if (!swiperEl.current) return;

    const swiper = new Swiper(swiperEl.current, {
      modules: [Autoplay, Navigation],
      slidesPerView: 4.3,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        reverseDirection: true,
      },
      navigation: {
        nextEl: nextEl.current,
      },
      breakpoints: {
        576: { slidesPerView: 1, spaceBetween: 0 },
        600: { slidesPerView: 2.3, spaceBetween: 10 },
        800: { slidesPerView: 2.3, spaceBetween: 20 },
        1280: { slidesPerView: 3.3, spaceBetween: 30 },
        1480: { slidesPerView: 3.3, spaceBetween: 30 },
        1600: { slidesPerView: 4.3 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <>
      <section
        className={`${styles.workBetter} section-spacing`}
        id="product-demo"
        aria-labelledby="work-better-title"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-title" id="work-better-title">
                <span className="color-000000">
                  Everything Your Team Needs to{" "}
                </span>
                <br />
                <span className="color-0355AC">Work Better</span>
              </h2>
              <p className="small-text">
                The complete cloud productivity suite, pre-configured, hardened,
                and continuously supported by Tizzy Cloud.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.containerStage}>
          <div
            className={`${styles.workCardSwiper} swiper-container swiper`}
            ref={swiperEl}
          >
            <div className="swiper-wrapper">
              {cards.map((card) => (
                <div className="swiper-slide" key={card.title}>
                  <div className={styles.workCard}>
                    <div className={styles.workCardVisual}>
                      <Image
                        className="work-scene-logo"
                        src={card.visual}
                        alt={card.title}
                      />
                    </div>
                    <div className={styles.workCardBody}>
                      <div className={styles.workCardBrand}>
                        <Image src={card.icon} alt={card.brand} />
                        <span>{card.brand}</span>
                      </div>
                      <h3 className={styles.workCardTitle}>{card.title}</h3>
                      <p className={styles.workCardText}>{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-button-nav">
              <div
                className={`${styles.swiperButtonNext} swiper-button-next`}
                ref={nextEl}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.securityStay} section-spacing position-relative counters-section`}
        aria-labelledby="security-stay-title"
      >
        <div className={styles.securityStayBanner}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className={styles.securityStayContent}>
                  <span className={styles.securityStayKicker}>
                    Enterprise-grade security
                  </span>
                  <h2
                    className={styles.securityStayTitle}
                    id="security-stay-title"
                  >
                    Your work stays yours. <span>Always.</span>
                  </h2>
                  <p className={styles.securityStayText}>
                    Google Workspace is secure by design, with industry-leading
                    protections, privacy controls, and intelligent threat
                    detection built in.
                  </p>
                  <a className={styles.workspaceAction} href="#consultation-form">
                    Explore Security{" "}
                   <FaArrowRight />
                  </a>
                  <div className={`${styles.securityStayStats} row`}>
                    <div className="col-4">
                      <strong>99.9%</strong>
                      <span>uptime SLA</span>
                    </div>
                    <div className="col-4">
                      <strong>2-4 Hrs</strong>
                      <span>Fast Set up</span>
                    </div>
                    <div className="col-4">
                      <strong>24/7</strong>
                      <span>threat monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.securityStayArt} aria-hidden="true">
                  <Image
                    src={securityStayArt}
                    alt="Your work stays yours. Always."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkBetter;

"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import styles from "@/components/home/team-need/TeamNeed.module.css";

import gmail from "@/assets/images/workspace-tools/gmail.svg";
import meet from "@/assets/images/workspace-tools/meet.svg";
import chat from "@/assets/images/workspace-tools/chat.svg";
import docs from "@/assets/images/workspace-tools/docs.svg";
import sheets from "@/assets/images/workspace-tools/sheets.svg";
import slides from "@/assets/images/workspace-tools/slides.svg";
import drive from "@/assets/images/workspace-tools/drive.svg";
import calendar from "@/assets/images/workspace-tools/calendar.svg";
import gemini from "@/assets/images/workspace-tools/gemini.png";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import { FiShield, FiUsers } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";

const teamTabs = [
  {
    id: "communication",
    title: "Communication",
    badge: "Gmail · Meet · Chat",
    heading: "Stay connected, professionally",
    description:
      "Gmail gives you a professional email address on your domain. Meet makes video calls effortless. Chat keeps async communication organized — all in one place.",
    features: [
      "Professional email on your own business domain with Gmail.",
      "Connect with your team through Meet and Chat from anywhere.",
      "Keep emails, meetings, and conversations organized in one workspace.",
    ],
    images: [
      { src: gmail, alt: "Gmail" },
      { src: meet, alt: "Meet" },
      { src: chat, alt: "Chat" },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration",
    badge: "Docs + Sheets + Slides + Drive",
    heading: "Create together, in real time",
    description:
      "Docs, Sheets and Slides let your team edit simultaneously. Drive keeps everything organized and accessible from any device, anywhere.",
    features: [
      "Create and edit documents together in real time.",
      "Store and organize your files securely with Google Drive.",
      "Access your work anytime and collaborate from anywhere.",
    ],
    images: [
      { src: docs, alt: "Docs" },
      { src: sheets, alt: "Sheets" },
      { src: slides, alt: "Slides" },
      { src: drive, alt: "Drive" },
    ],
  },
  {
    id: "administration",
    title: "Administration",
    badge: "Calendar",
    heading: "Full control over your Workspace",
    description:
      "The Admin console gives you complete visibility and control over users, security policies, devices and data — managed by Tizzy Cloud on your behalf.",
    features: [
      "Manage users, access, and permissions from one place.",
      "Monitor security settings and connected devices with ease.",
      "Keep your Workspace environment organized, secure, and under control.",
    ],
    images: [{ src: calendar, alt: "Calendar" }],
  },
  {
    id: "ai-productivity",
    title: "AI Productivity",
    badge: "Calendar",
    heading: "Work smarter with Gemini AI",
    description:
      "Gemini AI is integrated across Gmail, Docs, Sheets and Meet — helping you draft emails, summarize documents, analyze data and generate insights faster.",
    features: [
      "Draft emails, documents, and content faster with AI assistance.",
      "Summarize conversations, documents, and key information in seconds.",
      "Analyze data and generate useful insights to work more efficiently.",
    ],
    images: [{ src: gemini, alt: "Gemini" }],
  },
];

const managedBusiness = [
  {
    icon: IoSettingsOutline,
    title: "Easy Setup",
    description:
      "Get your business domain, professional email, users, and Workspace applications configured smoothly from the start.",
    tags: ["Quick onboarding", "Expert configuration"],
  },
  {
    icon: LiaLaptopSolid,
    title: "Work From Anywhere",
    description:
      "Access your emails, files, and workspace tools from anywhere, on any device. Stay connected and keep your team productive wherever work takes you.",
    tags: ["Any device", "Stay productive"],
  },
  {
    icon: IoMailOutline,
    title: "Professional Business Email",
    description:
      "Create branded email addresses using your own business domain and give your team a professional, consistent way to communicate with customers.",
    tags: ["Custom domain", "Branded email", "Professional communication"],
    accent: true,
  },
  {
    icon: FiShield,
    title: "Secure & Easy Management",
    description:
      "Manage users, permissions, devices, and access while using Google Workspace's built-in security and administration tools.",
    tags: ["User control", "Access management", "Data protection"],
    accent: true,
  },
  {
    icon: FiUsers,
    title: "Real-Time Collaboration",
    description:
      "Work together across Gmail, Drive, Docs, Sheets, Meet, and more with seamless real-time collaboration from anywhere.",
    tags: ["Team collaboration", "Shared files", "Real-time editing"],
  },
  {
    icon: MdOutlineHeadsetMic,
    title: "Dedicated Expert Support",
    description:
      "Get dedicated expert support throughout your Google Workspace journey from initial setup and data migration to billing, account management, troubleshooting, and ongoing assistance so your team can stay productive.",
    tags: ["Setup support", "Technical assistance", "Ongoing guidance"],
  },
];

const TeamNeed = () => {
  return (
    <>
      <section
        className={`${styles.teamNeeds} section-spacing`}
        id="features"
        aria-labelledby="team-needs-title"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-title" id="team-needs-title">
                <span className="color-000000">
                  One Workspace. Every Tool Your
                </span>
                <br />
                <span className="color-0355AC">Team Needs</span>
              </h2>

              <p className="small-text">
                Click below to explore the full Google Workspace product
                experience.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ul
                className={`${styles.teamTabs} ${styles.navPills} nav justify-content-center flex-wrap gap-2`}
                role="tablist"
              >
                {teamTabs.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      className={`nav-link ${styles.navLink} ${
                        index === 0 ? "active" : ""
                      }`}
                      id={`${tab.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.id}-pane`}
                      type="button"
                      role="tab"
                      aria-controls={`${tab.id}-pane`}
                      aria-selected={index === 0}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-xl-9">
              <div className={styles.teamWindow}>
                <div className={styles.teamWindowBar}>
                  <span className={styles.teamDots} aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>

                  <span className={styles.teamUrl}>workspace.google.com</span>
                </div>

                <div className="tab-content">
                  {teamTabs.map((tab, index) => (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`${tab.id}-pane`}
                      role="tabpanel"
                      aria-labelledby={`${tab.id}-tab`}
                      tabIndex="0"
                      key={tab.id}
                    >
                      <div className={styles.teamWindowBody}>
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="team-window-content">
                              <span className="plan-card-badge">
                                {tab.badge}
                              </span>

                              <h3 className={styles.teamWindowTitle}>
                                {tab.heading}
                              </h3>

                              <p className={styles.teamWindowText}>
                                {tab.description}
                              </p>

                              <ul className="plan-card-features">
                                {tab.features.map((feature, featureIndex) => (
                                  <li key={featureIndex}>
                                    <i data-lucide="check" aria-hidden="true" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className={`${styles.toolRow} row`}>
                              {tab.images.map((image, imageIndex) => (
                                <div className="col-6" key={imageIndex}>
                                  <div className={styles.toolTile}>
                                    <Image src={image.src} alt={image.alt} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="managed-business section-spacing"
        id="why-tizzy"
        aria-labelledby="managed-business-title"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-title" id="managed-business-title">
                <span className="color-000000">
                  Google Workspace, Managed for
                </span>
                <br />
                <span className="color-0355AC">Your Business</span>
              </h2>

              <p className="small-text">
                We handle the technical complexity so you can focus on running
                your business.
              </p>
            </div>
          </div>

          <div className={styles.manageGrid}>
            {managedBusiness.map((item, index) => (
              <article
                className={`${styles.manageCard} ${
                  item.accent ? styles.manageCardAccent : ""
                }`}
                key={index}
              >
                <span className={styles.manageCardIcon} aria-hidden="true">
                  <item.icon />
                </span>

                <h3 className={styles.manageCardTitle}>{item.title}</h3>

                <p className={styles.manageCardText}>{item.description}</p>

                <div className={styles.manageCardTags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamNeed;

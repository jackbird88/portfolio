"use client"

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import styles from "../../../styles/Experience.module.css";
import { projectData } from '../../projects/[id]/page';

export const experienceData = {
  "rbc-royal-bank": {
    name: "RBC Royal Bank",
    role: "Capstone Project Lead",
    years: "Sep 2023 - Apr 2024 · 8 mos",
    overview:
      "Led the design and development of a predictive machine learning model, utilizing advanced statistical algorithms to forecast revenue based on weather data.",
    achievements: [
      "Improved revenue prediction accuracy by 5-12% compared to Bloomberg's existing model, providing actionable insights that influenced decision-making for the upcoming quarter.",
      "Collaborated with cross-functional teams to integrate weather variables into revenue prediction models and present findings to key stakeholders at RBC.",
      "Applied Python, MongoDB, Node.js, Express.js, and React for data manipulation, model development, and visualization, delivering a robust predictive tool.",
    ],
    courses: [],
  },
  "pet-valu": {
    name: "Pet Valu",
    role: "Information Technology Intern",
    years: "May 2022 - Aug 2022 · 4 mos",
    overview:
      "Provided technical support by troubleshooting system issues and maintaining operational efficiency, resulting in increased system uptime.",
    achievements: [
      "Automated advanced Excel-based reporting processes, enabling more efficient data analysis and informed decision-making for the leadership team.",
      "Managed IT service requests via Freshservice and provided network support, reducing response times and improving connectivity across corporate and franchise locations.",
    ],
    courses: [],
  },
  "deer-creek": {
    name: "Deer Creek Practice and Performance",
    role: "Freelance Software Developer",
    years: "Jan 2024 - Nov 2024 · 11 mos",
    overview:
      "As a freelance software developer, I led the development of a golf cart management system designed for real-time tracking of golf carts moving in and out of the pro shop. This project required a comprehensive approach, from initial design to deployment, using modern technologies to deliver a seamless user experience.",
    achievements: [
      "Custom Software Development: Developed the real-time tracking system using React, Node.js, and MongoDB, enabling efficient updates and data management for golf cart usage.",
      "Technical Support & Troubleshooting: Provided ongoing technical support and implemented robust troubleshooting processes to ensure system reliability and high uptime.",
      "Documentation & Design: Created clear documentation and system architecture diagrams to aid client understanding and facilitate future maintenance and scalability.",
    ],
    courses: [],
  },
  "western": {
    name: "Western University",
    role: "Bacholors of Engineering Science in Software Engineering Graduate",
    years: "2020 - 2024",
    overview:
      "Completed a rigorous academic program in software engineering with a focus on machine learning, artificial intelligence, and sustainable development. Recognized with multiple honors and awards for academic excellence and professional development.",
    achievements: [
      "Dean's Honour List: Attained an average of 80% across all courses without any failures in multiple academic years.",
      "The Ritual of the Calling of an Engineer: Participated in a prestigious ceremony signifying the transition from engineering student to professional engineer, earning the Iron Ring as a symbol of ethical responsibility.",
      "Western Admission Scholarship: Awarded to students with a final admission average between 90% and 91.9%.",
    ],
    courses: [
      "Algorithms and Data Structures (SE2205A)",
      "Artificial Intelligence 2 (COMPSCI 4442B)",
      "Artificial Intelligence 1 (COMPSCI 3346A)",
      "Business For Engineers (BUS1299E)",
      "Cloud Computing (SE4455B)",
      "Database Management Systems (SE3309A)",
      "Engineering Ethics, Sustainable Development and the Law (ELI4110G)",
      "Game Design (COMPSCI 4483B)",
      "Information Security (SE4472A)",
      "Introduction to Machine Learning (DATASCI 3000A)",
      "Software Requirements and Analysis (SE3352A)",
      "Web Technologies (SE3316A)",
    ],
  },
};

export default function ExperienceDetails() {


  const [menuOpen, setMenuOpen] = useState(false);
  const [projectSubmenuOpen, setProjectSubmenuOpen] = useState(false);
  const [experienceSubmenuOpen, setExperienceSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleProjectSubmenuToggle = (open: boolean) => {
    setProjectSubmenuOpen(open);
  };

  const handleExperienceSubmenuToggle = (open: boolean) => {
    setExperienceSubmenuOpen(open);
  };

  type ProjectKeys = keyof typeof projectData;
  type ExperienceKeys = keyof typeof experienceData;
  const { id } = useParams();
  const experience = experienceData[id as keyof typeof experienceData];

  if (!experience) {
    return (
      <div className={styles.error}>
        <h1>Experience Not Found</h1>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
<header className={styles.header}>
<nav className={styles.navBar}>
<Link href="/" passHref>
      <div className={styles.navLogo}>JB</div>
    </Link>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link href="/about">About</Link>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleProjectSubmenuToggle(true)}
            onMouseLeave={() => handleProjectSubmenuToggle(false)}
          >
            Projects
            {projectSubmenuOpen && (
              <div className={styles.subMenu}>
                {Object.keys(projectData).map((key) => (
                  <Link
                    key={key}
                    href={`/projects/${key}`}
                    className={styles.subMenuLink}
                  >
                    {projectData[key as ProjectKeys].title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className={styles.menuItem}
            onMouseEnter={() => handleExperienceSubmenuToggle(true)}
            onMouseLeave={() => handleExperienceSubmenuToggle(false)}
          >
            Experiences
            {experienceSubmenuOpen && (
              <div className={styles.experiencesSubMenu}>
                {Object.keys(experienceData).map((key) => (
                  <Link
                    key={key}
                    href={`/experience/${key}`}
                    className={styles.subMenuLink}
                  >
                    {experienceData[key as ExperienceKeys].name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.companyName}>{experience.name}</h1>
        <h2 className={styles.role}>{experience.role}</h2>
        <p className={styles.years}>{experience.years}</p>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Overview</h3>
          <p className={styles.sectionContent}>{experience.overview}</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Key Achievements</h3>
          <ul className={styles.achievementList}>
            {experience.achievements.map((achievement, index) => (
              <li key={index} className={styles.achievementItem}>
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        {experience.courses && experience.courses.length > 0 && (
  <section className={styles.section}>
    <h3 className={styles.sectionTitle}>Courses</h3>
    <ul className={styles.coursesList}>
      {experience.courses.map((course, index) => (
        <li key={index} className={styles.courseItem}>
          {course}
        </li>
      ))}
    </ul>
  </section>
)}

        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </main>
    </div>
  );
}

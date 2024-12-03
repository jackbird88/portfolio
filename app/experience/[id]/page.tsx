"use client"

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import styles from "../../../styles/Experience.module.css";
import { projectData } from '../../data/projectData';
import { experienceData } from "../../data/experienceData";

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
          {experienceData[key as keyof typeof experienceData].name}
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

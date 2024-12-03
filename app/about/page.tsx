'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import styles from '../../styles/AboutPage.module.css'
import { projectData } from '../data/projectData';
import { experienceData } from '../data/experienceData';

export default function AboutPage() {

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

      

      <main className={styles.mainContent}>
        {/* Hero Section */}
<section className={`${styles.heroSection} fade-in`}>
    <div className={styles.overlay}></div>
    <div className={styles.contentContainer}>
        <div className={`${styles.heroTextContainer} slide-in`}>
            <h1 className={styles.heroTitle}>
                meaningful <span className={styles.questionHighlight}>&ldquo;</span>solutions<span className={styles.questionHighlight}>&rdquo;</span> aren&apos;t always easy to create.
            </h1>
            <p className={`${styles.heroSubtitle} fade-in`}>but with dedication and collaboration, they become possible.</p>
        </div>
    </div>
</section>

<section className={`${styles.bioSection} fade-in`}>
    <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.bioImageContainer} zoom-in`}
    >
        <div className={`${styles.imageHighlight} pulsate`}></div>
        <Image src="/images/aboutPageImage.jpg" alt="Speaker" width={500} height={600} className={styles.bioImage} />
    </motion.div>
    <div className={styles.bioContent}>
        <h2 className={styles.bioTitle}>
            so who am I<span className={styles.questionHighlight}>?</span>
        </h2>
        <p className={`${styles.bioText} slide-in`}>
        I am a <span className={styles.highlight}>software engineer</span> with a strong passion for continuous learning and 
        solving complex problems. Throughout my career, I have had the privilege of 
        contributing to <span className={styles.highlight}>challenging projects</span> that fostered growth and collaboration with 
        dedicated teams focused on delivering <span className={styles.highlight}>impactful solutions</span>. I prioritize active listening, 
        adaptability, and teamwork to drive <span className={styles.highlight}>success</span> and create meaningful outcomes.
        </p>
        <p className={styles.bioHighlight}>
        I look forward to applying my skills and experiences to tackle new challenges and deliver exceptional results. 
        Let’s work together to build something remarkable.
        </p>
    </div>
</section>

<section className={`${styles.additionalContentSection} fade-in`}>
    <div className={`${styles.additionalContent} slide-in`}>
        <h2 className={styles.additionalTitle}>what drives me<span className={styles.questionHighlight}>?</span></h2>
        <p className={styles.additionalText}>
        What drives me is a strong passion for creating meaningful solutions through technology. 
        I thrive on tackling complex challenges, learning from them, and transforming them into 
        opportunities for growth. Working with innovative teams and bringing together diverse 
        perspectives sparks my creativity, enabling me to develop software that 
        truly makes a difference for users and elevates their experiences.
        </p>
    </div>
</section>
      </main>
    </div>
  )
}

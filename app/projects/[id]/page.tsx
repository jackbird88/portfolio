"use client";

import { useParams } from "next/navigation";
import Link from "next/link"
import Image from 'next/image';
import { useState } from 'react';
import styles from "../../../styles/[id].module.css";
import { experienceData } from '..//../data/experienceData';
import { projectData } from '..//../data/projectData';

const ProjectDetails: React.FC = () => {

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
  
  const params = useParams();
  const { id } = params as { id: string };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className={styles.error}>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
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
  <div className={styles.projectCard}>
    <Image src={project.image} alt={project.title} width={600} height={800} className={styles.projectImage} />
    <div className={styles.projectInfo}>
      <span className={styles.year}>{project.year}</span>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
    </div>

    <div className={styles.detailsSection}>
      <h2 className={styles.sectionTitle}>Details</h2>
      <div className={styles.details}>
        {project.details.map((detail, index) => (
          <p key={index} className={detail.startsWith("-") ? styles.bulletPoint : styles.paragraph}>
            {detail}
          </p>
        ))}
      </div>
    </div>

    <div className={styles.techSection}>
      <h2 className={styles.sectionTitle}>Tech Stack</h2>
      <div className={styles.techStack}>
        {project.techStack.map((tech, index) => (
          <span key={index} className={styles.techItem}>
            {tech}
          </span>
        ))}
      </div>
    </div>

    {project.link && (
  <div className={styles.projectLink}>
    {project.embedPdf ? (
      <iframe
        src={project.link}
        className={styles.pdfViewer}
        title={`${project.title} Documentation`}
      ></iframe>
    ) : (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.documentationLink} // Add this class
      >
        View Documentation
      </a>
    )}
  </div>
)}
  </div>
</div>
  );
};

export default ProjectDetails;

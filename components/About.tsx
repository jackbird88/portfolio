"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.container} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.header}>get to know me</h1>
        <p className={styles.subHeader}>
          Software engineer with a passion for crafting <span className={styles.underlineHighlight}>impactful</span>, human-centered digital solutions. Exciting, right?
        </p>
        <p className={styles.description}>
          Since I was young, I wanted to be an <span className={styles.underlineHighlight}>engineer</span>, starting with building Lego creations like a working vending machine. High school computer science classes solidified that passion, leading me to pursue <span className={styles.underlineHighlight}>software engineering</span>.
        </p>
        <p className={styles.description}>
          These experiences taught me that with imagination, determination, and the right tools, I could bring ideas to life and solve <span className={styles.underlineHighlight}>real-world challenges</span> through technology.
        </p>
        <a href="#about" className={styles.link}>MORE ABOUT ME</a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/aboutMe.jpg" /* Replace this with your image path */
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default About;

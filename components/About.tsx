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
        I’m a <span className={styles.underlineHighlight}>software engineer</span> driven by a passion for creating digital <span className={styles.underlineHighlight}>solutions</span> that make a meaningful impact. Exciting, right?
        </p>
        <p className={styles.description}>
        From building intricate Lego creations as a kid—like a working vending machine—to discovering my <span className={styles.underlineHighlight}>love</span> for programming in high school computer science classes, my journey has always been about bringing <span className={styles.underlineHighlight}>ideas to life</span>.
        </p>
        <p className={styles.description}>
        These experiences taught me that with creativity, persistence, and the right tools, it’s possible to turn <span className={styles.underlineHighlight}>innovative ideas</span> into solutions that <span className={styles.underlineHighlight}>solve real-world problems</span>.
        </p>
        <a href="/about" className={styles.link}>MORE ABOUT ME</a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/aboutMe.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
      </div>
    </section>
  );
};

export default About;

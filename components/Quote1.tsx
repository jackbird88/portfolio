"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Quote.module.css";

const Quote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement | null>(null);

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

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={quoteRef}
      className={`${styles.quoteContainer} ${
        isVisible ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <p className={styles.quoteText}>
        "In the world of <span className={styles.highlight}>software</span>, the
        best way to predict the <span className={styles.highlight}>future</span>{" "}
        is to <span className={styles.highlight}>invent it</span>." - Dr. Alan
        Kay
      </p>
    </section>
  );
};

export default Quote;

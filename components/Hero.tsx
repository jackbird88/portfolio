'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  useEffect(() => {
    // Additional client-side logic if needed
  }, []);

  return (
    <motion.section 
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

    <nav className={styles.navBar}>
      <div className={styles.navLogo}>JB</div>
      <div className={styles.hamburgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
      <motion.div
        className={styles.gridContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.introText}>
            <h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                hi,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                I&apos;m Jack
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              I will help you build the most impactful projects of your career.
            </motion.p>
          </div>
          <motion.div
            className={styles.curvedArrowContainer}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 400 100"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.curvedArrow}
            >
              <defs>
                <filter id="arrowShadow" x="-20%" y="-20%" width="150%" height="150%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
                </filter>
              </defs>
              <path
                d="M10 80 C 100 10, 250 10, 390 70"
                stroke="#e1ff1a"
                strokeWidth="4"
                fill="none"
              />
              <polygon
                points="380,50 400,80 370,80"
                fill="#e1ff1a"
              />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/images/myself.jpg?height=800&width=600"
            alt="Hero Photo"
            className={styles.heroImage}
            width={600}
            height={800}
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.trustedByContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className={styles.trustedByBox}>
          Trusted By
        </div>
        <div className={styles.logoGrid}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/experience/rbc-royal-bank">
            <Image
              src="/images/RBC-Logo.png"
              alt="RBC Logo"
              className={`${styles.logo} ${styles.rbcLogo}`}
              width={160}
              height={120}
              priority
            />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/experience/pet-valu">
            <Image
              src="/images/petvalu-logo.png"
              alt="PetValu Logo"
              className={`${styles.logo} ${styles.petValuLogo}`}
              width={160}
              height={120}
              priority
            />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/experience/deer-creek">
            <Image
              src="/images/deercreek-logo.png"
              alt="Deer Creek Logo"
              className={`${styles.logo} ${styles.deerCreekLogo}`}
              width={400}
              height={400}
              priority
            />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/experience/western">
            <Image
              src="/images/western-logo.png"
              alt="Western Logo"
              className={`${styles.logo} ${styles.westernLogo}`}
              width={200}
              height={200}
              priority
            />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

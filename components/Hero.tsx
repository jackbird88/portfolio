import React from 'react'
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
            <h1>
                Hi, my name is <span className={styles.highlight}>Jack</span>
            </h1>
            <p>
                Welcome to my portfolio. I am a software engineer passionate about
                creating mordern web application and exploring innovative technologies.
            </p>
        </div>
        <div className={styles.imageContainer}>
            <Image
            src = "/images/Myself.jpg"
            alt = "Jack's portrait"
            width = {400}
            height = {500}
            className={styles.image}
            />
        </div>

    </section>
  )
}

export default Hero
'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/AboutPage.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <Link href="#" className={styles.navLogo}>JB</Link>
          <div className={styles.hamburgerMenu}>
            <span></span>
            <span></span>
            <span></span>
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
                Meaningful <span className={styles.questionHighlight}>&ldquo;</span>solutions<span className={styles.questionHighlight}>&rdquo;</span> aren&apos;t always easy to create.
            </h1>
            <p className={`${styles.heroSubtitle} fade-in`}>But with dedication and collaboration, they become possible.</p>
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
            So who am I<span className={styles.questionHighlight}>?</span>
        </h2>
        <p className={`${styles.bioText} slide-in`}>
            I’m a <span className={styles.highlight}>software engineer</span> who has always been passionate about 
            <span className={styles.highlight}> learning</span> and <span className={styles.highlight}>problem-solving</span>.
            Throughout my journey, I’ve had the privilege of working on <span className={styles.highlight}>projects</span> that 
            challenged me and allowed me to grow, collaborating with <span className={styles.highlight}>teams</span> and 
            individuals who shared a drive for creating <span className={styles.highlight}>meaningful work</span>.
            I understand the importance of <span className={styles.highlight}>listening</span>, adapting, and bringing out 
            the best in a team to develop solutions that make a difference.
        </p>
        <p className={styles.bioHighlight}>
            I’m excited to share what I’ve learned and contribute my skills to new 
            challenges. Now that you’re here, let’s build something great together.
        </p>
    </div>
</section>

<section className={`${styles.additionalContentSection} fade-in`}>
    <div className={`${styles.additionalContent} slide-in`}>
        <h2 className={styles.additionalTitle}>What Drives Me<span className={styles.questionHighlight}>?</span></h2>
        <p className={styles.additionalText}>
            My drive comes from a deep passion for building meaningful solutions through technology. 
            I find energy in tackling complex challenges, learning from them, and turning them into 
            opportunities. Collaborating with innovative teams and bringing together diverse ideas 
            fuels my creativity, allowing me to develop software that truly makes a difference for users 
            and enhances their experiences.
        </p>
    </div>
</section>
      </main>
    </div>
  )
}

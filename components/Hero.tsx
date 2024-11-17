import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.textContainer}>
          <div className={styles.introText}>
            <h1>
              hi,
              <br />
              I&apos;m Jack
            </h1>
            <p>
              I will help you build the most impactful projects of your career.
            </p>
          </div>
          <div className={styles.curvedArrowContainer}>
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
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/myself.jpg?height=800&width=600"
            alt="Hero Photo"
            className={styles.heroImage}
            width={600}
            height={800}
            priority
          />
        </div>
      </div>
      <div className={styles.trustedByContainer}>
        <div className={styles.logoGrid}>
          <Image
            src="/images/RBC-Logo.png"
            alt="RBC Logo"
            className={`${styles.logo} ${styles.rbcLogo}`}
            width={160}
            height={120}
            priority
          />
          <Image
            src="/images/petvalu-logo.png"
            alt="PetValu Logo"
            className={`${styles.logo} ${styles.petValuLogo}`}
            width={160}
            height={120}
            priority
          />
          <Image
            src="/images/deercreek-logo.png"
            alt="Deer Creek Logo"
            className={`${styles.logo} ${styles.deerCreekLogo}`}
            width={400}
            height={400}
            priority
          />
          <Image
            src="/images/western-logo.png"
            alt="Western Logo"
            className={`${styles.logo} ${styles.westernLogo}`}
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client"

import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "../../../styles/Experience.module.css";

const experienceData = {
  "rbc-royal-bank": {
    name: "RBC Royal Bank",
    role: "Software Developer",
    years: "2019 - 2021",
    overview:
      "Led the development of innovative banking solutions, improving customer experience and operational efficiency.",
    achievements: [
      "Developed a new mobile banking feature that increased user engagement by 30%.",
      "Optimized backend processes, reducing transaction times by 25%.",
      "Collaborated with cross-functional teams to implement robust security measures.",
    ],
  },
  "pet-valu": {
    name: "Pet Valu",
    role: "Software Engineer",
    years: "2021 - 2023",
    overview:
      "Built scalable e-commerce solutions, enhancing the shopping experience for pet lovers across Canada.",
    achievements: [
      "Implemented a real-time inventory tracking system across 200+ stores.",
      "Improved website performance, resulting in a 40% increase in conversions.",
      "Integrated third-party APIs for seamless payment processing.",
    ],
  },
  "deer-creek": {
    name: "Deer Creek Golf Club",
    role: "Operations Consultant",
    years: "2018 - 2019",
    overview:
      "Streamlined operational processes for a premier golf club, improving efficiency and customer satisfaction.",
    achievements: [
      "Optimized scheduling for tournaments and events, increasing revenue by 20%.",
      "Introduced new customer management tools to enhance the guest experience.",
      "Led cross-departmental training to improve team collaboration.",
    ],
  },
  "western": {
    name: "Western University",
    role: "Research Assistant",
    years: "2017 - 2018",
    overview:
      "Conducted advanced research in data science and machine learning as part of academic projects.",
    achievements: [
      "Published findings in a peer-reviewed journal on predictive modeling.",
      "Developed machine learning algorithms to analyze large datasets.",
      "Collaborated with professors and peers to present research findings at conferences.",
    ],
  },
};

export default function ExperienceDetails() {
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
          <Link href="/" className={styles.navLogo}>JB</Link>
          <div className={styles.hamburgerMenu}>
            <span></span>
            <span></span>
            <span></span>
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

        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </main>
    </div>
  );
}

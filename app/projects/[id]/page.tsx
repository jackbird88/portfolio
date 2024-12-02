"use client";

import { useParams } from "next/navigation";
import Link from "next/link"
import { useState } from 'react';
import styles from "../../../styles/[id].module.css";
import { experienceData } from '..//../experience/[id]/page';

export const projectData = {
  "rbc-capstone": {
    title: "RBC Capstone Project",
    description:
      "The RBC Capstone Project is an advanced platform designed to forecast quarterly revenue fluctuations caused by extreme weather events. This solution empowers financial teams to make informed decisions by providing actionable insights through data analytics, machine learning, and weather pattern prediction.",
    techStack: ["Python", "MongoDB", "React", "Node.js"],
    year: "2024",
    details: [
      "The RBC Capstone Project integrates state-of-the-art machine learning algorithms and real-time weather data to analyze and predict potential financial impacts of extreme weather conditions on quarterly revenues.",
      "Key Features:",
      "- Predictive Analytics: Accurately forecasts revenue trends based on historical and real-time weather data.",
      "- Interactive Dashboard: Offers an intuitive user interface built with React, allowing users to explore data visualizations and projections easily.",
      "- Robust Backend: Built with Node.js and MongoDB for secure data storage and fast performance.",
      "- Scalable Architecture: Designed to handle large datasets and expand to additional use cases in the future, such as disaster recovery planning or supply chain optimization.",
      "The project uses machine learning models trained on diverse datasets, including historical financial data, meteorological reports, and economic variables, to deliver high-accuracy predictions.",
      "Through this system, RBC's financial team can proactively strategize and mitigate risks caused by unpredictable weather events, driving operational efficiency and minimizing revenue losses.",
    ],
    image: "/images/RBC_project.png",
    link: null,
  },
"golf-cart-management": {
  title: "Golf Cart Management System",
  description:
    "A tailored web app designed to update the pro shop in real time about golf cart availability, streamlining operations and enhancing communication.",
  techStack: ["JavaScript", "React", "Node.js", "MongoDB"],
  year: "2023",
  details: [
    "The Golf Cart Management System ensures smooth communication between the golf course staff and the pro shop by providing real-time updates on cart availability.",
    "Key Features:",
    "- Real-Time Updates: Tracks when carts are available or unavailable and instantly updates the pro shop staff for efficient management.",
    "- User-Friendly Interface: Built using React, it allows staff to view and manage cart availability quickly and without confusion.",
    "- Backend Reliability: Utilizes Node.js and MongoDB to handle and store data for cart statuses securely and efficiently.",
    "- Streamlined Communication: Eliminates delays by providing instant updates, enabling the pro shop to allocate or sell carts as needed.",
    "- Operational Efficiency: Reduces manual effort and errors, improving the overall workflow for golf course staff and pro shop operations.",
    "This system is designed to improve operational workflows and customer satisfaction by ensuring carts are managed effectively, minimizing downtime, and allowing the pro shop to focus on enhancing the golfing experience.",
  ],
  image: "/images/golf_management.png",
  link: "/PDFs/Golf_Management.pdf",
  embedPdf: true,
},
  "sentiment-analysis": {
  title: "Sentiment Analysis Using LSTM Networks for Movie Reviews",
  description:
    "A deep learning-powered tool designed to analyze the sentiments expressed in IMDB movie reviews, leveraging the advanced capabilities of Long Short-Term Memory (LSTM) networks.",
  techStack: ["Python", "TensorFlow", "LSTM", "NLP", "Keras"],
  year: "2023",
  details: [
    "This project explores the application of Long Short-Term Memory (LSTM) networks for sentiment analysis, specifically in the domain of movie reviews.",
    "Key Features:",
    "- Bidirectional LSTM Architecture: Processes textual data in both forward and backward directions, enabling a comprehensive contextual understanding.",
    "- Data Preprocessing: Implements tokenization, vocabulary capping, and padding of IMDB reviews to prepare data for neural network training.",
    "- Robust Model Design: Incorporates dropout layers for regularization and L2 penalties to mitigate overfitting and enhance model generalization.",
    "- Optimized Workflow: Utilizes the Adam optimizer for adaptive learning rates and early stopping to prevent overfitting during training.",
    "The tool was developed using the IMDB dataset, which comprises 50,000 balanced reviews, split equally into training and testing sets. The reviews were preprocessed into sequences of integers, padded to uniform lengths, and fed into an embedding layer to generate dense vector representations.",
    "The LSTM-based architecture includes:",
    "- An Embedding Layer: Converts textual input into dense vectors representing semantic meanings.",
    "- Bidirectional LSTM Layers: Captures relationships and dependencies in both forward and backward text sequences.",
    "- Dense Output Layer: Utilizes a sigmoid activation function for binary sentiment classification.",
    "The model achieved a test accuracy of 83.26%, demonstrating the effectiveness of LSTM networks in handling complex textual data and capturing nuanced sentiment expressions.",
    "Applications of this tool extend beyond movie reviews to diverse fields such as market analysis, product feedback, and social media monitoring, where automated sentiment analysis is critical for deriving actionable insights.",
  ],
  image: "/images/AI_Project.png",
  link: "/PDFs/AI_Final_Project.pdf",
  embedPdf: true,
},
  "dice-man": {
    title: "The Chronicles of DICE MAN",
    description:
      "An innovative platformer game developed for the GMTK Game Jam 2022, featuring a unique die roll mechanic that determines the protagonist's abilities.",
    techStack: ["Unity", "C#", "2D Art", "Game Design"],
    year: "2022",
    details: [
      "The Chronicles of DICE MAN is a 2D platformer game where randomness and strategy blend to create a unique player experience.",
      "Key Features:",
      "- Dynamic Gameplay: Player abilities are randomized with every die roll, adding an element of unpredictability and replayability.",
      "- Immersive Design: Built with Unity, it features visually appealing 2D art and engaging sound effects to immerse players in the game world.",
      "- Modular Mechanics: Designed with scalable mechanics, allowing future updates to include new abilities, levels, and challenges.",
      "- Game Jam Success: Developed under a tight deadline for the GMTK Game Jam, showcasing the team's creativity and efficiency.",
      "This game combines strategic decision-making with skill-based platforming, offering players a challenging yet rewarding experience.",
    ],
    image: "/images/Dice_man.png",
    link: "https://jbird88.itch.io/the-chronicles-of-dice-man",
    embedPdf: false,
  },
};

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
    <img src={project.image} alt={project.title} className={styles.projectImage} />
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

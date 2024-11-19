import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: 'RBC Capstone Project',
    type: 'CASE STUDY:',
    description: 'A cutting-edge platform designed to predict quarterly revenue impacted by extreme weather events, enabling proactive financial planning and strategic decision-making.',
    image: '/images/RBC_project.png',
    link: '#',
    techStack: ['Python', 'MongoDB', 'React', 'Node.js'],
    year: '2024',
  },
  {
    title: 'Golf Cart Management System',
    type: 'CASE STUDY:',
    description: 'A tailored web app for real-time golf cart tracking, enhancing operational efficiency and team communication by monitoring cart movements between the course and pro shop.',
    image: '/images/golf_management.png',
    link: '#',
    techStack: ['JavaScript', 'React', 'Node.js', 'Render', 'Vercel', 'MongoDB'],
    year: '2023',
  },
  {
    title: 'Sentiment Analysis Using LSTM Networks for Movie Reviews',
    type: 'CASE STUDY:',
    description: 'A powerful LSTM-based analysis tool designed to predict sentiment in movie reviews, enhancing insights for data-driven decision-making and understanding customer feedback.',
    image: '/images/AI_Project.png',
    link: '#',
    techStack: ['Python', 'TensorFlow', 'LSTM', 'NLP', 'Keras'],
    year: '2023',
  },
  {
    title: 'The Chronicles of DICE MAN',
    type: 'CASE STUDY:',
    description: 'Innovative platformer game developed for the GMTK Game Jam 2022, where the protagonist’s abilities are determined by a die roll mechanic.',
    image: '/images/Dice_man.png',
    link: '#',
    techStack: ['Unity', 'C#', '2D Art', 'Game Design'],
    year: '2022',
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>
            projects<span className={styles.highlight}>,</span>
          </h1>
          <p className={styles.subtitle}>
            A showcase of my most impactful work. Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        <div className={styles.projectsWrapper}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <Link key={index} href={project.link} className={styles.projectLink}>
                <div className={styles.projectContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      className={styles.projectImage}
                    />
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.projectDetails}>
                    <div className={styles.projectType}>{project.type}</div>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.techStack}>
                      <h3 className={styles.techTitle}>Tech Stack</h3>
                      <ul className={styles.techList}>
                        {project.techStack.map((tech, techIndex) => (
                          <li key={techIndex} className={styles.techItem}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.viewProject}>
                      <span>View Project</span>
                      <ArrowUpRight className={styles.arrowIcon} />
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

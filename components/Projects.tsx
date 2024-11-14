import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.project}>
        <h3>Project 1</h3>
        <p>A brief description of this project and the technology used.</p>
      </div>
      <div className={styles.project}>
        <h3>Project 2</h3>
        <p>A brief description of this project and the technology used.</p>
      </div>
      {/* Add more project elements as needed */}
    </section>
  );
};

export default Projects;

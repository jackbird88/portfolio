import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;

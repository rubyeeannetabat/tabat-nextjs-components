import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <div className={styles.uniqueSkillSection}>
      <h3 className={styles.uniqueSkillTitle}>Skills</h3>
      <ul className={styles.uniqueSkillList}>
        <li>Next.js</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}

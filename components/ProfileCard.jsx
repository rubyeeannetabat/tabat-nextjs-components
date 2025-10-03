import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.uniqueCardShell}>
      <img
        src="tabatpic.png"
        alt="Profile"
        className={styles.uniqueProfilePic}
      />
      <h2 className={styles.uniqueCardName}>Rubyee Anne Tabat</h2>
      <p className={styles.uniqueCardAge}>Age: 19</p>
      <p className={styles.uniqueCardDesc}>
        Enjoys late-night K-drama marathons
      </p>
    </div>
  );
}

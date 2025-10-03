import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.uniqueHeaderWrap}>
      <h1 className={styles.uniqueMainTitle}>My Profile</h1>
      <h2 className={styles.uniqueSubTitle}>Rubyee Anne Tabat</h2>
    </header>
  );
}

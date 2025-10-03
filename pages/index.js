import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import SkillsList from "../components/SkillsList";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.uniqueHomePage}>
      <Header />
      <ProfileCard />
      <SkillsList />
      <Footer />
    </div>
  );
}

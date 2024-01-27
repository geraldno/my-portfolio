import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./profile/components/Profile";
import Data from "./data/components/data"
import Contact from "./contact/components/contact";
import Portfolio from "./portfolio/components/portfolio";
import Galeria from "./galeria/components/galeria";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile/>
      <Data/>
      <Contact/>
      <Portfolio/>
      <Galeria/>
    </main>
  );
}

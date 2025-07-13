import styles from "./page.module.css";
import Link from "next/link";
import Typewriter from "../components/Typewriter";
import FloatingEmojis from "../components/FloatingEmojis";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <FloatingEmojis />
     
      <header className={styles.navbar}>
        <div className={styles.logo}>Code With Monisha...🍃</div>
        <nav className={styles.navLinks}>
          
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Typewriter
  texts={[
    "Hi!👋🏻, I am Monisha 😀",
    "I am an Engineer💻",
    "I am an Educator✒️",
    "I am a Developer🎮",
    "I am a Researcher🔎",
  ]}
/>

          <h2 className={styles.subtitle}>
            I build.. I teach.. I question.. I learn.. Endlessly!         </h2>

          <div className={styles.buttonGroup}>
            <Link href="#projects" className={styles.secondaryBtn}>Explore my Creations✨</Link>
           
          </div>

         
        </div>
      </section>

  
       <ProjectsSection />
      <ContactSection />
      
    </div>
    
  );
}

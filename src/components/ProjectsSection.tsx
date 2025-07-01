"use client";
import styles from "./ProjectsSection.module.css";

const projects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  description: "This is a short description of the project.",
  imageUrl: "/placeholder.jpg", // Replace later with actual images
  link: "#",
}));

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <img src={project.imageUrl} alt={project.title} className={styles.image} />
                <h3>{project.title}</h3>
              </div>
              <div className={styles.back}>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.card}>
          <div className={styles.inner}>
            <div className={styles.front}>
              <h3>More Coming Soon!</h3>
            </div>
            <div className={styles.back}>
              <p>Stay tuned for exciting upcoming projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

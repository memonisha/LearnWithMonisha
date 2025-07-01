"use client";
import styles from "./ProjectsSection.module.css";

const projects = [
  {
    id: 1,
    title: "Tic Tac Toe 🎯",
    description: "A modern twist on the classic Tic Tac Toe!✖️⭕ Featuring vibrant visuals, playful animations, and engaging sound effects — this game offers a delightful experience for players of all ages. Perfect for quick brain workouts and nostalgic fun.",
    imageUrl: "/images/tictactoe.gif",
    link: "https://tic-tac-toe-game-liard-chi.vercel.app/"
  },
  {
    id: 2,
    title: "Word Bubble Popper🎈",
    description: "Watch a word flash, then pop the right bubbles to spell it!🎈 A fun twist on memory and vocab building — one wrong letter and it’s game over. Sharp eyes and quick clicks win the round!",
    imageUrl: "/images/bubble.gif",
    link: "https://wordbubblepopper.vercel.app/"
  },
   {
    id: 3,
    title: "Authify 🔐",
    description: "A sleek and secure login system built with Supabase magic!🗝️ Authify lets users sign up or log in with ease — no fuss, no heavy backend. Lightweight, fast, and perfect for modern web apps.",
    imageUrl: "/images/authify.gif",
    link: "https://authify-nine.vercel.app/"
  },
  {
    id: 4,
    title: "Color Memory Game 🎨",
    description: "Follow the rhythm, match the colors, and outsmart Simon! 👦🏻 This vibrant twist on the classic memory game lights up your screen and your brain — each round gets faster, trickier, and more addictive. Can you keep up?",
    imageUrl: "/images/smon.gif",
    link: "https://simonsays-weld.vercel.app/"
  },

  {
    id: 5,
    title: "Minesweeper 💥",
    description: "The classic logic puzzle, now with a sleek new vibe!💣 Uncover safe cells, dodge hidden mines, and follow clever number clues — all wrapped in smooth animations and immersive sound. Nostalgia, redefined!",
    imageUrl: "/images/mine.gif",
    link: "https://gameminesweeper.vercel.app/"
  },
  {
    id: 6,
    title: "Kind Korner ❤️🌈",
    description: "A cozy little corner of the internet to spread smiles.😇 Read kind notes from strangers, or sign in to share your own!❤️With colorful gradients, floating messages, and a warm UI, this CRUD-powered app celebrates positivity — one note at a time.",
    imageUrl: "/images/kind.gif",
    link: "https://kindkorner.vercel.app/"
  },
  {
    id: 7,
    title: "WeatherLens 🌦️ ",
    description: "Explore weather anywhere on Earth🌍 — in a fun, colorful way!🌈Just type a city and boom — get the forecast, humidity, wind, and even a live map 🗺️. Built for curious minds, with smooth animations and kid-friendly vibes.",
    imageUrl: "/images/weather.gif",
    link: "https://weatherlens-omega.vercel.app/"
  },
  {
    id: 8,
    title: "KeyCrush 🐾⌨️",
    description: "Race the clock, crush the keys, and climb the leaderboard!⛳ A 30-second typing sprint that tests your speed and accuracy — with live WPM stats, a sleek UI, and a Supabase-powered high score board to keep you coming back!",
    imageUrl: "/images/pawtype.gif",
    link: "https://keycrush.vercel.app/"
  },
  {
    id: 9,
    title: "Transkriptly 🎥",
    description: "🎬 Paste a YouTube link → 🧠 Instantly get the full transcript! Make videos searchable, skimmable, and note-friendly ✍️📄. Perfect for learners, researchers, and curious minds who love clarity & speed ⚡.",
    imageUrl: "/images/trans.png",
    link: "https://transkriptly.vercel.app/"
  },
 {
    id: 10,
    title: "TwisterTalk 👂🏻🗣️",
    description: "Can your tongue keep up? 😜 Speak tricky tongue twisters aloud and get instant feedback using Speech Recognition. A fun, vocal workout that sharpens your pronunciation with every round!",
    imageUrl: "/images/twister.gif",
    link: "https://twistertalk.vercel.app/"
  },
];



export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>My Code Playground 🧩</h2>
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
              <p>Stay tuned for exciting upcoming projects..✨</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

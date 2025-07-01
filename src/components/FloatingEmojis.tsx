"use client";
import React, { useEffect, useState } from "react";
import styles from "./FloatingEmojis.module.css";

const emojiList = [
  "👩🏻‍💻", "💻", "🖱️", "🎉", "✍🏻",
  "👩🏻‍🏫", "🔎", "📚", "📖", "🎮",
  "🕹️", "🧾", "🍳", "🎯", "🎳"
];

const gridCols = 5;

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generated: React.ReactNode[] = emojiList.map((emoji, i) => {
      const row = Math.floor(i / gridCols); // Row index
      const col = i % gridCols;             // Column index

      const top = 20 + row * 40;  // 10%, 40%, 70%
      const left = 10 + col * 18; // 10%, 28%, 46%, 64%, 82%

      const style = {
        top: `${top}%`,
        left: `${left}%`,
        animationDuration: `${10 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      };

      return (
        <span key={i} className={styles.emoji} style={style}>
          {emoji}
        </span>
      );
    });

    setEmojis(generated);
  }, []);

  return <div className={styles.emojiContainer}>{emojis}</div>;
}

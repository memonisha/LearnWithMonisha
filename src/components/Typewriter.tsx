"use client";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css"; 
interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  pause?: number;
}

export default function Typewriter({
  texts,
  typingSpeed = 100,
  pause = 2500,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        isDeleting ? prev - 1 : prev + 1
      );
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts, typingSpeed, pause]);

  return (
    <h1 className={styles.typewriter}>
      {texts[index].substring(0, subIndex)}
      <span className={styles.cursor}>|</span>
    </h1>
  );
}

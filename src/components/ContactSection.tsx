"use client";
import { useState, useRef } from "react";
import styles from "./ContactSection.module.css"; // your styling file

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mvgrlqky", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset(); // clear form after submission

      // Optional: hide message after few seconds
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      alert("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Open to feedback, ideas & friendly hellos! 🫱🏼‍🫲🏼</h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
        <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
        <textarea name="message" placeholder="Your Message" rows={5} required className={styles.textarea} />
        <button type="submit" className={styles.submitButton}>
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

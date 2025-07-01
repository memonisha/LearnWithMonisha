import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learnwithmonisha",
  description: "Portfolio showcasing Monisha's creative coding and game projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

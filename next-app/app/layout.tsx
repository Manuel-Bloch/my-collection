import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matchpoint – Tischtennis-Tracker",
  description: "Dokumentiere deine Tischtennisspiele und verfolge deine Entwicklung.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body className="app-shell">
        <header className="site-header">
          <Link
            className="brand"
            href="/"
            aria-label="Matchpoint Startseite"
          >
            <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
              <path d="m19 22 14 14 6-6-14-14" fill="currentColor" />
              <ellipse cx="17" cy="17" rx="11" ry="13" fill="currentColor" />
              <circle
                className="brand-ball"
                cx="37"
                cy="10"
                r="3.5"
                fill="var(--color-accent-hover)"
              />
            </svg>

            <span className="brand-copy">
              <span className="brand-name">MATCHPOINT</span>
              <span className="brand-label">Table Tennis</span>
            </span>
          </Link>

          <nav aria-label="Hauptnavigation">
            <Link href="/">Startseite</Link>
            <Link href="/statistics">Statistik</Link>
            <Link href="/contact">Kontaktformular</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
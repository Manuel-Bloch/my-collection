import Image from "next/image";
import Link from "next/link";

export default function GameEntry() {
  return (
    <main className="content-main match-detail">
        <section className="page-heading">
            <div>
                <p className="eyebrow">26. Mai 2026 · Turnier</p>
                <h1>Spieleintrag</h1>
            </div>
            <Link className="back-link" href="/">Zurück zur Übersicht</Link>
        </section>

        <menu className="action-menu">
            <button type="button" className="secondary-button">Bearbeiten</button>
            <button type="button" className="danger-button">Löschen</button>
        </menu>

        <section className="panel">
            <h2>Spielergebnis</h2>
            <div className="versus">
                <figure>
                    <Image src="/images/MyAvatar.png" alt="Illustration meines Spieler-Avatars" width={112} height={112} />
                    <figcaption>Ich</figcaption>
                </figure>
                <strong>3:1</strong>
                <figure>
                    <Image src="/images/opponent-avatar.svg" alt="Illustration des gegnerischen Spieler-Avatars" width={112} height={112} />
                    <figcaption>Max</figcaption>
                </figure>
            </div>
        </section>

        <section className="panel">
            <h2>Satzresultate</h2>
            <ul>
                <li>11:8</li>
                <li>9:11</li>
                <li>13:11</li>
                <li>11:7</li>
            </ul>
        </section>

        <section className="panel">
            <h2>Was lief gut?</h2>
            <p>Gutes Rückhandspiel und sichere Topspins.</p>
        </section>

        <section className="panel">
            <h2>Was lief nicht gut?</h2>
            <p>Die Aufschlagannahme muss noch besser werden.</p>
        </section>
    </main>
  );
}
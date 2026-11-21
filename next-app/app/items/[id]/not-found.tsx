import Link from "next/link";

export default function GameNotFound() {
  return (
    <main className="content-main match-detail">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Eintrag nicht gefunden</p>
          <h1>Dieses Spiel gibt es nicht.</h1>
        </div>
      </section>

      <section className="panel">
        <p>Prüfe die Adresse oder kehre zur Spielübersicht zurück.</p>
        <Link className="back-link" href="/">
          Zurück zur Übersicht
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import ItemList from "./components/ItemList";

export default function Home() {
  return (
    <main className="dashboard-main">
      <section className="dashboard-heading" aria-labelledby="dashboard-title">
        <div>
          <p className="eyebrow">Mein Dashboard</p>
          <h1 id="dashboard-title">Verfolge deinen Weg nach oben</h1>
        </div>
        <Link className="button addgame-button" href="/items/add_entry">
          <span aria-hidden="true">+</span> Spiel hinzufügen
        </Link>
      </section>

      <section className="overview" aria-label="Spielübersicht">
        <article className="overview-card">
          <p>Gesamte Spiele</p>
          <strong>6</strong>
          <span>Letzte Saison</span>
        </article>
        <article className="overview-card">
          <p>Siege</p>
          <strong className="positive">4</strong>
          <span>Davon 67 %</span>
        </article>
        <article className="overview-card">
          <p>Niederlagen</p>
          <strong className="negative">2</strong>
          <span>Davon 33 %</span>
        </article>
      </section>

      <ItemList />
    </main>
  );
}

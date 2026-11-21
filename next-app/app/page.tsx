import Link from "next/link";

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

      <section className="matches-section" aria-labelledby="matches-title">
        <div className="section-toolbar">
          <div>
            <p className="eyebrow">Aktivität</p>
            <h2 id="matches-title">Letzte Einträge</h2>
          </div>
          <div className="filter-control">
            <label htmlFor="filter">Kategorie</label>
            <select id="filter">
              <option value="">Alle Kategorien</option>
              <option value="Turnier">Turnier</option>
              <option value="Training">Training</option>
              <option value="Liga">Liga</option>
            </select>
          </div>
        </div>

        <section className="gridbox" aria-label="Letzte Spiele">
          <article className="card" data-category="Turnier">
            <div className="card-info">
              <h2>Max Mustermann</h2>
              <time dateTime="2026-05-26">26.05.2026</time>
              <p>Turnier</p>
              <Link href="/items/max-mustermann">Details anzeigen</Link>
            </div>
            <div className="card-result win">
              <strong>3:1</strong>
              <span>Sieg</span>
            </div>
          </article>
          <article className="card" data-category="Training">
            <div className="card-info">
              <h2>Lena Schmidt</h2>
              <time dateTime="2026-05-19">19.05.2026</time>
              <p>Training</p>
              <Link href="/items/lena-schmidt">Details anzeigen</Link>
            </div>
            <div className="card-result loss">
              <strong>1:3</strong>
              <span>Niederlage</span>
            </div>
          </article>
          <article className="card" data-category="Liga">
            <div className="card-info">
              <h2>Tom Becker</h2>
              <time dateTime="2026-05-12">12.05.2026</time>
              <p>Liga</p>
              <Link href="/items/tom-becker">Details anzeigen</Link>
            </div>
            <div className="card-result win">
              <strong>3:0</strong>
              <span>Sieg</span>
            </div>
          </article>
          <article className="card" data-category="Turnier">
            <div className="card-info">
              <h2>Jonas Weber</h2>
              <time dateTime="2026-05-05">05.05.2026</time>
              <p>Turnier</p>
              <Link href="/items/jonas-weber">Details anzeigen</Link>
            </div>
            <div className="card-result loss">
              <strong>2:3</strong>
              <span>Niederlage</span>
            </div>
          </article>
          <article className="card" data-category="Training">
            <div className="card-info">
              <h2>Anna Keller</h2>
              <time dateTime="2026-04-28">28.04.2026</time>
              <p>Training</p>
              <Link href="/items/anna-keller">Details anzeigen</Link>
            </div>
            <div className="card-result win">
              <strong>3:2</strong>
              <span>Sieg</span>
            </div>
          </article>
          <article className="card" data-category="Liga">
            <div className="card-info">
              <h2>Paul Fischer</h2>
              <time dateTime="2026-04-21">21.04.2026</time>
              <p>Liga</p>
              <Link href="/items/paul-fischer">Details anzeigen</Link>
            </div>
            <div className="card-result win">
              <strong>3:1</strong>
              <span>Sieg</span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

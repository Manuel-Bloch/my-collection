export default function StatisticsPage() {
  return (
    <main className="content-main statistics-page">
      <section className="page-heading">
            <div>
                <p className="eyebrow">Leistungsübersicht</p>
                <h1>Statistik</h1>
            </div>
        </section>

        <section className="panel">
            <h2>Gesamtübersicht</h2>
            <dl className="stats">
                <div className="stat">
                    <dt>Absolvierte Spiele</dt>
                    <dd>24</dd>
                </div>
                <div className="stat">
                    <dt>Gewonnen</dt>
                    <dd className="win">15</dd>
                </div>
                <div className="stat">
                    <dt>Verloren</dt>
                    <dd className="loss">9</dd>
                </div>
                <div className="stat">
                    <dt>Gewinnrate</dt>
                    <dd>62,5%</dd>
                </div>
            </dl>
        </section>

        <section className="panel">
            <h2>Spiele nach Kategorie</h2>
            <div className="table-wrap">
            <table className="stats-table">
                <thead>
                    <tr>
                        <th scope="col">Kategorie</th>
                        <th scope="col">Spiele</th>
                        <th scope="col">Gewonnen</th>
                        <th scope="col">Verloren</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Training</th>
                        <td>12</td>
                        <td>8</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th scope="row">Turnier</th>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">Liga</th>
                        <td>5</td>
                        <td>3</td>
                        <td>2</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Gesamt</th>
                        <td>24</td>
                        <td>15</td>
                        <td>9</td>
                    </tr>
                </tfoot>
            </table>
            </div>
        </section>
    </main>
  );
}
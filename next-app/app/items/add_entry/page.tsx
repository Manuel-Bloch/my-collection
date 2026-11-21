import Link from "next/link";

export default function AddEntry() {
  return (
    <main className="content-main new-entry-page">
        <section className="page-heading">
            <div>
                <p className="eyebrow">Neuer Matchbericht</p>
                <h1>Spiel hinzufügen</h1>
            </div>
            <Link className="back-link" href="/">Zurück zur Übersicht</Link>
        </section>

        <section className="form-layout" aria-label="Neuen Spieleintrag erfassen">
            <form className="form-card" action="#" method="post">
                <div className="form-grid">
                    <div className="field">
                        <label htmlFor="opponent_name">Name des Gegners</label>
                        <input type="text" id="opponent_name" name="opponent_name" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="date">Datum</label>
                        <input type="date" id="date" name="date" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="setscore">Satzergebnisse</label>
                        <input type="text" id="setscore" name="setscore" placeholder="11:8, 9:11, 11:7" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="score">Gesamtergebnis</label>
                        <input type="text" id="score" name="score" placeholder="3:1" required/>
                    </div>
                    <div className="field field-full">
                        <label htmlFor="note_positive">Was hat gut funktioniert?</label>
                        <textarea id="note_positive" name="note_positive" rows={4}></textarea>
                    </div>
                    <div className="field field-full">
                        <label htmlFor="note_negative">Was hat nicht gut funktioniert?</label>
                        <textarea id="note_negative" name="note_negative" rows={4}></textarea>
                    </div>
                </div>
                <button type="submit" className="primary-button">Eintrag hinzufügen</button>
            </form>
        </section>

    </main>
  );
}
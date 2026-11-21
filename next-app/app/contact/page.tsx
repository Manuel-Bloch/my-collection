export default function ContactPage() {
  return (
    <main className="content-main contact-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Nachricht senden</p>
          <h1>Kontaktformular</h1>
        </div>
      </section>

      <section className="form-layout" aria-label="Kontaktdaten und Nachricht">
        <form className="form-card" action="#" method="post">
          <div className="form-grid contact-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="field field-full">
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
          </div>
          <button type="submit" className="primary-button">
            Absenden
          </button>
        </form>
      </section>
    </main>
  );
}
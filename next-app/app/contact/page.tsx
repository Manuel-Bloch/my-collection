"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Die Nachricht konnte nicht gesendet werden.",
      );
      setStatus("error");
    }
  }

  return (
    <main className="content-main contact-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Nachricht senden</p>
          <h1>Kontaktformular</h1>
        </div>
      </section>

      <section className="form-layout" aria-label="Kontaktdaten und Nachricht">
        <form className="form-card" onSubmit={handleSubmit}>
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
            {status === "sending" ? "Wird gesendet …" : "Absenden"}
          </button>
          {status === "success" && (
            <p role="status">Deine Nachricht wurde gespeichert.</p>
          )}
          {status === "error" && <p role="alert">{errorMessage}</p>}
        </form>
      </section>
      <p>
        <Link href="/messages">Gespeicherte Nachrichten ansehen</Link>
      </p>
    </main>
  );
}
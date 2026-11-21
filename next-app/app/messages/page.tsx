"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ContactMessage } from "@/lib/messages";

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadMessages() {
      try {
        const response = await fetch("/api/messages", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Die Nachrichten konnten nicht geladen werden.");
        }

        const data: ContactMessage[] = await response.json();
        if (isActive) {
          setMessages(data);
        }
      } catch {
        if (isActive) {
          setError("Die Nachrichten konnten nicht geladen werden. Bitte versuche es erneut.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    void loadMessages();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="content-main messages-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h1>Gespeicherte Nachrichten</h1>
        </div>
        <Link className="back-link" href="/contact">
          Zurück zum Kontaktformular
        </Link>
      </section>

      {loading ? (
        <p role="status">Nachrichten werden geladen …</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : messages.length === 0 ? (
        <p role="status">Es wurden noch keine Nachrichten gesendet.</p>
      ) : (
        messages.map((message) => (
          <article className="panel" key={message.id}>
            <h2>{message.name}</h2>
            <p>{message.email}</p>
            <time dateTime={message.createdAt}>
              {new Intl.DateTimeFormat("de-DE", {
                dateStyle: "medium",
                timeStyle: "short",
              }).format(new Date(message.createdAt))}
            </time>
            <p>{message.message}</p>
          </article>
        ))
      )}
    </main>
  );
}

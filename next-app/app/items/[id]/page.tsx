import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { loadItemById } from "@/lib/items";

type GameEntryPageProps = {
  params: Promise<{ id: string }>;
};

export default function GameEntry({ params }: GameEntryPageProps) {
  return (
    <Suspense
      fallback={
        <main className="content-main match-detail">
          <section className="page-heading">
            <div>
              <p className="eyebrow">Spieleintrag</p>
              <h1>Spieldaten werden geladen …</h1>
            </div>
          </section>
        </main>
      }
    >
      <GameEntryContent params={params} />
    </Suspense>
  );
}

async function GameEntryContent({ params }: GameEntryPageProps) {
  const { id } = await params;
  const item = loadItemById(id);

  if (!item) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "long",
  }).format(new Date(`${item.date}T00:00:00`));

  return (
    <main className="content-main match-detail">
      <section className="page-heading">
        <div>
          <p className="eyebrow">
            {formattedDate} · {item.category}
          </p>
          <h1>Spiel gegen {item.opponent}</h1>
        </div>
        <Link className="back-link" href="/">
          Zurück zur Übersicht
        </Link>
      </section>

      <menu className="action-menu">
        <button type="button" className="secondary-button">
          Bearbeiten
        </button>
        <button type="button" className="danger-button">
          Löschen
        </button>
      </menu>

      <section className="panel">
        <h2>Spielergebnis</h2>
        <div className="versus">
          <figure>
            <Image
              src="/images/MyAvatar.png"
              alt="Illustration meines Spieler-Avatars"
              width={112}
              height={112}
            />
            <figcaption>Ich</figcaption>
          </figure>
          <strong>{item.score}</strong>
          <figure>
            <Image
              src="/images/opponent-avatar.svg"
              alt={`Illustration des Avatars von ${item.opponent}`}
              width={112}
              height={112}
            />
            <figcaption>{item.opponent}</figcaption>
          </figure>
        </div>
        <p>Ergebnis: {item.outcome}</p>
      </section>

      <section className="panel">
        <h2>Satzresultate</h2>
        {item.sets.length > 0 ? (
          <ul>
            {item.sets.map((set, index) => (
              <li key={`${item.id}-${index}`}>{set}</li>
            ))}
          </ul>
        ) : (
          <p>Für dieses Spiel wurden keine Satzresultate eingetragen.</p>
        )}
      </section>

      <section className="panel">
        <h2>Was lief gut?</h2>
        <p>{item.notes.wentWell || "Keine Notiz eingetragen."}</p>
      </section>

      <section className="panel">
        <h2>Was kann verbessert werden?</h2>
        <p>{item.notes.toImprove || "Keine Notiz eingetragen."}</p>
      </section>
    </main>
  );
}

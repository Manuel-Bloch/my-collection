"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Item } from "@/lib/items";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadItems() {
      try {
        const response = await fetch("/api/items");

        if (!response.ok) {
          throw new Error("Die Spiele konnten nicht geladen werden.");
        }

        const data: Item[] = await response.json();
        if (isActive) {
          setItems(data);
        }
      } catch {
        if (isActive) {
          setError("Die Spiele konnten nicht geladen werden. Bitte versuche es erneut.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    void loadItems();

    return () => {
      isActive = false;
    };
  }, []);

  const filteredItems = items.filter(
    (item) => category === "" || item.category === category,
  );

  return (
    <section className="matches-section" aria-labelledby="matches-title">
      <div className="section-toolbar">
        <div>
          <p className="eyebrow">Aktivität</p>
          <h2 id="matches-title">Letzte Einträge</h2>
        </div>
        <div className="filter-control">
          <label htmlFor="filter">Kategorie</label>
          <select
            id="filter"
            value={category}
            onChange={(event) => setCategory(event.currentTarget.value)}
          >
            <option value="">Alle Kategorien</option>
            <option value="Turnier">Turnier</option>
            <option value="Training">Training</option>
            <option value="Liga">Liga</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p role="status">Spiele werden geladen …</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : filteredItems.length === 0 ? (
        <p role="status">Für diese Kategorie gibt es keine Einträge.</p>
      ) : (
        <div className="gridbox" aria-label="Letzte Spiele">
          {filteredItems.map((item) => (
            <article
              className="card"
              data-category={item.category}
              key={item.id}
            >
              <div className="card-info">
                <h2>{item.opponent}</h2>
                <time dateTime={item.date}>
                  {new Date(`${item.date}T00:00:00`).toLocaleDateString("de-DE")}
                </time>
                <p>{item.category}</p>
                <Link href={`/items/${item.id}`}>Details anzeigen</Link>
              </div>
              <div
                className={`card-result ${item.outcome === "Sieg" ? "win" : "loss"}`}
              >
                <strong>{item.score}</strong>
                <span>{item.outcome}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

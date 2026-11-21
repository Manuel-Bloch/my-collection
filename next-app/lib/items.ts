import itemsData from "../data/items.json";

export type Category = "Turnier" | "Training" | "Liga";

export type Item = {
  id: string;
  date: string;
  opponent: string;
  category: Category;
  score: string;
  outcome: "Sieg" | "Niederlage";
  sets: string[];
  notes: {
    wentWell: string;
    toImprove: string;
  };
};

export function loadItems(): Item[] {
  return itemsData as Item[];
}

export function loadItemById(id: string): Item | undefined {
  return loadItems().find((item) => item.id === id);
}
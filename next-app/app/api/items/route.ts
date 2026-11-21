import { loadItems } from "@/lib/items";

export async function GET(request: Request) {
  const category = new URL(request.url).searchParams.get("category");
  const items = loadItems();

  if (category === null || category === "") {
    return Response.json(items);
  }

  return Response.json(
    items.filter((item) => item.category === category),
  );
}
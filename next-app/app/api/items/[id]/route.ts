import { loadItemById } from "@/lib/items";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = loadItemById(id);

  if (!item) {
    return Response.json(
      { error: `Eintrag mit der ID "${id}" wurde nicht gefunden.` },
      { status: 404 },
    );
  }

  return Response.json(item);
}
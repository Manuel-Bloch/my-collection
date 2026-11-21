import {
  addMessage,
  loadMessages,
  type ContactMessageInput,
} from "@/lib/messages";

function isContactMessageInput(value: unknown): value is ContactMessageInput {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "message" in value &&
    typeof value.message === "string"
  );
}

export async function GET() {
  return Response.json(loadMessages(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Die Anfrage enthält kein gültiges JSON." },
      { status: 400 },
    );
  }

  if (!isContactMessageInput(body)) {
    return Response.json(
      { error: "Name, E-Mail und Nachricht müssen als Text angegeben werden." },
      { status: 400 },
    );
  }

  const input: ContactMessageInput = {
    name: body.name.trim(),
    email: body.email.trim(),
    message: body.message.trim(),
  };

  if (
    !input.name ||
    !input.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)
  ) {
    return Response.json(
      { error: "Bitte gib Name, eine gültige E-Mail-Adresse und eine Nachricht an." },
      { status: 400 },
    );
  }

  return Response.json(addMessage(input), { status: 201 });
}

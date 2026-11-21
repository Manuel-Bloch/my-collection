import { randomUUID } from "node:crypto";

export type ContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactMessage = ContactMessageInput & {
  id: string;
  createdAt: string;
};

const messages: ContactMessage[] = [];

export function addMessage(input: ContactMessageInput): ContactMessage {
  const savedMessage: ContactMessage = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  messages.push(savedMessage);
  return savedMessage;
}

export function loadMessages(): ContactMessage[] {
  return [...messages];
}

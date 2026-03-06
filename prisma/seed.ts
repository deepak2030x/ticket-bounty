import "dotenv/config";

import { TicketCreateInput } from "@/generated/prisma/internal/prismaNamespaceBrowser";
import prisma from "@/lib/prisma";

const initialTickets: TicketCreateInput[] = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from db",
    status: "CLOSED",
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from db",
    status: "OPEN",
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from db",
    status: "IN_PROGRESS",
  },
];

async function seed() {
  console.log("Seeding database...");
  const t0 = performance.now();
  await prisma.ticket.deleteMany(); // Clear existing data
  // Seed data for the Ticket model
  for (const ticket of initialTickets) {
    await prisma.ticket.create({ data: ticket });
  }
  const t1 = performance.now();
  console.log(`Database seeded in ${(t1 - t0).toFixed(2)} milliseconds.`);
}

await seed();

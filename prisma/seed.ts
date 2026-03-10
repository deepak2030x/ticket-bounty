import "dotenv/config";

import { TicketCreateInput } from "@/generated/prisma/models/Ticket";
import prisma from "@/lib/prisma";

const initialTickets: TicketCreateInput[] = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from db",
    status: "CLOSED",
    deadline: new Date().toISOString().split("T")[0],
    bounty: 220, // $2.20
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from db",
    status: "OPEN",
    deadline: new Date().toISOString().split("T")[0],
    bounty: 340, // $3.40
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from db",
    status: "IN_PROGRESS",
    deadline: new Date().toISOString().split("T")[0],
    bounty: 760, // $7.60
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

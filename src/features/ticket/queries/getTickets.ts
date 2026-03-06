import prisma from "@/lib/prisma";

async function getTickets() {
  const tickets = await prisma.ticket.findMany();
  return tickets;
}

export { getTickets };

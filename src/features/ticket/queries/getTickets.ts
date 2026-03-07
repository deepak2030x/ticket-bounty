import prisma from "@/lib/prisma";

async function getTickets() {
  const tickets = await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tickets;
}

export { getTickets };

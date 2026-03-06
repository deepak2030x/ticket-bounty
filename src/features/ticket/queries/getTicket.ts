import prisma from "@/lib/prisma";

async function getTicket(ticketId: string) {
  return await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });
}
export { getTicket };

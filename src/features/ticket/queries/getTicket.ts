import { initialTickets } from "@/data";

async function getTicket(ticketId: string) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
  return initialTickets.find((ticket) => ticket.id === ticketId);
}
export { getTicket };

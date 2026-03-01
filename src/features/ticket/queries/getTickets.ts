import { initialTickets } from "@/data";

import { Ticket } from "../types";

async function getTickets() {
  const tickets = new Promise<Ticket[]>((resolve) => {
    setTimeout(() => {
      resolve(initialTickets);
    }, 2000);
  });
  return tickets;
}

export { getTickets };

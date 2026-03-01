import Link from "next/link";

import { Placeholder } from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";

type TicketPageProps = Readonly<{
  params: Promise<{
    ticketId: string;
  }>;
}>;

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        renderButton={(className) => (
          <Button className={className} variant="outline" asChild>
            <Link href={ticketsPath()}>Go To Tickets</Link>
          </Button>
        )}
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}

export default TicketPage;

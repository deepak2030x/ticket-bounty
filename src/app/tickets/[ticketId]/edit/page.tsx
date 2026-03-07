import { notFound } from "next/navigation";

import { CardCompact } from "@/components/custom/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/getTicket";

type TicketEditPageProps = Readonly<{
  params: Promise<{
    ticketId: string;
  }>;
}>;

async function TicketEditPage({ params }: TicketEditPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="animate-fade-from-top self-center w-full max-w-[420px]">
      <CardCompact
        title="Edit Ticket"
        description="View and manage your existing tickets"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
}

export default TicketEditPage;

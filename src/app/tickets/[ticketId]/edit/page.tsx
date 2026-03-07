import { notFound } from "next/navigation";

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
    <div className="flex-1 self-center w-full max-w-[420px] animate-fade-from-top">
      <TicketUpsertForm ticket={ticket} />
    </div>
  );
}

export default TicketEditPage;

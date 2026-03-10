import { notFound } from "next/navigation";
import { Suspense } from "react";

import { RedirectToast } from "@/components/custom/redirect-toast";
import { Spinner } from "@/components/custom/spinner";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/getTicket";

type TicketPageProps = Readonly<{
  params: Promise<{
    ticketId: string;
  }>;
}>;

async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="flex justify-center animate-fade-from-top">
          <TicketItem ticket={ticket} isDetail />
        </div>
      </Suspense>
      <RedirectToast />
    </>
  );
}

export default TicketPage;

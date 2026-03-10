import { Suspense } from "react";

import { CardCompact } from "@/components/custom/card-compact";
import { Heading } from "@/components/custom/heading";
import { RedirectToast } from "@/components/custom/redirect-toast";
import { Spinner } from "@/components/custom/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

async function TicketsPage() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets" description="All your tickets at one place" />
        <CardCompact
          title="Create Ticket"
          description="View and manage your existing tickets"
          className="w-full max-w-[420px] self-center"
          content={<TicketUpsertForm />}
        />
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      <RedirectToast />
    </>
  );
}

export default TicketsPage;

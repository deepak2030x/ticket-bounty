import { Suspense } from "react";

import { Heading } from "@/components/custom/heading";
import { Spinner } from "@/components/custom/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

async function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}

export default TicketsPage;

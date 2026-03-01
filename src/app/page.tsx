import Link from "next/link";

import { Heading } from "@/components/custom/heading";
import { ticketsPath } from "@/paths";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Welcome to Ticket Bounty"
        description="A simple ticketing system where users can create tickets and others can claim and earn rewards for completing them."
      />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

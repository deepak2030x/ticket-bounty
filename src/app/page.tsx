import Link from "next/link";

import { ticketsPath } from "@/paths";

function HomePage() {
  return (
    <div>
      <h2 className="text-lg">Welcome to the Ticket Bounty App</h2>
      <Link href={ticketsPath()} className="underline">
        Go to Tickets Page
      </Link>
    </div>
  );
}

export default HomePage;

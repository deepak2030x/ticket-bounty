import Link from "next/link";

import { Placeholder } from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

function NotFound() {
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

export default NotFound;

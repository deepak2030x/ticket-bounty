import { Tickets } from "lucide-react";
import Link from "next/link";

import { homePath, ticketsPath } from "@/paths";

import { Button } from "../ui/button";

function TopNavBar() {
  return (
    <nav
      className="supports-backdrop-blur:bg-background/60 
        bg-background/95 fixed top-0 right-0 left-0 z-20 flex 
        w-full justify-between border-b px-5 py-2.5 backdrop-blur"
    >
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <Tickets />
            <h1 className="text-xl font-semibold">Ticket Bounty</h1>
          </Link>
        </Button>
      </div>
      <div>
        {/* 
            Another variant of the button component. this tells apply the button styles to the link component.
              <Link href={ticketsPath()} className={buttonVariants({ variant: "outline"})}>Tickets</Link>
            */}
        <Button asChild variant="default">
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
}

export { TopNavBar };

"use client";
import { LucideLoaderCircle } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = Readonly<{
  ticket?: Ticket;
}>;

function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  const [isPending, startTransition] = useTransition();

  function upsertTicketAction(formData: FormData) {
    startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formData);
    });
  }

  return (
    <form action={upsertTicketAction} className="flex flex-col gap-y-3">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        placeholder="Title"
        name="title"
        defaultValue={ticket?.title}
      />
      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        placeholder="Add ticket description"
        name="content"
        defaultValue={ticket?.content}
      />
      <Button type="submit" disabled={isPending}>
        {isPending && (
          <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        )}
        {ticket ? "Update" : "Create"}
      </Button>
    </form>
  );
}

export { TicketUpsertForm };

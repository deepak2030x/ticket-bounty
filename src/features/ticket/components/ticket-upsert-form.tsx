"use client";

import { SubmitButton } from "@/components/custom/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = Readonly<{
  ticket?: Ticket;
}>;

function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-3"
    >
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
      <SubmitButton label={ticket ? "Update" : "Create"} />
    </form>
  );
}

export { TicketUpsertForm };

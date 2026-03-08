"use client";
import { useActionState } from "react";

import { FieldError } from "@/components/custom/form/field-error";
import { Form } from "@/components/custom/form/form";
import { SubmitButton } from "@/components/custom/form/submit-button";
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from "@/components/custom/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = Readonly<{
  ticket?: Ticket;
}>;

function TicketUpsertForm({ ticket }: TicketUpsertFormProps) {
  const [actionState, action] = useActionState<ActionState, FormData>(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE,
  );

  return (
    <Form action={action} actionState={actionState}>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        placeholder="Title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />
      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        placeholder="Add ticket description"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />
      <SubmitButton label={ticket ? "Update" : "Create"} />
    </Form>
  );
}

export { TicketUpsertForm };

"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/custom/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

const upsertTicketSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(200),
  content: z
    .string()
    .min(3, "Content must be at least 3 characters long")
    .max(1024),
});

async function upsertTicket(
  ticketId: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });
    await prisma.ticket.upsert({
      where: {
        id: ticketId ?? "",
      },
      create: data,
      update: data,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
  revalidatePath(ticketsPath());
  if (ticketId) {
    redirect(ticketPath(ticketId));
  }
  const message = ticketId
    ? "Ticket updated successfully"
    : "Ticket created successfully";
  return toActionState("SUCCESS", message);
}

export { upsertTicket };

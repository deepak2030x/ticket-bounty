"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  ActionState,
  fromErrorToActionState,
} from "@/components/custom/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(1024),
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
  return {
    message: ticketId
      ? "Ticket updated successfully"
      : "Ticket created successfully",
  };
}

export { upsertTicket };

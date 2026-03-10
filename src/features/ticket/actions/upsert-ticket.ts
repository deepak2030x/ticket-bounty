"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { setCookieByKey } from "@/actions/cookies";
import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/custom/form/utils/to-action-state";
import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { dollarToCent } from "@/utils/currency";

const upsertTicketSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(200),
  content: z
    .string()
    .min(3, "Content must be at least 3 characters long")
    .max(1024),
  deadline: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Deadline must be in YYYY-MM-DD format"),
  bounty: z.coerce.number().positive("Bounty must be a positive number"),
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
      deadline: formData.get("deadline"),
      bounty: formData.get("bounty"),
    });

    const dbData = {
      ...data,
      bounty: dollarToCent(data.bounty),
    };

    await prisma.ticket.upsert({
      where: {
        id: ticketId ?? "",
      },
      create: dbData,
      update: dbData,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }
  revalidatePath(ticketsPath());
  if (ticketId) {
    await setCookieByKey("toast", "Ticket updated successfully");
    redirect(ticketPath(ticketId));
    console.log("hello");
  }
  return toActionState("SUCCESS", "Ticket created successfully");
}

export { upsertTicket };

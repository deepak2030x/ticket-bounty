"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { ticketsPath } from "@/paths";

async function upsertTicket(ticketId: string | undefined, formData: FormData) {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await prisma.ticket.upsert({
    where: {
      id: ticketId ?? "",
    },
    create: {
      title: data.title as string,
      content: data.content as string,
    },
    update: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
}

export { upsertTicket };

"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

async function upsertTicket(ticketId: string | undefined, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: {
      id: ticketId ?? "",
    },
    create: data,
    update: data,
  });

  revalidatePath(ticketsPath());
  if (ticketId) {
    redirect(ticketPath(ticketId));
  }
}

export { upsertTicket };

import { Route } from "next";

export const homePath = (): Route => "/";

export const ticketsPath = (): Route => "/tickets";
export const ticketPath = (ticketId: string): Route =>
  `${ticketsPath()}/${ticketId}` as Route;

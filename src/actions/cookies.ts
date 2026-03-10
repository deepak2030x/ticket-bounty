"use server";

import { cookies } from "next/headers";

async function setCookieByKey(key: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}

async function getCookieByKey(key: string) {
  const cookieStore = await cookies();
  if (!cookieStore.has(key)) {
    return null;
  }
  return cookieStore.get(key)?.value;
}

async function deleteCookieByKey(key: string) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}

export { deleteCookieByKey, getCookieByKey, setCookieByKey };

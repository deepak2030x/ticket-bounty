"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";

const RedirectToast = () => {
  useEffect(() => {
    let ignore = true;
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");
      await deleteCookieByKey("toast");

      if (ignore && message) {
        toast.success(message);
      }
    };
    showCookieToast();
    return () => {
      ignore = false;
    };
  }, []);

  return null;
};

export { RedirectToast };

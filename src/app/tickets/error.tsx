"use client";

import { Placeholder } from "@/components/custom/placeholder";

type ErrorPageProps = Readonly<{
  error: Error;
}>;

function ErrorPage({ error }: ErrorPageProps) {
  return (
    <Placeholder
      label={error.message || "Something went wrong. Please try again later."}
    />
  );
}

export default ErrorPage;

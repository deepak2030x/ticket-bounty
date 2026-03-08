import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  fieldErrors?: Record<string, string>;
  payload?: FormData;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  timestamp: Date.now(),
};

function fromErrorToActionState(error: unknown, formData: FormData) {
  if (error instanceof ZodError) {
    return {
      status: "ERROR" as const,
      message: "",
      fieldErrors: Object.fromEntries(
        error.issues.map((issue) => [issue.path.join("."), issue.message]),
      ),
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: "ERROR" as const,
      message: error.message,
      payload: formData,
      timestamp: Date.now(),
    };
  }
  return {
    status: "ERROR" as const,
    message: "An error occurred while saving the ticket. Please try again.",
    timestamp: Date.now(),
  };
}

function toActionState(status: ActionState["status"], message: string) {
  return {
    status,
    message,
    timestamp: Date.now(),
  };
}

export { fromErrorToActionState, toActionState };

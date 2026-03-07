import { ZodError } from "zod";

export type ActionState = { message: string; payload?: FormData };

function fromErrorToActionState(error: unknown, formData: FormData) {
  if (error instanceof ZodError) {
    console.log("Erron", typeof error);
    return {
      message: "zod error",
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
    };
  }
  return {
    message: "An error occurred while saving the ticket. Please try again.",
  };
}

export { fromErrorToActionState };

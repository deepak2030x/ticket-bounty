import { ActionState } from "./utils/to-action-state";

type FieldErrorProps = Readonly<{
  actionState: ActionState;
  name: string;
}>;

function FieldError({ actionState, name }: FieldErrorProps) {
  const message = actionState.fieldErrors?.[name];
  return <span className="text-xs text-red-500">{message}</span>;
}

export { FieldError };

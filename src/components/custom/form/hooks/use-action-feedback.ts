import { useEffect, useRef } from "react";

import { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions,
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  // eslint-disable-next-line react-hooks/refs
  const isNewToast = actionState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    if (!isNewToast) return;
    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR" && actionState.message) {
      options.onError?.({ actionState });
    }
    prevTimestamp.current = actionState.timestamp;
  }, [actionState, options, isNewToast]);
};

export { useActionFeedback };

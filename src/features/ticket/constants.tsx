import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  CLOSED: <LucideCircleCheck />,
};

const TICKET_STATUS_LABELS = {
  OPEN: "Open",
  CLOSED: "Done",
  IN_PROGRESS: "In Progress",
};

export { TICKET_ICONS, TICKET_STATUS_LABELS };

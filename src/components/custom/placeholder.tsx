import { LucideMessageSquareWarning } from "lucide-react";
import Link from "next/link";

import { homePath } from "@/paths";

import { Button } from "../ui/button";

type PlaceholderProps = Readonly<{
  label: string;
  renderIcon?: (className: string) => React.ReactElement;
  renderButton?: (className: string) => React.ReactElement;
}>;

function Placeholder({
  label,
  renderIcon = (className: string) => (
    <LucideMessageSquareWarning className={className} />
  ),
  renderButton = (className: string) => (
    <Button className={className} asChild variant="outline">
      <Link href={homePath()}>Go To Home</Link>
    </Button>
  ),
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center gap-y-2">
      {renderIcon("w-16 h-16")}
      <h2 className="text-lg text-center">{label}</h2>
      {renderButton("mt-4")}
    </div>
  );
}

export { Placeholder };

import { LucideLoaderCircle } from "lucide-react";

function Spinner() {
  return (
    <div className="w-full flex flex-1 items-center justify-center">
      <LucideLoaderCircle className="w-16 h-16 animate-spin" />
    </div>
  );
}

export { Spinner };

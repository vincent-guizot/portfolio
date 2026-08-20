import { Compass } from "lucide-react";
import Button from "../components/Button";

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center animate-fade-in">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--tint-orange)] text-brand-orange">
      <Compass size={28} />
    </div>
    <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
      404 <span className="text-brand-orange">.</span>
    </h1>
    <p className="max-w-sm text-sm text-[var(--color-text-secondary)]">
      This page took a wrong turn. Let's get you back on track.
    </p>
    <Button to="/" variant="primary">
      Back to Home
    </Button>
  </div>
);

export default NotFound;

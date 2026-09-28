import { cn } from "@/lib/utils";

/**
 * Nebula Capital logo lockup.
 *
 * NOTE: this is the typographic placeholder lockup. When the official logo file
 * is added to the project, swap the <LogoMark /> + wordmark for the image here
 * (single place, used by the header and footer).
 */

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="currentColor" strokeOpacity="0.28" />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="7"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        transform="rotate(-28 20 20)"
      />
      <path
        d="M11 26.5V13.5l18 13V13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29" cy="13.5" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5",
        tone === "light" ? "text-ink-foreground" : "text-primary",
        className,
      )}
    >
      <LogoMark className={tone === "light" ? "text-brand-soft" : "text-brand"} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.02rem] font-bold tracking-[0.13em] uppercase sm:text-[1.12rem]">
          Nebula Capital
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.545rem] tracking-[0.235em] uppercase sm:text-[0.6rem]",
            tone === "light" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          Advisory Pvt. Ltd.
        </span>
      </span>
    </span>
  );
}

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ProfileCover() {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5",
      )}
    >
      <Image
        src={isLight ? "/go-light.png" : "/go-dark.png"}
        alt="Go"
        className="h-32 w-48 sm:h-48 sm:w-64"
        width={1536}
        height={1024}
      />
    </div>
  );
}

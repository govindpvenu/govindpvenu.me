"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useState } from "react";
import type { ICloud, SimpleIcon } from "react-icon-cloud";
import { fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: false,
  },
};

// Memoize theme-specific icon configurations to prevent recalculation
const getThemeConfig = (theme: string) => {
  const isLight = theme === "light";
  return {
    bgHex: isLight ? "#f3f2ef" : "#080510",
    fallbackHex: isLight ? "#6e6e73" : "#ffffff",
    minContrastRatio: isLight ? 1.2 : 2,
  };
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const { bgHex, fallbackHex, minContrastRatio } = getThemeConfig(theme);

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

// Memoize the tech stack keys to prevent infinite re-renders
const TECH_STACK_KEYS = TECH_STACK.map((tech) => tech.key);

export function TechStack() {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: TECH_STACK_KEYS }).then(setData);
  }, []); // Empty dependency array since TECH_STACK_KEYS is now static

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    const currentTheme = theme ?? "dark";
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, currentTheme)
    );
  }, [data, theme]);

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">{renderedIcons}</ul>
      </PanelContent>
    </Panel>
  );
}

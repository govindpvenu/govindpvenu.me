"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function LogoMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Image
      src={isLight ? "/go-light.png" : "/go-dark.png"}
      alt="Go"
      className="h-14 w-28 translate-y-2 opacity-0 transition-all duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:h-16 sm:w-32"
      width={1536}
      height={1024}
      data-visible={visible}
    />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  return isHome ? (
    <LogoMotion />
  ) : (
    <Image
      src={isLight ? "/go-light.png" : "/go-dark.png"}
      alt="Go"
      className="h-14 w-28 sm:h-16 sm:w-32"
      width={1536}
      height={1024}
    />
  );
}

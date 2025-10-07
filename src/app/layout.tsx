import "@/styles/globals.css";

import dynamic from "next/dynamic";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { fontMono, fontSans } from "@/lib/fonts";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SiteHeader />
          <main className="max-w-screen overflow-x-hidden px-2">
            {children}
          </main>
          <SiteFooter />
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}

import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Press_Start_2P as FontPressStart2P,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPressStart2P = FontPressStart2P({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

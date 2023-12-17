import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/global.css";

import {
  Noto_Sans_JP,
  Space_Mono,
  Archivo_Black,
  Josefin_Sans,
} from "next/font/google";
import clsx from "clsx";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const revalidate = 60;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          noto_sans_jp.variable,
          space_mono.variable,
          archivo_black.variable,
          josefin_sans.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto_sans_jp",
});

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space_mono",
});

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo_black",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin_sans",
});

export const metadata: Metadata = {
  title: "world map",
  description: "世界の国について学んでみよう！by いのべーしょんえくすぷろーらーず",
};

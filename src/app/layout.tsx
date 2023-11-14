import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/global.css";

import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto_sans_jp",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans_jp.variable}>{children}</body>
    </html>
  );
}

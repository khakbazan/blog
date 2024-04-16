import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.scss";
import Providers from "@/providers";

const vazirmatn = Vazirmatn({ subsets: ["latin"], fallback: ["Segoe UI"] });

export const metadata: Metadata = {
  title: "مقالات آموزشی",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <div id="portal_root" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

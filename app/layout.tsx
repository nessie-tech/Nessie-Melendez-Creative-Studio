import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TextureCursor } from "./TextureCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nessie Melendez | Creative Direction Portfolio",
  description:
    "A video-led portfolio for Nessie Melendez, focused on services, cinematic storytelling, and a restrained personal story.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TextureCursor />
        {children}
      </body>
    </html>
  );
}

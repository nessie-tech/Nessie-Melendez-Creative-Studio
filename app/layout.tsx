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
  title: "Nessie Melendez | Creative AI Education",
  description:
    "Creative AI education from Nessie Melendez Creative Studio. Workshops and hands-on training in AI cinematic storytelling, social media content, and vibe-coded web design.",
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

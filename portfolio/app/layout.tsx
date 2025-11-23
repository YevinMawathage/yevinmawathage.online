import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { CursorFollower } from "@/src/components/ui/CursorFollower";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "YevinMawathage.online",
  description: "Personal Portfolio of Yevin Mawathage - Web Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <CursorFollower />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

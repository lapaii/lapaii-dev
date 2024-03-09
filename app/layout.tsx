import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const rubik = Rubik({
	weight: "600",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	title: "lapaii",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}<Analytics /></body>
    </html>
  );
}

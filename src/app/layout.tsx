import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ubaid ur Rahman — Full Stack Developer",
  description:
    "Portfolio of Qari Hafiz Ubaid ur Rahman — Full Stack Developer specialising in Next.js, React, TypeScript and Tailwind CSS.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Full Stack Developer", "Portfolio"],
  openGraph: {
    title: "Ubaid ur Rahman — Full Stack Developer",
    description: "Full Stack Developer specialising in Next.js, React, TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Tanishq Patidar",
    template: "%s — Tanishq Patidar",
  },
  description: "Engineer. Writing, tools, and a resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-2xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

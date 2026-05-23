import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://tanishqpatidar.dev";
const SITE_NAME = "Tanishq Patidar";
const DESCRIPTION =
  "Backend-focused full-stack engineer. Notes on event-driven systems, message queues, AI integrations, and shipping production software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Tanishq Patidar",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Tanishq Patidar", url: SITE_URL }],
  creator: "Tanishq Patidar",
  publisher: "Tanishq Patidar",
  keywords: [
    "Tanishq Patidar",
    "backend engineer",
    "full-stack engineer",
    "RabbitMQ",
    "event-driven architecture",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "AWS",
    "Mosaic Wellness",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tanishq Patidar",
  url: SITE_URL,
  email: "mailto:tanishq.pati@gmail.com",
  jobTitle: "Backend Engineer",
  worksFor: { "@type": "Organization", name: "Mosaic Wellness" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
  },
  knowsAbout: [
    "Event-driven architecture",
    "RabbitMQ",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "AWS",
    "AI engineering",
  ],
  sameAs: ["https://github.com/", "https://linkedin.com/in/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col font-mono">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-2xl px-6 py-12">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Startup Ideas — Investor-style idea reads",
  description:
    "The same structured first pass for every idea—verdict, fit score, and risk flags—before you commit to a build.",
  openGraph: {
    title: "Startup Ideas — Investor-style idea reads",
    description:
      "Browse curated startup ideas with the same structured read every time—search, filter, or generate a random idea.",
    url: "/",
    siteName: "Startup Ideas",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Ideas — Investor-style idea reads",
    description:
      "Browse curated startup ideas with search, filters, and a sample investor-style summary.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

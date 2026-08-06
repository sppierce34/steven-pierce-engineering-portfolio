import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: {
      default: "Steven Pierce | Junior Software Engineer",
      template: "%s",
    },
    description:
      "Production software projects by Steven Pierce across web, mobile, cloud, and computer vision.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Steven Pierce | Software for the real world",
      description:
        "Production work across web, mobile, cloud, and computer vision.",
      url: base,
      siteName: "Steven Pierce - Software Engineer",
      type: "website",
      images: [
        {
          url: new URL("/og.png", base).toString(),
          width: 1734,
          height: 907,
          alt: "Steven Pierce - Software for the real world",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Steven Pierce | Software for the real world",
      description:
        "Production work across web, mobile, cloud, and computer vision.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

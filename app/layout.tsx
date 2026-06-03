import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Islamic Companion Hub - Quran, Hadith & Islamic Resources",
  description: "Your premium Islamic resource hub with Quran, Hadith, prayer times, and daily Islamic reminders. Modern, mobile-first design for the best user experience.",
  keywords: ["Quran", "Hadith", "Islamic Resources", "Prayer Times", "Qibla Direction", "Islamic Apps"],
  authors: [{ name: "Islamic Companion Hub" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Islamic Companion Hub - Premium Islamic Resources",
    description: "Discover Quran, Hadith, prayer times, and Islamic knowledge in one beautiful platform.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
        {children}
      </body>
    </html>
  );
}

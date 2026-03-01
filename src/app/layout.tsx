import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { TopNavBar } from "@/components/custom/top-nav-bar";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description:
    "A simple ticketing system where users can create tickets and others can claim them and earn rewards for completing them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TopNavBar />
          <main
            className="bg-secondary/20 flex min-h-screen flex-1 
        flex-col overflow-x-hidden overflow-y-auto px-8 py-24"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

import { Tickets } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          className="supports-backdrop-blur:bg-background/60 
        bg-background/95 fixed top-0 right-0 left-0 z-20 flex 
        w-full justify-between border-b px-5 py-2.5 backdrop-blur"
        >
          <div>
            <Button asChild variant="ghost">
              <Link href={homePath()}>
                <Tickets />
                <h1 className="text-xl font-semibold">Ticket Bounty</h1>
              </Link>
            </Button>
          </div>
          <div>
            {/* 
            Another variant of the button component. this tells apply the button styles to the link component.
              <Link href={ticketsPath()} className={buttonVariants({ variant: "outline"})}>Tickets</Link>
            */}
            <Button asChild variant="default">
              <Link href={ticketsPath()}>Tickets</Link>
            </Button>
          </div>
        </nav>
        <main
          className="bg-secondary/20 flex min-h-screen flex-1 
        flex-col overflow-x-hidden overflow-y-auto px-8 py-24"
        >
          {children}
        </main>
      </body>
    </html>
  );
}

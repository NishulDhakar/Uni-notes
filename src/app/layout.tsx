import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RGPV notes | Free Engineering Notes",
  description: "Free Engineering Notes for RGPV students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        {/* Background Layer */}
        <div className="min-h-screen w-full  relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
   style={{
     backgroundImage: `
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
     `,
      backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
   }}
          />
          
          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


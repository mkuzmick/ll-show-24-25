import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the ll show",
  description: "all the things happening in the ll.",
  openGraph: {
    images: [
      {
        url: "https://ll-show-24-25.vercel.app/images/og-image-002.jpg",
        width: 1920,
        height: 1080,
        alt: 'Og Image Alt'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-800 text-zinc-100`}>
        {children}
      </body>
    </html>
  );
}

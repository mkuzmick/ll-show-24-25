import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the moments",
  description: "all the moments in the ll.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1 className="text-7xl font-black text-right">moments</h1>
        {children}
    </div>
  );
}

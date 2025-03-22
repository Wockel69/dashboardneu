import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaGrowth - Instagram-Dashboard",
  description: "Analysiere dein Instagram-Wachstum und optimiere deine Strategie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="main-content flex-1 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

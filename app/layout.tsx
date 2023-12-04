import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarNext from "@/components/navbar";
import { LenisProvider } from "@/providers/lenis-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frost - Stack",
  description: "Frost Stack for building best e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-indigo-950 h-full" lang="en">
      <Providers>
        <LenisProvider>
          <body className={inter.className}>
            <NavbarNext />
            {children}
          </body>
        </LenisProvider>
      </Providers>
    </html>
  );
}

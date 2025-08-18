import type { Metadata } from "next";
import "./globals.css";


import { Anton } from "next/font/google";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Le Barbier",
  description: "O seu barbeiro online",
  openGraph: {
    title: "Le Barbier",
    description: "O seu barbeiro online",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${anton.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

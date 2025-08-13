import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}

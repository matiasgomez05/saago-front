import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Index",
    default: "Saago App",
    template: "%s | Saago App"
  },
  description: "Aplicacion de escritorio - Saago App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header> </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

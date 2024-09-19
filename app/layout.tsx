import { Metadata } from "next";
import { Nav } from "./components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
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
        <main>{children}</main>
      </body>
    </html>
  );
}

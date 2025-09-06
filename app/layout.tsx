import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utsav Poddar",
  description: "Portfolio of Utsav Poddar",
  // generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

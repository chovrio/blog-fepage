"use client";
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
      <Script defer src="/sakura.js"></Script>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Website Portfolio",
  description: "Portfolio Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet" />
        <link rel="icon" type="image/png" href="./images/favicon.png" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

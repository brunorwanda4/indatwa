import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indatwa",
  description: "",
  icons: [
    {
      url: "/logo.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/dark-logo.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="heritage">
      <body className={` `}>{children}</body>
    </html>
  );
}

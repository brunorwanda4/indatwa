import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontArchivoBlack } from "@/lib/fonts/fonts";


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
      <body className={cn(fontArchivoBlack.variable)}>{children}</body>
    </html>
  );
}

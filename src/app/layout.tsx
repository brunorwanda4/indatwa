import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/themes/theme-provider";
import {
	fontBricolage,
	fontGeistMono,
	fontGeistSans,
	fontInter,
} from "@/lib/fonts/fonts";

export const metadata: Metadata = {
	title: {
		default: "Bruno Rwanda | Software Engineer & Software Architect",
		template: "%s | Bruno Rwanda",
	},
	description:
		"Portfolio of Bruno Rwanda, a Software Engineer and Software Architect specializing in TypeScript, Rust, Next.js, and modern scalable systems. Building impactful digital solutions from Rwanda.",

	keywords: [
		"Bruno Rwanda",
		"Software Engineer",
		"Software Architect",
		"Next.js Developer",
		"Rust Developer",
		"TypeScript Developer",
		"Full Stack Developer",
		"Web Developer Rwanda",
		"Desktop Developer Rwanda",
		"Mobile Developer Rwanda",
	],

	authors: [{ name: "Bruno Rwanda" }],
	creator: "Bruno Rwanda",

	metadataBase: new URL("https://brunorwanda.dev"), // change to your domain

	icons: {
		icon: "/logo.svg",
		shortcut: "/logo.svg",
		apple: "/logo.svg",
	},

	openGraph: {
		title: "Bruno Rwanda | Software Engineer & Software Architect",
		description:
			"Explore the portfolio of Bruno Rwanda. I design and build scalable software systems using Rust, TypeScript, and modern web technologies.",
		url: "https://brunorwanda.dev",
		siteName: "Bruno Rwanda Portfolio",
		images: [
			{
				url: "/og-image.png", // create this image later
				width: 1200,
				height: 630,
				alt: "Bruno Rwanda Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Bruno Rwanda | Software Engineer",
		description:
			"Software engineer building scalable platforms using Rust, TypeScript, and Next.js.",
		images: ["/og-image.png"],
	},

	robots: {
		index: true,
		follow: true,
	},

	category: "technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${fontGeistSans.variable} ${fontGeistMono.variable} ${fontBricolage.variable} ${fontInter.variable} antialiased`}
			>
				<ThemeProvider
					attribute={["data-theme", "class"]}
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

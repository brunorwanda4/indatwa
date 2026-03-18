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
		default: "Indatwa Group | Innovation & E-Lab Rwanda",
		template: "%s | Indatwa",
	},

	description:
		"Indatwa Group is a youth-driven innovation and E-Lab initiative in Rwanda focused on solving real-world problems through technology, collaboration, and creativity.",

	keywords: [
		"Indatwa",
		"Indatwa Group",
		"Indatwa Rwanda",
		"E-Lab Rwanda",
		"Youth Innovation Rwanda",
		"Student Projects Rwanda",
		"Technology Rwanda",
		"Problem Solving Group",
		"Digital Innovation",
		"Community Development Rwanda",
	],

	authors: [{ name: "Indatwa Group" }],
	creator: "Indatwa Group",

	metadataBase: new URL("https://indatwa.vercel.app"), // change later to real domain

	icons: {
		icon: "/logo.svg",
		shortcut: "/logo.svg",
		apple: "/logo.svg",
	},

	openGraph: {
		title: "Indatwa Group | Innovation & E-Lab Rwanda",
		description:
			"Discover Indatwa Group, a team of young innovators building solutions to real-world challenges through collaboration, research, and technology.",
		url: "https://indatwa.vercel.app",
		siteName: "Indatwa Group",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Indatwa Group - Innovation Hub",
			},
		],
		locale: "en_US",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Indatwa Group | Rwanda Innovation",
		description:
			"A youth-led innovation group solving real-world challenges using technology and creativity.",
		images: ["/og-image.png"],
	},

	robots: {
		index: true,
		follow: true,
	},

	category: "education",
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
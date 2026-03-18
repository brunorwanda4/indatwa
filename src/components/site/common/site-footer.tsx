"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteFooterProps {
	className?: string;
}

export default function SiteFooter({ className }: SiteFooterProps) {
	return (
		<footer
			className={cn(
				"  z-20 w-full flex justify-between items-center my-12 global-px ",
				className,
			)}
		>
			<div className=" flex gap-4 font-light text-sm">
				<Link href={"https://www.instagram.com/indatwa__/"} target="_blank">
					YOUTUBE
				</Link>
				<Link href={"https://www.youtube.com/@Indatwachannel"} target="_blank">
					INSTAGRAM
				</Link>
			</div>
			<span className="font-light text-sm">© {new Date().getFullYear()}</span>
		</footer>
	);
}

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
				<Link
					href={"https://www.linkedin.com/in/rwanda-bruno-b5b5542a6/"}
					target="_blank"
					className=" cursor-pointer"
				>
					LINKEDIN
				</Link>
				<Link href={"https://x.com/rwanda_bruno"} target="_blank">
					TWITTER (X)
				</Link>
				<Link href={"https://www.instagram.com/bruno_rwanda/"} target="_blank">
					INSTAGRAM
				</Link>
			</div>
			<span className="font-light text-sm">© {new Date().getFullYear()}</span>
		</footer>
	);
}

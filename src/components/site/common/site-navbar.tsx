"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Scales from "@/components/ui/scales";
import { SiteNavPage } from "@/lib/context/site-nav-page";
import { cn } from "@/lib/utils";

interface SiteNavbarProps {
	onMobileNavChange?: (isOpen: boolean) => void;
}

const SiteNavbar = ({ onMobileNavChange }: SiteNavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = (value: boolean) => {
		setIsOpen(value);
		onMobileNavChange?.(value);
	};

	// Close on Escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				toggleNav(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	// Close when resizing to desktop (md = 768px)
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isOpen) {
				toggleNav(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	const title = ({ className }: { className?: string }) => {
		return (
			<Link
				href={"/"}
				className={cn("font-light text-2xl font-bricolage", className)}
			>
				Bruno Rwanda
			</Link>
		);
	};

	return (
		<header
			className={cn(
				"fixed z-50 global-px py-8 flex md:justify-between justify-start items-center w-full",
				isOpen && "bg-base-100 h-screen items-start",
			)}
		>
			{isOpen && <Scales orientation="vertical" />}
			{title({ className: "md:block hidden" })}
			{/* desktop nav */}
			<nav className="md:flex hidden gap-20 items-center">
				{SiteNavPage.map((page) => (
					<Link
						key={page.href}
						href={page.href}
						className="flex flex-col gap-2"
					>
						<span className="text-xl">{page.label}</span>
						<span className="text-sm font-extralight leading-1">
							{page.description}
						</span>
					</Link>
				))}
				<Link href="/contact" className="btn font-normal btn-outline">
					LET'S TALK
				</Link>
			</nav>
			{/* mobile nav */}
			<div className="md:hidden flex flex-col gap-6 w-full z-20">
				<div className="w-full items-center flex-row flex justify-between gap-8">
					<div>{title({ className: "" })}</div>
					<button
						onClick={() => toggleNav(!isOpen)}
						className="btn font-normal btn-outline w-fit"
						type="button"
					>
						{isOpen ? "Close" : "Menu"}
					</button>
				</div>
				{isOpen && (
					<div className="flex flex-col gap-4">
						<nav className="flex flex-col gap-4 border-y border-base-content py-10">
							<Link
								href={"/"}
								className="flex flex-col gap-2 link w-full max-md:text-7xl max-w-sm:text-4xl font-light link-hover"
							>
								Home
							</Link>
							{SiteNavPage.map((page) => (
								<Link
									key={page.href}
									href={page.href}
									className="flex flex-col gap-2 link link-hover w-full max-md:text-7xl max-w-sm:text-4xl font-light"
								>
									{page.label}
								</Link>
							))}
						</nav>
						<div>
							<Link
								href="/contact"
								className="hover:text-primary duration-150 flex justify-between group"
							>
								<span className="text-2xl">Let's Talk</span>
								<MdOutlineArrowRightAlt
									className="group-hover:translate-x-2 group-hover:-scale-x-125"
									size={"38"}
								/>
							</Link>
						</div>
						<div className="flex gap-4 font-light text-sm justify-between mt-8">
							<Link
								href={"https://www.linkedin.com/in/rwanda-bruno-b5b5542a6/"}
								target="_blank"
								className="cursor-pointer"
							>
								LINKEDIN
							</Link>
							<Link href={"https://x.com/rwanda_bruno"} target="_blank">
								TWITTER (X)
							</Link>
							<Link
								href={"https://www.instagram.com/bruno_rwanda/"}
								target="_blank"
							>
								INSTAGRAM
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default SiteNavbar;

"use client";
import { motion } from "motion/react";
import Link from "next/link";
import SiteFooter from "@/components/site/common/site-footer";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";

export default function HeroTextFlip() {
	const words = ["Developer", "Designer", "Architect", "Creator", "Awesome"];
	return (
		<div className=" w-screen  flex h-screen flex-col items-center gap-6 justify-end">
			<motion.h1
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				layout
			>
				<ContainerTextFlip words={words} />
			</motion.h1>

			<div className=" flex justify-end items-start w-3/5 z-20">
				<p className=" max-w-md font-inter font-light text-sm leading-6">
					Hello! I’m Bruno Rwanda a designer and creative developer from{" "}
					<Link
						href={"https://www.gov.rw/"}
						target="_blank"
						className=" link link-hover"
					>
						Rwanda
					</Link>{" "}
					passionate about building meaningful digital experiences and creating
					solutions that make ideas come to life.
				</p>
			</div>
			<SiteFooter />
		</div>
	);
}

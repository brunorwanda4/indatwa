"use client";
import { motion } from "motion/react";
import Link from "next/link";
import SiteFooter from "@/components/site/common/site-footer";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";

export default function HeroTextFlip() {
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
				<ContainerTextFlip />
			</motion.h1>

			<div className=" flex justify-end items-start w-3/5 z-20">
				<p className=" max-w-md font-inter font-light text-sm leading-6">
					We are Indatwa — students from{" "}
					<Link
						href={"https://www.alueducation.com/"}
						target="_blank"
						className=" link link-hover"
					>
						African Leadership University
					</Link>{" "}
					across Rwanda, Kenya, Nigeria, South Africa, and Senegal. We build
					solutions to real African challenges through technology and
					collaboration.
				</p>
			</div>
			<SiteFooter />
		</div>
	);
}

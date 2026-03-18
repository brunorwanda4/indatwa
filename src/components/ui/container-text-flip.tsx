"use client";
import { motion } from "motion/react";
import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
	className?: string;
	textClassName?: string;
}

function HoverLetter({ children }: { children: React.ReactNode }) {
	const [clipPath, setClipPath] = useState("circle(0% at 50% 50%)");
	const ref = React.useRef<HTMLDivElement>(null);

	const handleMouseEnter = (e: React.MouseEvent) => {
		const rect = ref.current!.getBoundingClientRect();
		const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
		const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
		setClipPath(`circle(120% at ${x}% ${y}%)`);
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		const rect = ref.current!.getBoundingClientRect();
		const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
		const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
		setClipPath(`circle(0% at ${x}% ${y}%)`);
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
		<div
			ref={ref}
			className="inline-block relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<span
				className="absolute inset-0 pointer-events-none overflow-hidden"
				style={{
					clipPath,
					transition: "clip-path 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
				}}
			>
				<span className="inline-block bg-linear-to-b from-base-content to-neutral-focus bg-clip-text text-transparent">
					{React.isValidElement(children) &&
					typeof children.props === "object" &&
					children.props !== null &&
					"children" in children.props
						? (children.props.children as React.ReactNode)
						: children}
				</span>
			</span>
		</div>
	);
}

export function ContainerTextFlip({
	className,
	textClassName,
}: ContainerTextFlipProps) {
	const id = useId();
	const word = "INDATWA";

	return (
		<div
			className={cn(
				"text-center text-8xl max-sm:text-7xl md:text-9xl font-bold font-bricolage",
				className,
			)}
		>
			<div className={cn("inline-block", textClassName)}>
				<div className="inline-block">
					{word.split("").map((letter, index) => (
						<HoverLetter key={`${index}-${id}`}>
							<motion.span
								initial={{ opacity: 0, filter: "blur(10px)" }}
								animate={{ opacity: 1, filter: "blur(0px)" }}
								transition={{ delay: index * 0.02 }}
								className="inline-block bg-linear-to-b from-base-content to-neutral bg-clip-text text-transparent"
							>
								{letter}
							</motion.span>
						</HoverLetter>
					))}
				</div>
			</div>
		</div>
	);
}

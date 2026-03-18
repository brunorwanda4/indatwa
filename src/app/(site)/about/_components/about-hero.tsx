"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import React from "react";

const AboutHero = () => {
	const lineVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.8,
				ease: [0.215, 0.61, 0.355, 1],
			},
		}),
	};
	return (
		<section className="relative min-h-screen w-full  flex flex-col justify-center px-6  font-sans uppercase md:px-20 pt-12">
			{/* Main Content */}
			<div className="relative z-0 flex flex-col items-center md:items-start">
				{/* Line 1: FIVE NATIONS */}
				<motion.h1
					custom={0}
					initial="hidden"
					animate="visible"
					variants={lineVariants}
					className="text-6xl md:text-[10vw] font-light leading-[0.9] tracking-tighter ml-32"
				>
					Five Nations,
				</motion.h1>

				{/* Line 2: ONE MISSION + Sparkle */}
				<div className="relative flex items-center">
					<motion.h1
						custom={1}
						initial="hidden"
						animate="visible"
						variants={lineVariants}
						className="text-6xl md:text-[10vw] font-light leading-[0.9] tracking-tighter"
					>
						One Mission
					</motion.h1>
					<motion.div
						animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
						transition={{ repeat: Infinity, duration: 3 }}
						className="ml-4"
					>
						<Sparkles className="w-8 h-8 md:w-16 md:h-16 text-white/40 fill-white/20 blur-[1px]" />
					</motion.div>
				</div>

				{/* Sub-text and INNOVATE Line */}
				<div className="flex flex-col md:flex-row md:items-end gap-8 mt-4 ml-48">
					<motion.p
						custom={2}
						initial="hidden"
						animate="visible"
						variants={lineVariants}
						className="text-[10px] md:text-sm tracking-widest max-w-[200px] normal-case opacity-70 mb-2"
					>
						Rwanda, Kenya, Nigeria, South Africa, and Gambia.
					</motion.p>

					<motion.h1
						custom={3}
						initial="hidden"
						animate="visible"
						variants={lineVariants}
						className="text-6xl md:text-[10vw] font-light leading-[0.8] tracking-tighter"
					>
						Innovate
					</motion.h1>
				</div>

				{/* Line 4: FOR AFRICA */}
				<div className="relative">
					<motion.h1
						custom={4}
						initial="hidden"
						animate="visible"
						variants={lineVariants}
						className="text-6xl md:text-[10vw] font-light leading-[0.8] tracking-tighter pl-[5vw] ml-40"
					>
						For Africa
					</motion.h1>

					{/* Decorative blurred star */}
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
						className="absolute -left-12 bottom-0 opacity-30 blur-[2px]"
					>
						<span className="text-4xl md:text-6xl">✱</span>
					</motion.div>
				</div>
			</div>

			{/* Background Radial Gradient for that "glow" look */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)] pointer-events-none left-10" />
		</section>
	);
};

export default AboutHero;

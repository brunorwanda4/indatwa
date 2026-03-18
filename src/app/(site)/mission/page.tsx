"use client";

import {
	AnimatePresence,
	motion,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
// useRef is still used inside AfricaMap, StatBadge, SectionCard
import { Bebas_Neue, DM_Serif_Display, Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import SiteFooter from "@/components/site/common/site-footer";
import DitherShader from "@/components/ui/dither-shader";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const bebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas",
});
const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space",
});
const dmSerif = DM_Serif_Display({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dm",
});

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatProps {
	value: string;
	label: string;
	delay: number;
}
interface SectionCardProps {
	index: number;
	tag: string;
	title: string;
	body: string;
	accent: string;
	icon: React.ReactNode;
}

// ─── African Continent SVG (simplified) ──────────────────────────────────────
const AfricaMap = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div ref={ref} className="relative flex items-center justify-center">
			{/* Rotating glow ring */}
			<motion.div
				className="absolute rounded-full border border-white/10"
				style={{ width: 340, height: 340 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
			/>
			<motion.div
				className="absolute rounded-full border border-white/5"
				style={{ width: 420, height: 420 }}
				animate={{ rotate: -360 }}
				transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
			/>

			{/* Pulsing dots on "cities" */}
			{[
				{ cx: 155, cy: 90, label: "Cairo" },
				{ cx: 140, cy: 195, label: "Kigali" },
				{ cx: 200, cy: 230, label: "Nairobi" },
				{ cx: 120, cy: 260, label: "Lagos" },
				{ cx: 175, cy: 310, label: "Johannesburg" },
			].map((dot, i) => (
				<motion.div
					key={dot.label}
					className="absolute"
					style={{
						left: dot.cx,
						top: dot.cy,
						transform: "translate(-50%,-50%)",
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
				>
					<motion.div
						className="relative w-2 h-2 rounded-full bg-white"
						animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
						transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
					/>
					{dot.label === "Kigali" && (
						<motion.span
							className="absolute left-4 top-0 text-[10px] text-white/70 whitespace-nowrap"
							style={{ fontFamily: "var(--font-space)" }}
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							Kigali ★
						</motion.span>
					)}
				</motion.div>
			))}

			{/* Africa SVG shape */}
			<motion.svg
				viewBox="60 40 210 310"
				width={300}
				height={310}
				initial={{ opacity: 0, scale: 0.85 }}
				animate={isInView ? { opacity: 1, scale: 1 } : {}}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<defs>
					<radialGradient id="africaGlow" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
						<stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
					</radialGradient>
					<filter id="glow">
						<feGaussianBlur stdDeviation="3" result="coloredBlur" />
						<feMerge>
							<feMergeNode in="coloredBlur" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
				{/* Simplified Africa outline */}
				<path
					d="M165,48 L180,50 L200,58 L215,68 L222,82 L218,95 L225,108 L228,122 L222,138 L230,150 L228,165 L218,178 L220,195 L210,212 L200,228 L188,242 L175,255 L168,268 L165,280 L160,292 L155,300 L148,308 L142,315 L135,310 L130,298 L125,285 L120,272 L115,258 L112,244 L108,230 L105,215 L108,200 L105,185 L100,170 L98,155 L100,140 L95,125 L92,110 L95,96 L100,82 L108,70 L118,60 L130,52 L145,48 Z"
					fill="url(#africaGlow)"
					stroke="rgba(255,255,255,0.4)"
					strokeWidth="1.5"
					filter="url(#glow)"
				/>
				{/* Rwanda highlight */}
				<path
					d="M148,192 L158,188 L165,195 L160,205 L150,205 Z"
					fill="rgba(255,255,255,0.6)"
					stroke="white"
					strokeWidth="1"
					filter="url(#glow)"
				/>
				{/* Grid lines across africa for 3D feel */}
				<motion.line
					x1="100"
					y1="120"
					x2="225"
					y2="120"
					stroke="white"
					strokeWidth="0.3"
					strokeOpacity="0.15"
					strokeDasharray="4,8"
					animate={{ strokeDashoffset: [0, -24] }}
					transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
				/>
				<motion.line
					x1="100"
					y1="160"
					x2="225"
					y2="160"
					stroke="white"
					strokeWidth="0.3"
					strokeOpacity="0.15"
					strokeDasharray="4,8"
					animate={{ strokeDashoffset: [0, -24] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "linear",
						delay: 0.5,
					}}
				/>
				<motion.line
					x1="100"
					y1="200"
					x2="220"
					y2="200"
					stroke="white"
					strokeWidth="0.3"
					strokeOpacity="0.15"
					strokeDasharray="4,8"
					animate={{ strokeDashoffset: [0, -24] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "linear",
						delay: 1,
					}}
				/>
				<motion.line
					x1="145"
					y1="55"
					x2="145"
					y2="310"
					stroke="white"
					strokeWidth="0.3"
					strokeOpacity="0.1"
					strokeDasharray="4,8"
					animate={{ strokeDashoffset: [0, 24] }}
					transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
				/>
				<motion.line
					x1="175"
					y1="50"
					x2="175"
					y2="305"
					stroke="white"
					strokeWidth="0.3"
					strokeOpacity="0.1"
					strokeDasharray="4,8"
					animate={{ strokeDashoffset: [0, 24] }}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear",
						delay: 0.8,
					}}
				/>
			</motion.svg>

			{/* Orbiting child dot */}
			<motion.div
				className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_12px_white]"
				style={{ top: "50%", left: "50%", transformOrigin: "0 0" }}
				animate={{ rotate: 360 }}
				transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
			>
				<div
					className="w-3 h-3 rounded-full bg-white"
					style={{ transform: "translate(150px, -1.5px)" }}
				/>
			</motion.div>
		</div>
	);
};

// ─── Stat Badge ───────────────────────────────────────────────────────────────
const StatBadge = ({ value, label, delay }: StatProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<motion.div
			ref={ref}
			className="border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-4 relative overflow-hidden"
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay, duration: 0.6 }}
			whileHover={{
				borderColor: "rgba(255,255,255,0.6)",
				backgroundColor: "rgba(255,255,255,0.1)",
			}}
		>
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
				animate={{ opacity: [0, 0.5, 0] }}
				transition={{ duration: 3, repeat: Infinity, delay }}
			/>
			<div className={`text-3xl font-bold text-white ${bebas.className}`}>
				{value}
			</div>
			<div
				className={`text-xs text-white/50 mt-1 uppercase tracking-widest ${spaceGrotesk.className}`}
			>
				{label}
			</div>
		</motion.div>
	);
};

// ─── Section Card ─────────────────────────────────────────────────────────────
const SectionCard = ({ index, tag, title, body, icon }: SectionCardProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			ref={ref}
			className="relative border border-white/15 bg-black overflow-hidden group cursor-default"
			initial={{ opacity: 0, y: 60 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 0.8,
				delay: index * 0.15,
				ease: [0.16, 1, 0.3, 1],
			}}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
			whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
		>
			{/* Scan-line effect */}
			<AnimatePresence>
				{hovered && (
					<motion.div
						className="absolute inset-x-0 h-px bg-white/30"
						initial={{ top: 0 }}
						animate={{ top: "100%" }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.6, ease: "linear" }}
					/>
				)}
			</AnimatePresence>

			{/* Index number watermark */}
			<div
				className={`absolute top-4 right-6 text-[80px] font-bold text-white/[0.04] leading-none select-none ${bebas.className}`}
			>
				0{index + 1}
			</div>

			<div className="p-8 md:p-12 relative z-10">
				{/* Tag */}
				<div className="flex items-center gap-3 mb-8">
					<div className="w-8 h-px bg-white/40" />
					<span
						className={`text-[11px] uppercase tracking-[0.3em] text-white/50 ${spaceGrotesk.className}`}
					>
						{tag}
					</span>
				</div>

				{/* Icon */}
				<motion.div
					className="w-14 h-14 border border-white/20 flex items-center justify-center mb-8 text-white"
					animate={
						hovered
							? { borderColor: "rgba(255,255,255,0.6)", scale: 1.05 }
							: { borderColor: "rgba(255,255,255,0.2)", scale: 1 }
					}
					transition={{ duration: 0.3 }}
				>
					{icon}
				</motion.div>

				{/* Title */}
				<h2
					className={`text-4xl md:text-5xl text-white leading-[1.05] mb-8 ${bebas.className}`}
				>
					{title}
				</h2>

				{/* Body */}
				<p
					className={`text-white/60 leading-relaxed text-[15px] max-w-2xl ${spaceGrotesk.className}`}
				>
					{body}
				</p>

				{/* Bottom line */}
				<motion.div
					className="mt-10 h-px bg-white/10"
					animate={
						hovered
							? { backgroundColor: "rgba(255,255,255,0.3)", scaleX: 1.02 }
							: {}
					}
					transition={{ duration: 0.4 }}
				/>
			</div>
		</motion.div>
	);
};

// ─── Noise Texture Overlay ────────────────────────────────────────────────────
const NoiseOverlay = () => (
	<svg
		className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-50"
		style={{ mixBlendMode: "overlay" }}
	>
		<filter id="noise">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="0.65"
				numOctaves="3"
				stitchTiles="stitch"
			/>
		</filter>
		<rect width="100%" height="100%" filter="url(#noise)" />
	</svg>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const MissionPage = () => {
	const { scrollYProgress } = useScroll();
	const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
	const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div
			className={`bg-black min-h-screen text-white ${bebas.variable} ${spaceGrotesk.variable} ${dmSerif.variable} overflow-x-hidden`}
		>
			<NoiseOverlay />

			{/* ── HERO ──────────────────────────────────────────────────────────── */}
			<motion.section
				className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24"
				style={{ y: heroY, opacity: heroOpacity }}
			>
				{/* Background grid */}
				<div
					className="absolute inset-0 opacity-[0.04]"
					style={{
						backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
						backgroundSize: "80px 80px",
					}}
				/>

				{/* Corner decoration */}
				<div className="absolute top-8 left-6 md:left-16">
					<div className="flex items-center gap-3">
						<motion.div
							className="w-2 h-2 rounded-full bg-white"
							animate={{ scale: [1, 1.5, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
						<span
							className={`text-[11px] uppercase tracking-[0.3em] text-white/40 ${spaceGrotesk.className}`}
						>
							INDATWA · Education Initiative
						</span>
					</div>
				</div>

				<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
					{/* Left: Text */}
					<div>
						<motion.div
							className="flex items-center gap-4 mb-8"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
						>
							<div className="h-px w-12 bg-white/40" />
							<span
								className={`text-[11px] uppercase tracking-[0.4em] text-white/40 ${spaceGrotesk.className}`}
							>
								Our Purpose
							</span>
						</motion.div>

						<motion.h1
							className={`text-[72px] sm:text-[96px] md:text-[120px] leading-[0.9] font-bold text-white ${bebas.className}`}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.9,
								delay: 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							CHANG
							<br />
							<span className="relative inline-block">
								ING{" "}
								<span className="relative text-stroke">
									EDUC
									<motion.span
										className="absolute bottom-0 left-0 w-full h-[3px] bg-white"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
									/>
								</span>
							</span>
							<br />
							ATION
						</motion.h1>

						<motion.p
							className={`mt-8 text-white/50 max-w-md leading-relaxed text-[15px] ${spaceGrotesk.className}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
						>
							Transforming public basic education across Gasabo district — one
							student, one career, one future at a time.
						</motion.p>

						<motion.div
							className="flex gap-2 mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.6 }}
						>
							<motion.button
								className={`px-8 py-3 border border-white text-white text-sm tracking-widest uppercase ${spaceGrotesk.className}`}
								whileHover={{ backgroundColor: "white", color: "black" }}
								transition={{ duration: 0.2 }}
							>
								Our Mission
							</motion.button>
							<motion.button
								className={`px-8 py-3 border border-white/20 text-white/50 text-sm tracking-widest uppercase ${spaceGrotesk.className}`}
								whileHover={{
									borderColor: "rgba(255,255,255,0.6)",
									color: "white",
								}}
								transition={{ duration: 0.2 }}
							>
								Learn More ↓
							</motion.button>
						</motion.div>
					</div>

					{/* Right: 3D Africa Map */}
					<motion.div
						className="flex items-center justify-center"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
					>
						<AfricaMap />
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<span
						className={`text-[10px] text-white/30 tracking-[0.3em] uppercase ${spaceGrotesk.className}`}
					>
						Scroll
					</span>
					<div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
				</motion.div>
			</motion.section>

			{/* ── STATS ─────────────────────────────────────────────────────────── */}
			<section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
				<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
					<StatBadge
						value="7%"
						label="Annual Dropout Rate · Gasabo"
						delay={0}
					/>
					<StatBadge
						value="15.21%"
						label="Drop in Secondary → Higher Ed"
						delay={0.1}
					/>
					<StatBadge
						value="80%"
						label="Target Transition Rate Increase"
						delay={0.2}
					/>
					<StatBadge
						value="10 YRS"
						label="Implementation Horizon"
						delay={0.3}
					/>
				</div>
			</section>

			{/* ── DIVIDER TEXT ──────────────────────────────────────────────────── */}
			<div className="overflow-hidden border-y border-white/10 py-4">
				<motion.div
					className={`flex gap-16 whitespace-nowrap text-white/10 text-5xl ${bebas.className}`}
					animate={{ x: ["0%", "-50%"] }}
					transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
				>
					{Array(6)
						.fill("INDATWA · GASABO · RWANDA · EDUCATION · AFRICA")
						.map((t, i) => (
							<span key={i}>{t} &nbsp; · &nbsp;</span>
						))}
				</motion.div>
			</div>

			{/* ── THREE PILLARS ─────────────────────────────────────────────────── */}
			<section className="px-6 md:px-16 lg:px-24 py-24">
				<div className="max-w-7xl mx-auto">
					{/* Section header */}
					<motion.div
						className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div>
							<div className="flex items-center gap-3 mb-3">
								<div className="w-8 h-px bg-white/40" />
								<span
									className={`text-[11px] uppercase tracking-[0.4em] text-white/40 ${spaceGrotesk.className}`}
								>
									Three Pillars
								</span>
							</div>
							<h2
								className={`text-5xl md:text-6xl text-white ${bebas.className}`}
							>
								PROBLEM · MISSION · SOLUTION
							</h2>
						</div>
						<p
							className={`text-white/40 text-sm max-w-xs leading-relaxed md:text-right ${spaceGrotesk.className}`}
						>
							A structured approach to transforming education in Rwanda and
							across Africa.
						</p>
					</motion.div>

					{/* Cards */}
					<div className="flex flex-col gap-4">
						{/* PROBLEM */}
						<SectionCard
							index={0}
							tag="The Challenge"
							title="THE PROBLEM WE SEE"
							accent="#ffffff"
							icon={
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
								</svg>
							}
							body="According to EDUGIST, the Rwandan education system focuses on improving access to and quality of education. However, in districts like Gasabo, there is a high dropout rate of about 7% yearly from public high school due to challenges like being taught practical subjects theoretically due to lack of facilities, paying for food within school premises, and lack of exposure to different careers. According to the Ministry of Education (2024), the transition rate from secondary school to higher education has dropped significantly by 15.21%, from 58.5% to 49.6%. Rwanda's current competence-based curriculum is not aligned with modern career opportunities, leaving students disengaged and unaware of how their education connects to their future. Without urgent intervention, students will continue losing interest in pursuing studies beyond secondary level, perpetuating the cycle of limited opportunity. How can we make learning more engaging and expose students to diverse careers to increase the transition rate by 80% over the next 10 years?"
						/>

						{/* MISSION */}
						<SectionCard
							index={1}
							tag="Our Purpose"
							title="OUR MISSION"
							accent="#ffffff"
							icon={
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<circle cx="12" cy="12" r="10" />
									<circle cx="12" cy="12" r="3" />
									<path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
								</svg>
							}
							body="Our mission as INDATWA is to improve the public basic education for the Gasabo district in order to create a quality education for every African child. We believe that every child deserves access to an education that is meaningful, career-aligned, and empowering — one that opens doors rather than closes them. Through technology, collaboration, and community, we are building bridges between where students are today and where they could be tomorrow."
						/>

						{/* SOLUTION */}
						<SectionCard
							index={2}
							tag="Our Approach"
							title="THE SOLUTION"
							accent="#ffffff"
							icon={
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
								</svg>
							}
							body="After a thorough analysis of Rwanda's public basic education system, our solution at INDATWA is to update the senior secondary curriculum for public schools through an app, working closely with public secondary schools around Gasabo. The App will be career-focused with key features including Career-Aligned Subject Combinations, an Annual Teaching Plan for teachers, Examination Guidelines for students, performance monitoring systems, digital professional development for teachers each term, collaborative learning, beyond-the-classroom learning, and active learning. This will help learners choose subjects aligned to their career choices, avoiding time wasted on non-beneficial subjects and motivating them to further their studies after secondary school. We will first implement it in one district's public schools, measure results, then it will be the Rwanda Examination Board's decision to implement it nationally. Our app-based curriculum is unique as it is diverse, with wider opinions from the best African public schools' curricula."
						/>
					</div>
				</div>
			</section>

			{/* ── APP FEATURE PILLS ─────────────────────────────────────────────── */}
			<section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="mb-10"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-3 mb-3">
							<div className="w-8 h-px bg-white/40" />
							<span
								className={`text-[11px] uppercase tracking-[0.4em] text-white/40 ${spaceGrotesk.className}`}
							>
								App Features
							</span>
						</div>
						<h3 className={`text-4xl text-white ${bebas.className}`}>
							KEY CAPABILITIES
						</h3>
					</motion.div>

					<div className="flex flex-wrap gap-3">
						{[
							"Career-Aligned Subject Combinations",
							"Annual Teaching Plan",
							"Examination Guidelines",
							"Performance Monitoring",
							"Digital Professional Development",
							"Collaborative Learning",
							"Beyond-Classroom Learning",
							"Active Learning",
						].map((feature, i) => (
							<motion.div
								key={feature}
								className={`border border-white/20 px-5 py-2.5 text-sm text-white/70 ${spaceGrotesk.className}`}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.07, duration: 0.5 }}
								whileHover={{
									borderColor: "rgba(255,255,255,0.6)",
									color: "white",
									backgroundColor: "rgba(255,255,255,0.05)",
								}}
							>
								{feature}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── CLOSING CTA ───────────────────────────────────────────────────── */}
			<section className="px-6 md:px-16 lg:px-24 py-32 border-t border-white/10 relative overflow-hidden">
				{/* Background pulse */}
				<motion.div
					className="absolute inset-0 flex items-center justify-center pointer-events-none"
					animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
					transition={{ duration: 5, repeat: Infinity }}
				>
					<div className="w-[600px] h-[600px] rounded-full border border-white" />
				</motion.div>

				<div className="max-w-4xl mx-auto text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
					>
						<span
							className={`text-[11px] uppercase tracking-[0.4em] text-white/30 ${spaceGrotesk.className}`}
						>
							Join the Movement
						</span>
						<h2
							className={`text-[64px] md:text-[96px] text-white leading-[0.9] mt-4 mb-8 ${bebas.className}`}
						>
							QUALITY EDUCATION FOR EVERY AFRICAN CHILD
						</h2>
						<p
							className={`text-white/40 max-w-xl mx-auto leading-relaxed mb-12 ${spaceGrotesk.className}`}
						>
							Together, we can break the cycle. The next generation of African
							innovators, leaders, and changemakers starts with the right
							education today.
						</p>

						{/* Image placeholder note */}
						<div className="relative overflow-hidden rounded-2xl">
							<DitherShader
								src="/images/indatwa.jpeg"
								gridSize={1}
								ditherMode="bayer"
								colorMode="original"
								className="h-[80vh] w-full "
							/>
						</div>
					</motion.div>
				</div>
			</section>

			<SiteFooter />
		</div>
	);
};

export default MissionPage;

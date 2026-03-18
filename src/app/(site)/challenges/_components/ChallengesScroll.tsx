"use client";

import { createPlayer, videoFeatures } from "@videojs/react";
import { CalendarDays, CheckCircle2, Hash, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CometCard } from "@/components/ui/comet-card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { type Challenge, ELabChallenges } from "@/const/e-lab-challengs";

const Player = createPlayer({ features: videoFeatures });

const TOTAL = ELabChallenges.length;
const ROUNDS = 5;
const START = 2;

function buildList(done: boolean[]) {
	return Array.from({ length: ROUNDS }, (_, r) =>
		ELabChallenges.map((ch, i) => ({
			...ch,
			completed: done[i],
			instanceKey: `${r}-${i}`,
		})),
	).flat();
}

// ─── Smoky canvas blob ────────────────────────────────────────────────────────
function SmokyBlob({ size = 260, seed = 1 }: { size?: number; seed?: number }) {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		canvas.width = canvas.height = size;
		let raf: number;

		const draw = (t: number) => {
			ctx.clearRect(0, 0, size, size);
			const cx = size / 2,
				cy = size / 2,
				r = size * 0.29;
			const count = 11 + (seed % 4);

			for (let i = 0; i < count; i++) {
				const a = (i / count) * Math.PI * 2 + t * 0.0025 + seed * 0.4;
				const jt = Math.sin(t * 0.006 + i * 1.4 + seed) * 7;
				const bx = cx + (r + jt) * Math.cos(a);
				const by = cy + (r + jt) * Math.sin(a);
				const bs = 20 + Math.sin(t * 0.004 + i * 0.9 + seed) * 9;
				const g = ctx.createRadialGradient(bx, by, 0, bx, by, bs);
				g.addColorStop(0, "rgba(255,255,255,0.6)");
				g.addColorStop(0.45, "rgba(255,255,255,0.2)");
				g.addColorStop(1, "rgba(255,255,255,0)");
				ctx.beginPath();
				ctx.arc(bx, by, bs, 0, Math.PI * 2);
				ctx.fillStyle = g;
				ctx.fill();
			}
			raf = requestAnimationFrame(draw);
		};

		raf = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(raf);
	}, [size, seed]);

	return (
		<canvas ref={ref} style={{ width: size, height: size, display: "block" }} />
	);
}

// ─── Mini metaball cluster ────────────────────────────────────────────────────
function MetaCluster({
	size = 88,
	seed = 1,
}: {
	size?: number;
	seed?: number;
}) {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		canvas.width = canvas.height = size;
		let raf: number;

		const blobs = [
			{ ox: 0, oy: 0, r: 0.22 },
			{ ox: -14, oy: -10, r: 0.16 },
			{ ox: 14, oy: -10, r: 0.16 },
			{ ox: 0, oy: 14, r: 0.14 },
			{ ox: -10, oy: 10, r: 0.12 },
			{ ox: 10, oy: 10, r: 0.12 },
		];

		const draw = (t: number) => {
			ctx.clearRect(0, 0, size, size);
			const cx = size / 2,
				cy = size / 2;
			blobs.forEach(({ ox, oy, r }, i) => {
				const px = cx + ox + Math.sin(t * 0.004 + i * 1.1 + seed) * 3;
				const py = cy + oy + Math.cos(t * 0.003 + i * 0.9 + seed) * 3;
				const rad = r * size;
				const g = ctx.createRadialGradient(px, py, 0, px, py, rad);
				g.addColorStop(0, "rgba(255,255,255,0.68)");
				g.addColorStop(0.5, "rgba(255,255,255,0.22)");
				g.addColorStop(1, "rgba(255,255,255,0)");
				ctx.beginPath();
				ctx.arc(px, py, rad, 0, Math.PI * 2);
				ctx.fillStyle = g;
				ctx.fill();
			});
			raf = requestAnimationFrame(draw);
		};

		raf = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(raf);
	}, [size, seed]);

	return (
		<canvas ref={ref} style={{ width: size, height: size, display: "block" }} />
	);
}

// ─── Progress sidebar ─────────────────────────────────────────────────────────
function ProgressSidebar({
	done,
	active,
}: {
	done: boolean[];
	active: number;
}) {
	return (
		<aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center select-none">
			<div className="w-px h-8 bg-white/10" />
			{ELabChallenges.map((_, i) => (
				<div key={i} className="flex flex-col items-center">
					<span
						className="rounded-full transition-all duration-300"
						style={{
							width: i === active ? 8 : done[i] ? 7 : 5,
							height: i === active ? 8 : done[i] ? 7 : 5,
							background:
								i === active
									? "rgba(255,255,255,0.9)"
									: done[i]
										? "rgba(255,255,255,0.6)"
										: "rgba(255,255,255,0.18)",
							boxShadow:
								i === active ? "0 0 8px 3px rgba(255,255,255,0.4)" : "none",
						}}
					/>
					{i < TOTAL - 1 && (
						<span
							className="w-px transition-all duration-500"
							style={{
								height: 20,
								background: done[i]
									? "rgba(255,255,255,0.28)"
									: "rgba(255,255,255,0.07)",
							}}
						/>
					)}
				</div>
			))}
			<div className="w-px h-8 bg-white/10" />
			{/* ← fixed: reads from completedCount directly */}
			<p
				className="mt-2 font-mono text-[9px] tracking-widest text-white/30"
				style={{ writingMode: "vertical-rl" }}
			>
				{active + 1}/{TOTAL}
			</p>
		</aside>
	);
}

// ─── Slide row — one challenge ────────────────────────────────────────────────
// Layout rule (matching the image):
//   ODD  id (1,3,5,7): image LEFT  → line → title RIGHT  (like "Particles")
//   EVEN id (2,4,6):   title LEFT  → line → mini-blob RIGHT (like "Metaballs")
function ChallengeRow({
	ch,
	onClick,
}: {
	ch: Challenge & { instanceKey: string };
	onClick: () => void;
}) {
	const isLeft = ch.id % 2 === 1; // odd → image on left

	const isThrid = ch.id % 3 === 0;
	return (
		<div
			onClick={onClick}
			className="relative w-full flex items-center cursor-pointer group"
			style={{ height: "50vh" }}
		>
			{/* ── Far-left short tick ── */}
			<div
				className="absolute left-8 top-1/2 -translate-y-1/2 h-px bg-white/22"
				style={{ width: 48 }}
			/>

			{isThrid && <MetaCluster size={90} seed={ch.id * 7} />}

			{isLeft ? (
				// ── ODD: [image LEFT] ──── line ──── [tag + title RIGHT] ──
				<>
					<div className=" ml-22">
						<CometCard>
							<button
								type="button"
								className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2  z-30"
								aria-label="View invite F7RA"
								style={{
									transformStyle: "preserve-3d",
									transform: "none",
									opacity: 1,
								}}
							>
								<div className="mx-2 flex-1">
									<div className="relative mt-2 aspect-[3/4] w-full size-80">
										<Image
											src={ch.image}
											alt="Invite background"
											className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
											style={{
												boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
												opacity: 1,
											}}
											fill
										/>
									</div>
								</div>
							</button>
						</CometCard>
					</div>

					{/* Horizontal line: starts at right edge of image card, ends just before title */}
					{/* We use a flex row trick: position line between image and title */}
					<div
						className="absolute h-px bg-white/15"
						style={{
							left: "clamp(290px, 33vw, 510px)", // right edge of image
							right: "clamp(220px, 26vw, 400px)", // left edge of title block
							top: "50%",
						}}
					/>

					{/* Tag + Title — RIGHT side */}
					<div className="absolute right-10 top-1/2 -translate-y-1/2 text-right bg-base-100">
						{/* tag number sits above the title */}
						<p className="font-mono text-[10px] tracking-widest text-white/30 mb-1">
							{ch.tag}
						</p>
						<h2
							className="font-display font-light text-white/65 tracking-tight leading-none"
							style={{ fontSize: "clamp(44px, 7vw, 110px)" }}
						>
							{ch.title}
						</h2>
					</div>
				</>
			) : (
				// ── EVEN: [tag + title LEFT] ──── line ──── [mini-blob RIGHT] ──
				<>
					{/* Tag + Title — LEFT side */}
					<div
						className="absolute top-1/2 -translate-y-1/2 text-left bg-base-100 z-10 pr-4"
						style={{ left: "clamp(80px, 10vw, 200px)" }}
					>
						{/* tag above title */}
						<p className="font-mono text-[10px] tracking-widest text-white/30 mb-1 ">
							{ch.label}
						</p>
						<h2
							className="font-display font-light text-white/65 tracking-tight leading-none bg-base-100"
							style={{ fontSize: "clamp(44px, 7vw, 110px)" }}
						>
							{ch.title}
						</h2>
					</div>

					{/* Horizontal line: starts at right edge of title, ends before mini-blob */}
					<div
						className="absolute h-px bg-white/12"
						style={{
							left: "clamp(290px, 35vw, 540px)", // after title
							right: "clamp(160px, 18vw, 280px)", // before blob
							top: "50%",
						}}
					/>

					{/* Mini metaball cluster — RIGHT side */}
					<div className=" flex justify-end w-full pr-12">
						<CometCard>
							<button
								type="button"
								className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2  z-30"
								aria-label="View invite F7RA"
								style={{
									transformStyle: "preserve-3d",
									transform: "none",
									opacity: 1,
								}}
							>
								<div className="mx-2 flex-1">
									<div className="relative mt-2 aspect-[3/4] w-full size-80">
										<Image
											src={ch.image}
											alt="Invite background"
											className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
											style={{
												boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
												opacity: 1,
											}}
											fill
										/>
									</div>
								</div>
							</button>
						</CometCard>
					</div>
				</>
			)}
			{/* Hover shimmer */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.012] to-transparent" />
		</div>
	);
}

// ─── Challenge dialog ─────────────────────────────────────────────────────────
function ChallengeDialog({
	ch,
	open,
	onOpenChange,
	onComplete,
}: {
	ch: Challenge | null;
	open: boolean;
	onOpenChange: (v: boolean) => void;
	onComplete: (id: number) => void;
}) {
	if (!ch) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				className="  sm:max-w-4xl  max-h-[88vh] overflow-y-auto p-0 gap-0
          bg-base-100 border border-white/10 rounded-none"
				style={{ scrollbarWidth: "none" }}
			>
				{/* Visual header */}
				<div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center border-b border-white/8 bg-[#0e0e0e]">
					<div className="absolute z-10 w-36 h-28 rounded-xl overflow-hidden border border-white/10 bg-white/5">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={ch.image}
							alt={ch.name}
							className="w-full h-full object-cover opacity-55"
							onError={(e) =>
								((e.target as HTMLImageElement).style.display = "none")
							}
						/>
					</div>
					<span className="absolute top-4 left-5 font-mono text-[10px] tracking-widest text-white/30">
						{ch.label}
					</span>
				</div>

				{/* Body */}
				<div className="p-8 pb-10">
					<DialogHeader>
						<div className="flex justify-between items-start mb-5">
							<div>
								<div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase mb-2 text-white/32">
									<Hash className="w-3 h-3" /> Challenge {ch.id} of {TOTAL}
								</div>
								<DialogTitle className="font-display text-2xl font-light text-white/85 tracking-tight">
									{ch.name}
								</DialogTitle>
							</div>
							<div className="text-right font-mono text-xs text-white/28 leading-relaxed">
								<div className="flex items-center justify-end gap-1 text-[10px] tracking-widest mb-0.5 text-white/28">
									<CalendarDays className="w-3 h-3" /> DATE
								</div>
								<p>{ch.time}</p>
							</div>
						</div>
					</DialogHeader>

					<div className="w-full h-px mb-6 bg-gradient-to-r from-white/18 via-white/5 to-transparent" />

					<DialogDescription className="text-white/50 text-[15px] leading-relaxed mb-8">
						{ch.description}
					</DialogDescription>

					{ch.video && (
						<div className="mb-8">
							<p className="font-mono text-[10px] tracking-widest uppercase mb-3 text-white/28">
								— Video
							</p>
							<div className="flex items-center gap-3 p-4 bg-white/[0.025] border border-white/8">
								<div className="w-10 h-10 rounded-full border border-white/18 flex items-center justify-center flex-shrink-0 text-white/45">
									<Play className="w-4 h-4 fill-current" />
								</div>
								<div>
									<p className="text-white/55 text-sm">
										{ch.video.split("/").pop()}
									</p>
									<p className="font-mono text-[9px] text-white/22 tracking-widest mt-0.5">
										CHALLENGE RECORDING
									</p>
								</div>
							</div>
						</div>
					)}

					<Separator className="mb-6 bg-white/8" />

					{!ch.completed ? (
						<Button
							variant="outline"
							className="w-full font-mono text-xs tracking-widest uppercase rounded-none h-11
                bg-transparent border-white/18 text-white/48 hover:bg-white/5 hover:text-white/80
                hover:border-white/32 transition-all duration-200"
							onClick={() => {
								onComplete(ch.id);
								onOpenChange(false);
							}}
						>
							Mark as Completed
						</Button>
					) : (
						<div className="w-full py-3 text-center font-mono text-xs tracking-widest text-white/22 border border-white/8 flex items-center justify-center gap-2">
							<CheckCircle2 className="w-3.5 h-3.5" /> Already Completed
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function ChallengesScroll() {
	const [done, setDone] = useState<boolean[]>(Array(TOTAL).fill(false));
	const [active, setActive] = useState(0); // 0..6
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<Challenge | null>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const itemH = typeof window !== "undefined" ? window.innerHeight / 2 : 400; // each row = 50vh
	const items = buildList(done);

	// Each "page" shows 2 rows (100vh = 2 × 50vh rows).
	// We snap per row (50vh). active = current visible row index mod TOTAL.
	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.scrollTop = START * TOTAL * itemH;
	}, [itemH]);

	const onScroll = useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		const idx = Math.round(el.scrollTop / itemH);
		setActive(idx % TOTAL);
		if (idx < TOTAL) el.scrollTop += TOTAL * 2 * itemH;
		else if (idx > TOTAL * (ROUNDS - 2)) el.scrollTop -= TOTAL * 2 * itemH;
	}, [itemH]);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", onScroll, { passive: true });
		return () => el.removeEventListener("scroll", onScroll);
	}, [onScroll]);

	// ← fixed: always pass latest done array into markComplete
	const markComplete = useCallback((id: number) => {
		setDone((prev) => {
			const next = [...prev];
			next[id - 1] = true;
			return next;
		});
	}, []);

	const handleOpen = (ch: (typeof items)[0]) => {
		// ← fixed: use current done state to set completed correctly
		setSelected({ ...ch, completed: done[ch.id - 1] });
		setOpen(true);
	};

	// Keep selected in sync when done changes (re-opening shows correct state)
	useEffect(() => {
		if (selected) {
			setSelected((prev) =>
				prev ? { ...prev, completed: done[prev.id - 1] } : null,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [done]);

	return (
		<div className="grain vignette relative w-screen h-screen overflow-hidden  px-8">
			<ProgressSidebar done={done} active={active} />

			{/* ── Scroll container — each row is 50vh, snaps per row ── */}
			<div
				ref={scrollRef}
				className="w-full h-full overflow-y-scroll space-y-12"
				style={{ scrollSnapType: "y mandatory", scrollbarWidth: "none" }}
			>
				{items.map((ch) => (
					<ChallengeRow
						key={ch.instanceKey}
						ch={ch}
						onClick={() => handleOpen(ch)}
					/>
				))}
			</div>

			<ChallengeDialog
				ch={selected}
				open={open}
				onOpenChange={setOpen}
				onComplete={markComplete}
			/>
		</div>
	);
}

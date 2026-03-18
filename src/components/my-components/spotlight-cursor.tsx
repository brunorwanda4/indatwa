"use client";
import { useEffect, useRef } from "react";

interface SpotlightCursorProps {
	disabled?: boolean;
}

export function SpotlightCursor({ disabled = false }: SpotlightCursorProps) {
	const dotRef = useRef<HTMLDivElement>(null);
	const ringRef = useRef<HTMLDivElement>(null);
	const mx = useRef(0);
	const my = useRef(0);
	const scale = useRef(1);
	const targetScale = useRef(1);
	const isHovering = useRef(false);

	useEffect(() => {
		if (disabled) {
			document.body.style.cursor = "";
			return;
		}
		document.body.style.cursor = "none";

		const style = document.createElement("style");
		style.innerHTML = `
    * { cursor: none !important; }
    a, button, [role="button"], label {
        cursor: pointer !important;
    }
    a, button, [role="button"], label {
        transition: color 0.15s ease;
    }
`;
		document.head.appendChild(style);

		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d")!;
		canvas.style.cssText = `
			position: fixed; inset: 0;
			width: 100vw; height: 100vh;
			pointer-events: none; z-index: 9990;
		`;
		document.body.appendChild(canvas);

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener("resize", resize);

		const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

		const draw = (x: number, y: number, s: number) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const max = Math.max(canvas.width, canvas.height);

			const outer = ctx.createRadialGradient(x, y, 0, x, y, max * 0.8);
			outer.addColorStop(0, "rgba(255,255,255,0.18)");
			outer.addColorStop(0.12, "rgba(255,255,255,0.10)");
			outer.addColorStop(0.35, "rgba(255,255,255,0.04)");
			outer.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = outer;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			const haloR = 60 + s * 30;
			const halo = ctx.createRadialGradient(x, y, 0, x, y, haloR);
			halo.addColorStop(0, "rgba(255,255,240,0.65)");
			halo.addColorStop(0.5, "rgba(255,255,220,0.25)");
			halo.addColorStop(1, "rgba(0,0,0,0)");
			ctx.beginPath();
			ctx.arc(x, y, haloR, 0, Math.PI * 2);
			ctx.fillStyle = halo;
			ctx.fill();

			const coreR = 20 + s * 8;
			const core = ctx.createRadialGradient(x, y, 0, x, y, coreR);
			core.addColorStop(0, "rgba(255,255,255,1)");
			core.addColorStop(0.5, "rgba(255,255,240,0.6)");
			core.addColorStop(1, "rgba(255,255,220,0)");
			ctx.beginPath();
			ctx.arc(x, y, coreR, 0, Math.PI * 2);
			ctx.fillStyle = core;
			ctx.fill();
		};

		const loop = () => {
			scale.current = lerp(scale.current, targetScale.current, 0.12);
			draw(mx.current, my.current, scale.current);

			const dot = dotRef.current;
			const ring = ringRef.current;

			if (dot) {
				dot.style.left = `${mx.current}px`;
				dot.style.top = `${my.current}px`;
				dot.style.backgroundColor = isHovering.current
					? "var(--color-base-content)"
					: "var(--color-base-100)";
			}

			if (ring) {
				const rs = 32 + scale.current * 20;
				ring.style.left = `${mx.current}px`;
				ring.style.top = `${my.current}px`;
				ring.style.width = `${rs}px`;
				ring.style.height = `${rs}px`;
				ring.style.opacity = scale.current > 1.3 ? "1" : "0";
			}

			requestAnimationFrame(loop);
		};
		loop();

		const onMove = (e: MouseEvent) => {
			mx.current = e.clientX;
			my.current = e.clientY;
		};
		window.addEventListener("mousemove", onMove);

		const onEnter = () => {
			targetScale.current = 4;
			isHovering.current = true;
		};

		const onLeave = () => {
			targetScale.current = 1;
			isHovering.current = false;
		};

		const addListeners = () => {
			document
				.querySelectorAll("a, button, [role='button'], label")
				.forEach((el) => {
					el.addEventListener("mouseenter", onEnter);
					el.addEventListener("mouseleave", onLeave);
				});
		};
		addListeners();

		const observer = new MutationObserver(addListeners);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			document.body.style.cursor = "";
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMove);
			observer.disconnect();
			canvas.remove();
			style.remove();
		};
	}, [disabled]);

	if (disabled) return null;
	return (
		<>
			{/* dot — mix-blend-mode difference inverts text color under cursor */}
			<div
				ref={dotRef}
				style={{
					position: "fixed",
					width: 8,
					height: 8,
					borderRadius: "50%",
					backgroundColor: "var(--color-base-content)",
					mixBlendMode: "difference",
					pointerEvents: "none",
					zIndex: 9999,
					transition: "background-color 0.15s ease",
					transform: "translate(-50%, -50%)",
				}}
			/>

			{/* ring — outline only, appears and grows on hover */}
			<div
				ref={ringRef}
				style={{
					position: "fixed",
					borderRadius: "50%",
					border: "1px solid var(--color-base-content)",
					background: "transparent",
					pointerEvents: "none",
					zIndex: 9998,
					transform: "translate(-50%, -50%)",
					transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
				}}
			/>
		</>
	);
}

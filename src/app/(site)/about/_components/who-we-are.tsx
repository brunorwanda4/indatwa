"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhoWeAre = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div ref={ref} className="px-40 space-y-4">
			<div className="overflow-hidden">
				<motion.h2
					className="text-xl  text-neutral-400 font-light"
					initial={{ y: 60, opacity: 0 }}
					animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
					transition={{
						duration: 0.7,
						delay: 0.1,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					We Were Never the Problem
				</motion.h2>
			</div>

			<div className="overflow-hidden">
				<motion.p
					className="text-2xl font-inter font-light"
					initial={{ y: 80, opacity: 0 }}
					animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
					transition={{
						duration: 0.9,
						delay: 0.28,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					Our education systems were designed to produce workers, not problem
					solvers, training us to follow instructions instead of questioning and
					creating. As a result, many real challenges across Africa remain
					unsolved not because of a lack of potential, but because of how we
					were taught to think.
					<br />
					<br />
					We see this gap as an opportunity to rethink learning, empower voices
					especially women and build solutions rooted in our own realities. At
					Indatwa, we are choosing to learn differently, think critically, and
					create impact where it matters most.
				</motion.p>
			</div>
		</div>
	);
};

export default WhoWeAre;

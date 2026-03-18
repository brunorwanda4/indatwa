"use client";
import Image from "next/image";
import React from "react";
import {
	DraggableCardBody,
	DraggableCardContainer,
} from "@/components/ui/draggable-card";

const GroupMembers = () => {
	const items = [
		{
			title: "Bruno Rwanda",
			country: "Rwanda",
			image: "/images/Bruno.jpg",
			className: "absolute top-10 left-[20%] rotate-[-5deg]",
		},
		{
			title: "Rebecca Isaboke",
			country: "Kenya",
			image: "/images/Rebecca.jpeg",
			className: "absolute top-40 left-[25%] rotate-[-7deg]",
		},
		{
			title: "Shawn Bamigboye",
			country: "Nigeria",
			image: "/images/Shawn.jpeg",
			className: "absolute top-5 left-[40%] rotate-[8deg]",
		},
		{
			title: "Roheya Touray",
			country: "Gambia",
			image: "/images/Roheya.jpeg",
			className: "absolute top-32 left-[55%] rotate-[10deg]",
		},
		{
			title: "Refilwe Junior Sodlulashe",
			country: "South Africa",
			image: "/images/Refilwe.jpeg",
			className: "absolute top-20 right-[35%] rotate-[2deg]",
		},
	];
	return (
		<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center ">
			{items.map((item) => (
				<DraggableCardBody key={item.title} className={item.className}>
					<div className=" relative size-60">
						<Image
							src={item.image}
							alt={item.title}
							className="pointer-events-none relative z-10 object-cover"
							fill
							priority
						/>
					</div>
					<h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
						{item.title}
					</h3>
					<span className="mt-2 block text-center text-sm text-neutral-500 dark:text-neutral-400">
						{item.country}
					</span>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	);
};

export default GroupMembers;

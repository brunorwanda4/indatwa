"use client";
import React from "react";
import {
	DraggableCardBody,
	DraggableCardContainer,
} from "@/components/ui/draggable-card";

const GroupMembers = () => {
	const items = [
		{
			title: "Tyler Durden",
			country: "Rwanda",
			image:
				"https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-10 left-[20%] rotate-[-5deg]",
		},
		{
			title: "The Narrator",
			image:
				"https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-40 left-[25%] rotate-[-7deg]",
		},
		{
			title: "Iceland",
			image:
				"https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-5 left-[40%] rotate-[8deg]",
		},
	];
	return (
		<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-end ">
			<div className=" relative justify- w-screen">
				{items.map((item) => (
					<DraggableCardBody className={item.className}>
						<img
							src={item.image}
							alt={item.title}
							className="pointer-events-none relative z-10 h-60 w-60 object-cover"
						/>
						<h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
							{item.title}
						</h3>
					</DraggableCardBody>
				))}
			</div>
		</DraggableCardContainer>
	);
};

export default GroupMembers;

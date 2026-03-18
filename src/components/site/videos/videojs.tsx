"use client";

import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { Video, VideoSkin } from "@videojs/react/video";
import { cn } from "@/lib/utils";

const Player = createPlayer({ features: videoFeatures });

interface VideoPlayerProps {
	src: string;
	className?: string;
}

export const VideoPlayer = ({ src, className }: VideoPlayerProps) => {
	return (
		<Player.Provider>
			<VideoSkin className={cn("", className)}>
				<Video src={src} playsInline />
			</VideoSkin>
		</Player.Provider>
	);
};

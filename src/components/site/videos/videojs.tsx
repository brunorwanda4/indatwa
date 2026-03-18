'use client';

import '@videojs/react/video/skin.css';
import { createPlayer, videoFeatures } from '@videojs/react';
import { VideoSkin, Video } from '@videojs/react/video';

const Player = createPlayer({ features: videoFeatures });


export const VideoPlayer = () => {
    const src = "https://ik.imagekit.io/axfsc2kmp/0312%20(2).mp4?updatedAt=1773503881671/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end";
  return (
    <Player.Provider>
      <VideoSkin>
        <Video src={src} playsInline />
      </VideoSkin>
    </Player.Provider>
  );
};
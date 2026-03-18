import { VideoPlayer } from "@/components/site/videos/videojs";
import Scales from "@/components/ui/scales";

const MissionVideo = () => {
	return (
    <div>
      <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden py-10 md:py-20">
            <div className="relative h-110 w-3xl rounded-lg bg-gray-100 dark:bg-neutral-800/50">
              <div className="absolute -inset-y-[30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
                <Scales size={8} className="rounded-lg" />
              </div>
              <div className="absolute -inset-y-[30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
                <Scales size={8} className="rounded-lg" />
              </div>
              <div className="absolute -inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
                <Scales size={8} className="rounded-lg" />
              </div>
              <div className="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
                <Scales size={8} className="rounded-lg" />
              </div>
              <div className="relative z-10 h-full w-full overflow-hidden rounded-none bg-white shadow-sm ring-1 shadow-black/10 ring-black/5 dark:bg-neutral-800">
             			<VideoPlayer />
              </div>
            </div>
          </div>

		</div>
	);
};

export default MissionVideo;

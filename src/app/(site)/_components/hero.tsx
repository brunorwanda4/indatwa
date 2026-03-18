import Link from "next/link";
import Scales from "@/components/ui/scales";
import HeroTextFlip from "./hero-text-flip";

const SiteHero = () => {
	return (
		<section className=" ">
			<Scales orientation="vertical" />
			<main className="">
				<HeroTextFlip />
			</main>
		</section>
	);
};

export default SiteHero;

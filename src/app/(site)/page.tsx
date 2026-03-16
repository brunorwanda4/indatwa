import HomeChallenge from "../_home/_components/home-challenge";
import HomeHero from "../_home/_components/home-hero";

export default function Home() {
  return (
    <div className=" flex flex-col gap-16">
      <HomeHero />
      <HomeChallenge />
      <div className="min-h-screen" />
    </div>
  );
}

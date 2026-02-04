import HomeChallenge from "../_home/_components/home-challenge";
import HomeHero from "../_home/_components/home-hero";
import HomeOpportunity from "../_home/_components/home-opportunity";

export default function Home() {
  return (
    <div className=" flex flex-col gap-16">
      <HomeHero />
      <HomeChallenge />
      <HomeOpportunity />
      <div className="min-h-screen" />
    </div>
  );
}

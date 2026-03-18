import SiteFooter from "@/components/site/common/site-footer";
import ChallengesScroll from "./_components/ChallengesScroll";

const ChallengesPage = () => {
	return (
		<div className="min-h-screen">
			<ChallengesScroll />
			<div>
				<SiteFooter />
			</div>
		</div>
	);
};

export default ChallengesPage;

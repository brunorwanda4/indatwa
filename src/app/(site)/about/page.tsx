import SiteFooter from "@/components/site/common/site-footer";
import SiteTheme from "@/components/themes/site-theme";
import AboutHero from "./_components/about-hero";
import GroupMembers from "./_components/about-members";
import WhoWeAre from "./_components/who-we-are";

const AboutPage = () => {
	return (
		<div className=" space-y-16 pt-20">
			<AboutHero />
			<GroupMembers />
			<WhoWeAre />
			<SiteFooter />
		</div>
	);
};

export default AboutPage;

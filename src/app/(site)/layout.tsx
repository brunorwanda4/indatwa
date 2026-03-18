// SiteLayout.tsx
"use client";
import { useState } from "react";
import { SpotlightCursor } from "@/components/my-components/spotlight-cursor";
import SiteNavbar from "@/components/site/common/site-navbar";
import Scales from "@/components/ui/scales";

const SiteLayout = (prompt: LayoutProps<"/">) => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<main className="font-inter max-w-7xl">
			<SpotlightCursor disabled={mobileNavOpen} />
			<SiteNavbar onMobileNavChange={setMobileNavOpen} />
			{prompt.children}
		</main>
	);
};

export default SiteLayout;

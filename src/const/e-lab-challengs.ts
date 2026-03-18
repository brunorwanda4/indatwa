export interface Challenge {
	id: number;
	label: string; // "001"
	tag: string; // "002"  ← shown above the subtitle/title
	name: string;
	title: string; // big word shown on slide  e.g. "Particles"
	description: string;
	image: string;
	video?: string;
	time: string;
	completed: boolean;
}

export const ELabChallenges: Omit<Challenge, "completed">[] = [
	{
		id: 1,
		label: "001",
		tag: "001",
		name: "Introduction",
		title: "Introduction",
		description:
			"We are Indatwa students from ALU — a generation reshaping how Africa learns and builds. This challenge introduces who we are, where we come from, and why we show up every day.",
		image: "/images/1.jpeg",
		video:
			"https://ik.imagekit.io/670koylwsb/WhatsApp%20Video%202026-03-18%20at%2020.49.51.mp4?updatedAt=1773503881671/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
		time: "12/02/2026",
	},
	{
		id: 2,
		label: "002",
		tag: "002",
		name: "Discover Africa",
		title: "Discover Africa",
		description:
			"Mapping the invisible currents that shape our thinking. Students explored how cognitive bias, attention, and flow states define performance inside and outside the classroom.",
		image: "/images/2.jpg",
		time: "14/02/2026",
	},
	{
		id: 3,
		label: "003",
		tag: "003",
		name: "HELP-LAB",
		title: "HELP-LAB",
		description:
			"A deep dive into systems thinking — how small inputs ripple into massive outcomes. Teams modeled real-world feedback loops using data gathered from their campus environment.",
		image: "/images/3.jpeg",
		video: "/videos/ghost.mp4",
		time: "18/02/2026",
	},
	{
		id: 4,
		label: "004",
		tag: "004",
		name: "Hunt for Treasure",
		title: "Hunt for Treasure",
		description:
			"Understanding how communities amplify ideas — both destructive and generative. Students built micro-projects designed to break information silos within their cohort.",
		image: "/images/4.jpeg",
		time: "22/02/2026",
	},
	{
		id: 5,
		label: "005",
		tag: "005",
		name: "Mission",
		title: "Mission",
		description:
			"Sitting with ambiguity. This challenge stripped away rubrics and grades — students were given only a problem statement and 48 hours. No instructions. Pure creative autonomy.",
		image: "/images/5.jpeg",
		video: "/videos/void.mp4",
		time: "26/02/2026",
	},
	{
		id: 6,
		label: "006",
		tag: "006",
		name: "Our Digital Print",
		title: "Our Digital Print",
		description:
			"A challenge about mental clarity — identifying the static that prevents deep work. Teams presented personal anti-distraction systems built from behavioral research.",
		image: "/images/6.jpg",
		time: "01/03/2026",
	},
];

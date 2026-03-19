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
			"We are Indatwa, a team of students from African Leadership University coming from Rwanda, Kenya, Nigeria, South Africa, and Senegal. This stage introduces who we are, our backgrounds, and the purpose that brings us together.",
		image: "/images/1.jpeg",
		video:"https://ik.imagekit.io/1cm9j7m7r/WhatsApp%20Video%202026-03-18%20at%2020.49.51.mp4?updatedAt=1773865910657/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
		time: "12/02/2026",
	},
	{
		id: 2,
		label: "002",
		tag: "002",
		name: "Discover Africa",
		title: "Discover Africa",
		description:`As a diverse group we had to look at the community of focus and we found Rwanda as the best community to work with. In this Challenge we were having a podcast discussion on the public Education System of Rwanda and discovering some unknown factors that we didn't know about. How the Education systems are different from our home countries system and addressing common misconceptions about Rwanda's Education System.`,
		video: "https://ik.imagekit.io/1cm9j7m7r/WhatsApp%20Video%202026-03-18%20at%2020.30.41.mp4?updatedAt=1773865910657/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
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
			"We conducted research on the education system in Kimironko sector, analyzing how learning is delivered and experienced by students. This allowed us to identify gaps and challenges within the current system.",
		image: "/images/3.jpeg",
		video:
			"https://ik.imagekit.io/670koylwsb/WhatsApp%20Video%202026-03-18%20at%2022.18.06.mp4?updatedAt=1773865910657/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
		time: "18/02/2026",
	},
	{
		id: 4,
		label: "004",
		tag: "004",
		name: "Hunt for Treasure",
		title: "Hunt for Treasure",
		description:
			"We visited GS Kimironko I and engaged directly with students through discussions and meetings. This helped us gather real insights and understand their experiences in the education system.",
		image: "/images/indatwa.jpeg",
		video: "https://ik.imagekit.io/1cm9j7m7r/WhatsApp%20Video%202026-03-19%20at%2023.32.36.mp4?updatedAt=1773865910657/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
		time: "22/02/2026",
	},
	{
		id: 5,
		label: "005",
		tag: "005",
		name: "Mission",
		title: "Mission",
		description:
			"Based on our research, we defined a clear problem statement and presented our proposed solutions. This stage focused on translating insights into actionable ideas that address real educational challenges.",
		image: "/images/5.jpeg",
		video:
			"https://ik.imagekit.io/670koylwsb/WhatsApp%20Video%202026-03-18%20at%2022.16.06.mp4?updatedAt=1773865910657/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
		time: "26/02/2026",
	},
	{
		id: 6,
		label: "006",
		tag: "006",
		name: "Our Digital Print",
		title: "Our Digital Print",
		description:
			"We designed and built our website to present our journey, research, and solutions. This platform serves as our digital identity and a way to share our work and impact with a wider audience.",
		image: "/images/6.jpg",
		time: "01/03/2026",
	},
];

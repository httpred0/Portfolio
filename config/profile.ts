// ============================================================================
// YOUR PROFILE — edit everything here. This is the single source of truth for
// all the personal info shown across the portfolio. Replace the TODO
// placeholders with your real details.
// ============================================================================

export const profile = {
	// Shown in the start menu, terminal username/prompt, and SEO titles.
	username: 'Pedro Loula',

	// Your real/display name (used in the terminal prompt host + bio).
	fullName: 'Pedro Loula',

	// Your domain for canonical/OpenGraph URLs (no trailing slash).
	siteUrl: 'https://www.pedroloula.com',

	// One-line tagline used in homepage SEO description.
	tagline:
		'Product Designer working at the intersection of product, systems, and AI.',

	// Used by the "About me" notepad. \n creates line breaks.
	about: {
		// Set to your birthdate as 'YYYY-MM-DD' to auto-calc your age in the bio,
		// or set it to null to skip the age entirely.
		birthDate: null as string | null,
		// The full About text. {age} is replaced with your calculated age if
		// birthDate is set above; otherwise remove the {age} reference.
		text:
			`Hi, I'm Pedro.\n\n` +
			`I'm a Product Designer based in Brazil working at the intersection of product, systems, and AI.\n\n` +
			`Over the last few years, I've helped founders and teams design digital products, build design systems, improve workflows, and bring new ideas to market. My work spans product strategy, user experience, prototyping, and implementation, helping teams move from early concepts to products people genuinely enjoy using.\n\n` +
			`Lately, much of my focus has been on exploring how AI is changing the way products are designed and built, and how teams can use it to move faster without sacrificing quality, creativity, or good judgment.`,
	},

	// Taskbar weather widget. Live current weather is fetched (no API key) from
	// open-meteo.com for these coordinates. Set them to your city — look up
	// lat/lon by searching "<city> latitude longitude". Default: São Paulo.
	weather: {
		latitude: -23.55,
		longitude: -46.63,
	},

	// YouTube videos shown in the Videos folder. `id` is the part after
	// "watch?v=" in the URL; `start` (optional) is a start time in seconds.
	// Titles + thumbnails are pulled automatically from YouTube.
	videos: [
		{ id: 'u8fQ9qgzitY' },
		{ id: '4u94juYwLLM' },
		{ id: 'Vg78K3t9KYc', start: 3517 },
		{ id: 'MrSYP-cotdg', start: 29 },
		{ id: 'Cnj64DsO8T8' },
	],

	// Spotify tracks shown in the Music folder. `id` is the part after
	// "/track/" in the share URL. Titles + album art are pulled automatically.
	music: ['5ZmUAHYYexrW95Di4uZijD', '6P639R8Y0uovdV4ImYmKB5', '5u0qQAH46eWwQ0mTSp1BZo', '4Aw0eMtR4u7Oy4QS5sQmrh'],

	// Case-study projects. `slug` maps to the standalone page at /work/<slug>,
	// shown both in the Projects folder and as floating circles on /portfolio.
	// `tag` is a short label; `accent` tints the placeholder thumbnail.
	projects: [
		{ name: 'Portoro', slug: 'portoro', tag: 'Direct Booking Platform', accent: '#FFF8EB', image: '/coins/portoro.png' },
		{ name: 'Agentic Design System', slug: 'agentic-design-system', tag: 'AI-Native Design System', accent: '#F0F0F0', image: '/coins/agentic-design-system.png' },
		{ name: 'Trashie', slug: 'trashie', tag: 'Rewards Commerce', accent: '#4F00FA', image: '/coins/trashie.png' },
		{ name: 'Plug', slug: 'plug', tag: 'Wallet Analytics', accent: '#2A2929', image: '/coins/plug.png' },
		{ name: "Froggo's", slug: 'froggos', tag: 'Brand World', accent: '#1EC777', image: '/coins/froggos.png' },
	],

	// Social links shown in the "Links" folder. Delete any you don't use, or
	// add more. `icon` must match an SVG filename in /public/svg (e.g. github.svg).
	links: [
		{
			name: 'LinkedIn',
			icon: 'linkedin',
			url: 'https://br.linkedin.com/in/pedro-loula-10667b172',
		},
		{ name: 'Gmail', icon: 'gmail', url: 'mailto:pedrodloula@gmail.com' },
	],
}

// Calculates age from profile.about.birthDate (or returns null if unset).
export const getAge = (): number | null => {
	const dateString = profile.about.birthDate
	if (!dateString) return null
	const today = new Date()
	const birthDate = new Date(dateString)
	let age = today.getFullYear() - birthDate.getFullYear()
	const m = today.getMonth() - birthDate.getMonth()
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--
	}
	return age
}

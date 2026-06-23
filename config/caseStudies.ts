// ============================================================================
// Case-study content. Each study renders at /work/<slug> through a single
// long-form layout (offmenu-style). Content is expressed as an ordered list of
// typed blocks so headings, copy, lists, media placeholders, metrics and
// callouts can interleave freely. Media blocks are labeled placeholders until
// real images/videos are dropped in.
// ============================================================================

export interface Block {
	t: 'h' | 'h3' | 'p' | 'lead' | 'ul' | 'ol' | 'media' | 'metrics' | 'code' | 'quote';
	text?: string;
	items?: string[];
	metrics?: { value: string; label: string }[];
	// When a media block has `img` (or `video`), the real asset is shown
	// instead of the labeled placeholder; `text` becomes its alt text.
	img?: string;
	video?: string;
}

export interface CaseStudy {
	slug: string;
	name: string;
	title: string;
	accent: string;
	cover?: string;
	meta: { label: string; value: string }[];
	blocks: Block[];
}

export const caseStudies: CaseStudy[] = [
	// -------------------------------------------------------------------------
	{
		slug: 'portoro',
		name: 'Portoro',
		title: 'Building a direct booking platform for a fast-growing vacation rental company',
		accent: '#3b6e8f',
		cover: '/work/portoro/1.webp',
		meta: [
			{ label: 'Role', value: 'Senior Product Designer' },
			{ label: 'Timeline', value: '2023–2025' },
			{
				label: 'Areas',
				value: 'Product Design • Design Systems • Growth',
			},
		],
		blocks: [
			{ t: 'h', text: 'Overview' },
			{ t: 'p', text: 'Portoro is a vacation rental management company focused on helping homeowners maximize revenue while removing the complexity of managing short-term rental properties.' },
			{ t: 'p', text: 'The company handles everything from guest communication and pricing optimization to maintenance, cleaning, and operational logistics. Behind the scenes, a network of integrations with platforms such as Guesty, Airbnb, Vrbo, Booking.com, and Sage powers every stage of the guest journey.' },
			{ t: 'p', text: 'When I joined Portoro, the company had a clear vision for growth and a rapidly expanding portfolio of premium properties. The next challenge was building the digital foundation needed to support that growth.' },
			{ t: 'p', text: 'The objective was ambitious:' },
			{ t: 'quote', text: 'Create a direct booking platform capable of competing with major OTAs while strengthening homeowner acquisition, improving guest experiences, and supporting internal operations at scale.' },
			{ t: 'h', text: 'The Challenge' },
			{ t: 'p', text: 'Like many companies in the vacation rental industry, Portoro depended heavily on third-party booking platforms.' },
			{ t: 'p', text: 'While OTAs generated demand, they also introduced several limitations:' },
			{ t: 'ul', items: [
				'Service fees reduced profitability.',
				'Customer relationships belonged to external platforms.',
				'Brand visibility was limited.',
				'The booking experience was difficult to control.',
				'Scaling homeowner acquisition required stronger digital tools.',
			] },
			{ t: 'p', text: 'At the same time, the company was expanding into new markets and needed a platform capable of supporting future growth.' },
			{ t: 'p', text: 'The opportunity wasn’t simply building a website. It was creating an ecosystem that connected guests, homeowners, operations teams, and revenue systems into a single experience.' },
			{ t: 'h', text: 'Defining the Experience' },
			{ t: 'p', text: 'The success of direct bookings depends on trust.' },
			{ t: 'p', text: 'Guests need confidence that they are booking through a professional, reliable company. Homeowners need confidence that their properties are being managed effectively. Internal teams need tools that reduce operational friction.' },
			{ t: 'p', text: 'To support these goals, we focused on five core experiences:' },
			{ t: 'ul', items: [
				'Property discovery',
				'Property details',
				'Booking and checkout',
				'Reservation management',
				'Homeowner acquisition',
			] },
			{ t: 'p', text: 'Together, these experiences formed the foundation of Portoro’s first direct booking ecosystem.' },

			{ t: 'h', text: 'Property Discovery' },
			{ t: 'p', text: 'Finding the right vacation rental is often the most time-consuming part of planning a trip. The search experience was designed around speed, clarity, and flexibility.' },
			{ t: 'p', text: 'We introduced:' },
			{ t: 'ul', items: [
				'Advanced filtering',
				'Flexible date selection',
				'Responsive map experiences',
				'Mobile-first interactions',
				'Clear property comparisons',
			] },
			{ t: 'p', text: 'The result was a search experience that helped users find relevant properties faster while reducing friction throughout the journey.' },
			{ t: 'media', img: '/work/portoro/2.webp', text: 'Portoro property discovery and search results' },

			{ t: 'h', text: 'Property Detail Pages' },
			{ t: 'p', text: 'Property pages became the primary conversion surface. The challenge was balancing inspiration with information.' },
			{ t: 'p', text: 'Guests needed enough detail to confidently book while maintaining the premium feel expected from luxury vacation rentals.' },
			{ t: 'p', text: 'Key improvements included:' },
			{ t: 'ul', items: [
				'Better photo hierarchy',
				'Clear amenity presentation',
				'Simplified pricing visibility',
				'Availability transparency',
				'Trust-building content throughout the page',
			] },
			{ t: 'media', img: '/work/portoro/3.webp', text: 'Portoro property detail page' },

			{ t: 'h', text: 'Reducing Booking Friction' },
			{ t: 'p', text: 'One of the most impactful decisions involved rethinking account creation.' },
			{ t: 'p', text: 'Traditional booking flows often require users to create an account before completing a reservation. Every additional step creates opportunities for abandonment.' },
			{ t: 'p', text: 'Instead, we designed a progressive booking experience. Users could begin their reservation immediately and provide account information later in the process.' },
			{ t: 'p', text: 'This reduced friction, improved completion rates, and created a more natural experience for first-time guests.' },
			{ t: 'h', text: 'Helping Homeowners Join the Platform' },
			{ t: 'p', text: 'Growth depended on more than acquiring guests. Portoro also needed to continuously attract new homeowners.' },
			{ t: 'p', text: 'To support this, we created dedicated acquisition experiences focused on communicating:' },
			{ t: 'ul', items: [
				'Revenue potential',
				'Operational support',
				'Property management services',
				'Portfolio performance',
			] },
			{ t: 'p', text: 'These experiences became a critical part of expanding the supply side of the marketplace.' },
			{ t: 'h', text: 'Building a Design System' },
			{ t: 'p', text: 'As the platform expanded, consistency became increasingly important.' },
			{ t: 'p', text: 'Rather than treating each screen as an isolated deliverable, I established a scalable design system that became the foundation for future product development.' },
			{ t: 'p', text: 'Inspired by Atomic Design principles, the system included:' },
			{ t: 'h3', text: 'Foundations' },
			{ t: 'ul', items: ['Typography', 'Color', 'Spacing', 'Elevation', 'Responsive behaviors'] },
			{ t: 'h3', text: 'Components' },
			{ t: 'ul', items: ['Property cards', 'Calendars', 'Filters', 'Inputs', 'Navigation patterns', 'Booking modules'] },
			{ t: 'h3', text: 'Templates' },
			{ t: 'ul', items: ['Search experiences', 'Listing pages', 'Checkout flows', 'Dashboard layouts'] },
			{ t: 'p', text: 'The design system created a shared language between design and engineering, significantly reducing implementation inconsistencies and accelerating product development.' },
			{ t: 'media', img: '/work/portoro/4.webp', text: 'Portoro design system' },

			{ t: 'h', text: 'Beyond the Customer Experience' },
			{ t: 'p', text: 'As Portoro grew, the ecosystem expanded beyond guest-facing products.' },
			{ t: 'h3', text: 'Homeowner Portal' },
			{ t: 'p', text: 'A dedicated experience allowing homeowners to:' },
			{ t: 'ul', items: ['Monitor property performance', 'Review financial information', 'Access documents', 'Track reservations'] },			{ t: 'h3', text: 'Internal Operations Platform' },
			{ t: 'p', text: 'Operational teams relied on specialized tools to manage:' },
			{ t: 'ul', items: ['Reservations', 'Maintenance workflows', 'Financial processes', 'Platform integrations'] },			{ t: 'h3', text: 'Digital Onboarding' },
			{ t: 'p', text: 'New homeowners could complete onboarding digitally through a streamlined process covering:' },
			{ t: 'ul', items: ['Property information', 'Revenue projections', 'Contracts', 'Inspections', 'Documentation'] },
			{ t: 'h', text: 'Outcome' },
			{ t: 'p', text: 'The platform played a key role in supporting Portoro’s continued growth and expansion.' },
			{ t: 'metrics', metrics: [
				{ value: '+45%', label: 'direct bookings in the first quarter' },
				{ value: '+50%', label: 'direct reservations in the first year' },
				{ value: '+38%', label: 'homeowner acquisition within six months' },
				{ value: '+70%', label: 'organic traffic within nine months' },
				{ value: '100+', label: 'new properties across multiple new markets' },
			] },
			{ t: 'media', img: '/work/portoro/5.webp', text: 'Portoro results and growth' },

			{ t: 'h', text: 'Final Thoughts' },
			{ t: 'p', text: 'What began as a direct booking initiative evolved into a connected ecosystem supporting guests, homeowners, and internal operations alike.' },
			{ t: 'p', text: 'The most important lesson from this project was that scalable product design isn’t about individual screens. It’s about creating systems that allow a business to grow without sacrificing consistency, usability, or operational efficiency.' },
			{ t: 'p', text: 'Portoro continues to expand into new markets, and many of the foundations established during this work remain central to the company’s digital experience today.' },
		],
	},

	// -------------------------------------------------------------------------
	{
		slug: 'agentic-design-system',
		name: 'Agentic Design System',
		title: 'A design system built to be operated by AI agents, not read by people',
		accent: '#5b54c9',
		cover: '/work/agentic-design-system/1.webp',
		meta: [
			{ label: 'Role', value: 'Solo · Design & Engineering' },
			{ label: 'Areas', value: 'Design Systems • AI Agents • Tooling' },
			{ label: 'Context', value: 'Multi-client enablement at Katapult' },
		],
		blocks: [
			{ t: 'h', text: 'The Challenge' },
			{ t: 'p', text: 'Katapult works with a lot of clients, and their design teams sit at very different maturity levels. The mature ones move fast; the less mature ones get stuck doing by hand what should be automatic, and that gap is what slows delivery. I didn’t want to fix it team by team. I wanted to raise every client’s design team to an agentic baseline, so an AI agent could carry the repetitive work and the people could focus on decisions, ship faster, and deliver faster.' },
			{ t: 'p', text: 'A conventional design system doesn’t solve this. It’s written for a human reading docs, not for an agent operating the system. Prose guidelines aren’t machine-readable, "use your judgment" isn’t a contract, and nothing stops someone from hardcoding a color or shipping a component they never actually looked at. That is exactly how a less-mature team loses time.' },

			{ t: 'h', text: 'The Idea' },
			{ t: 'p', text: 'Build the design system as something an agent operates, not something a person reads. Three rules baked into the architecture:' },
			{ t: 'ol', items: [
				'Every decision is queryable: structured whenToUse / neverUseFor / props / states / a11y contracts, not paragraphs.',
				'Brand is data, never code: visual identity lives in one client-theme.json, and hardcoded colors are treated as defects.',
				'Nothing ships unseen: every component is rendered, a11y-checked with axe-core, and asserted to resolve the brand color.',
			] },

			{ t: 'media', img: '/work/agentic-design-system/2.webp', text: 'The agentic design system' },

			{ t: 'h', text: 'The Loop' },
			{ t: 'p', text: 'The center of gravity is a required loop every agent follows before any UI is delivered. It’s encoded in CLAUDE.md so it can’t be skipped:' },
			{ t: 'ol', items: [
				'Read client-theme.json before designing anything branded.',
				'Search components.json before choosing a component or prop. Don’t guess.',
				'Use the spec’s component, not a locally invented primitive.',
				'Never hardcode brand colors, fonts, radii, or button styling. Change the theme instead.',
				'Render before delivering (via the explorer URL or MCP render tools) and inspect the screenshot.',
				'If the screenshot is wrong, fix the code/theme/spec and render again. Never deliver unverified UI.',
			] },
			{ t: 'p', text: 'The mechanical loop that backs steps 5–6:' },
			{ t: 'code', text: 'Agent writes JSX ──▶ MCP render_code ──▶ Explorer (Vite + Playwright)\n   ▲                               │\n   └── fix code / theme / spec ◀── screenshot + a11y + brand check' },
			{ t: 'p', text: 'This is the answer to the painpoint. A less-mature team doesn’t fail for lack of taste. It fails by skipping steps: guessing a component, hardcoding a color, shipping without looking. The loop turns those judgment calls into enforced, checkable steps. The agent does the querying, rendering, and self-correcting; the human just steers. That’s what lets a junior team deliver at a senior team’s pace.' },

			{ t: 'h', text: 'How I Built It' },
			{ t: 'p', text: 'I used the same agentic method the system asks its users to adopt.' },
			{ t: 'ul', items: [
				'Foundation: Chakra UI v3 for accessible primitives.',
				'The spec layer, generated with Claude. Rather than hand-author ~119 component specs, I drove Claude through a pipeline: pull metadata from Chakra, enrich it, repair examples, generate tokens and icons, check coverage. The system was assembled by an agent, not typed out by hand.',
				'Two-tier spec: components.json for flat, fast search; src/meta for the rich per-component contracts (axes, relationships, a11y, AI hints).',
				'Patterns: patterns.json encodes multi-component recipes with selection rules and executable JSX.',
				'Theme engine: createTheme.js interpolates full 50 to 950 color ramps and semantic ads.* tokens (light/dark) from a single brand seed, so re-skinning a client is one file.',
				'MCP server: exposes the whole system as agent tools (search_components, get_component, render_code, set_theme, add_component, …).',
				'Verification as a gate: validate:specs enforces the spec contract; verify:renders renders everything, runs axe, and asserts the brand button truly resolves to the brand color; verify:visual pixel-diffs against golden baselines; quality scores each spec and won’t let one rank high unless its example actually renders.',
			] },

			{ t: 'h', text: 'Outcome' },
			{ t: 'p', text: 'A design system a client team can hand to an agent and trust. Onboarding a new client is a single seed color plus a verify run, minutes rather than a redesign, which is exactly what lets a less-mature team start delivering at a mature team’s pace. And because I generated and verified everything through tooling, ~119 specs stay consistent without a human babysitting each one.' },

			{ t: 'media', video: '/work/agentic-design-system/3.mp4', text: 'Onboarding a client in minutes' },

			{ t: 'h', text: 'Final Thoughts' },
			{ t: 'ul', items: [
				'Enforceable constraints beat guidelines. neverUseFor and "no hardcoded color" are checkable; "be tasteful" isn’t.',
				'Generated, then gated. Bootstrapping specs with Claude and gating everything behind render + a11y + visual checks is what keeps it honest at scale.',
				'One source of brand truth. Collapsing identity into a single theme file is what makes the multi-client story cheap and keeps components brand-agnostic.',
			] },
			{ t: 'quote', text: 'I used an agent to build the system, and shaped the system around one enforced loop, so a client’s team could use an agent to operate it. That’s what closes the maturity gap that started the whole thing.' },
		],
	},

	// -------------------------------------------------------------------------
	{
		slug: 'trashie',
		name: 'Trashie',
		title: 'Designing purchase flows that turn recycling into a habit',
		accent: '#2f8f5b',
		cover: '/work/trashie/1.webp',
		meta: [
			{ label: 'Role', value: 'Product Designer' },
			{ label: 'Timeline', value: '2025–2026' },
			{ label: 'Areas', value: 'Product Design • Mobile Commerce • Conversion Optimization' },
		],
		blocks: [
			{ t: 'h', text: 'Overview' },
			{ t: 'p', text: 'Trashie is a rewards-based recycling platform that encourages users to responsibly dispose of unwanted clothing and electronics.' },
			{ t: 'p', text: 'Users purchase a Take Back Bag or electronics collection box, fill it with items from any brand, and send it back for recycling. In return, they earn TrashieCash, a reward currency that can be redeemed for discounts, gift cards, partner offers, or charitable donations.' },
			{ t: 'p', text: 'As the platform continued to grow, the team focused on improving one of the most critical moments in the user journey:' },
			{ t: 'quote', text: 'The path between discovering a recycling product and completing a purchase.' },
			{ t: 'h', text: 'The Challenge' },
			{ t: 'p', text: 'The Trashie model is simple once users understand it.' },
			{ t: 'quote', text: 'Buy a bag. Fill it. Ship it. Earn rewards.' },
			{ t: 'p', text: 'The challenge is that this process introduces concepts most users have never encountered before. Questions naturally arise:' },
			{ t: 'ul', items: [
				'Why should I pay for a recycling bag?',
				'How many rewards will I receive?',
				'What is TrashieCash?',
				'Is membership worth it?',
				'What happens after I send my items?',
			] },
			{ t: 'p', text: 'The purchase experience needed to answer these questions while keeping users moving toward checkout.' },
			{ t: 'p', text: 'The goal wasn’t simply selling a bag. It was building confidence in a new behavior.' },
			{ t: 'h', text: 'My Contribution' },
			{ t: 'p', text: 'I worked on several key commerce experiences across the Trashie mobile application, including:' },
			{ t: 'ul', items: [
				'Take Back Bag purchase flows',
				'Electronics recycling box purchase flows',
				'Membership upsell experiences',
				'Checkout optimizations',
				'Reward communication patterns',
				'Supporting purchase-related interactions',
			] },
			{ t: 'p', text: 'The work focused on creating a clearer relationship between cost, environmental impact, and rewards.' },
			{ t: 'h', text: 'Making Value Easier to Understand' },
			{ t: 'p', text: 'One of the biggest challenges was communicating value. Users aren’t purchasing a traditional product. They’re purchasing access to a recycling experience that generates future rewards.' },
			{ t: 'p', text: 'Because of this, every screen needed to reinforce three ideas:' },
			{ t: 'h3', text: 'Recycle' },
			{ t: 'p', text: 'Give unwanted items a second life.' },
			{ t: 'h3', text: 'Earn' },
			{ t: 'p', text: 'Receive TrashieCash for participating.' },
			{ t: 'h3', text: 'Redeem' },
			{ t: 'p', text: 'Convert rewards into tangible benefits.' },
			{ t: 'p', text: 'By continuously connecting these three concepts throughout the experience, we reduced cognitive load and helped users understand the system more quickly.' },
			{ t: 'media', img: '/work/trashie/2.webp', text: 'Trashie reward communication' },

			{ t: 'h', text: 'Designing the Membership Experience' },
			{ t: 'p', text: 'Membership introduced another layer of complexity. Users needed to understand not only the benefits of recycling, but also why upgrading would create additional value.' },
			{ t: 'p', text: 'The challenge was balancing visibility with restraint. The experience needed to:' },
			{ t: 'ul', items: [
				'Clearly communicate membership benefits',
				'Increase perceived value',
				'Avoid interrupting purchase intent',
				'Feel helpful rather than promotional',
			] },
			{ t: 'p', text: 'This led to a series of lightweight upsell patterns integrated directly into the purchasing journey.' },
			{ t: 'media', img: '/work/trashie/3.webp', text: 'Trashie membership experience' },

			{ t: 'h', text: 'Reducing Friction Throughout Checkout' },
			{ t: 'p', text: 'Checkout is often where uncertainty becomes abandonment. To improve clarity and confidence, we focused on:' },
			{ t: 'ul', items: [
				'Simplifying information hierarchy',
				'Improving reward visibility',
				'Highlighting savings opportunities',
				'Making membership benefits easier to compare',
				'Reducing unnecessary decision points',
			] },
			{ t: 'p', text: 'The result was a cleaner purchasing experience designed to keep users focused on completing their order.' },
			{ t: 'media', img: '/work/trashie/4.webp', text: 'Trashie checkout' },

			{ t: 'h', text: 'Designing for Trust' },
			{ t: 'p', text: 'Unlike traditional e-commerce products, Trashie asks users to participate in a behavior change. Users aren’t simply buying something. They’re trusting a service with their unwanted belongings and expecting rewards in return.' },
			{ t: 'p', text: 'Because of this, trust became a central design consideration. Throughout the experience we emphasized:' },
			{ t: 'ul', items: [
				'Transparency',
				'Clear reward expectations',
				'Consistent visual hierarchy',
				'Familiar purchase patterns',
				'Straightforward messaging',
			] },
			{ t: 'p', text: 'These decisions helped make an unfamiliar process feel approachable and credible.' },
			{ t: 'media', img: '/work/trashie/5.webp', text: 'Trashie UI and trust' },

			{ t: 'h', text: 'Outcome' },
			{ t: 'p', text: 'The work contributed to a more cohesive purchasing experience across the Trashie ecosystem, helping users better understand the relationship between recycling, rewards, and membership.' },
			{ t: 'p', text: 'More importantly, it demonstrated how thoughtful UX can support behavior change by making sustainable actions feel simple, rewarding, and accessible.' },
			{ t: 'h', text: 'Final Thoughts' },
			{ t: 'p', text: 'Trashie was a reminder that great commerce experiences aren’t only about selling products. Sometimes they’re about helping people understand an entirely new system.' },
			{ t: 'p', text: 'The challenge wasn’t designing a checkout flow. It was designing enough clarity and confidence that users would feel comfortable participating in a new habit.' },
			{ t: 'p', text: 'And when that habit happens to reduce waste and extend the life of existing products, good design can create impact beyond the screen.' },
		],
	},

	// -------------------------------------------------------------------------
	{
		slug: 'plug',
		name: 'Plug',
		title: 'Bringing token analytics directly into the wallet experience',
		accent: '#9a6a2f',
		cover: '/work/plug/1.webp',
		meta: [
			{ label: 'Role', value: 'Product Designer' },
			{ label: 'Timeline', value: '2022' },
			{ label: 'Areas', value: 'Product Design • Data Visualization • Crypto UX' },
		],
		blocks: [
			{ t: 'h', text: 'Overview' },
			{ t: 'p', text: 'Most crypto wallets are designed around transactions. Users can send, receive, and store assets, but when it comes to understanding what they own, they often need to leave the wallet and rely on external tools.' },
			{ t: 'p', text: 'For token holders, this creates a disconnect. The same user making an investment decision inside the wallet is forced to switch contexts to evaluate liquidity, trading activity, market capitalization, or token health.' },
			{ t: 'p', text: 'The opportunity was clear:' },
			{ t: 'quote', text: 'Bring meaningful token analytics directly into Plug Wallet and help users make more informed decisions without leaving the product.' },
			{ t: 'h', text: 'The Challenge' },
			{ t: 'p', text: 'Owning a token is only one part of the experience. Understanding whether to hold, swap, transfer, or sell it is often where the real decision-making happens.' },
			{ t: 'p', text: 'At the time, users relied on multiple tools to gather information:' },
			{ t: 'ul', items: [
				'Wallets for asset management',
				'Analytics platforms for research',
				'Trading platforms for execution',
			] },
			{ t: 'p', text: 'This fragmented workflow introduced unnecessary friction and increased the effort required to make informed decisions. The question became:' },
			{ t: 'quote', text: 'What if token analytics lived where users already manage their assets?' },
			{ t: 'h', text: 'The Opportunity' },
			{ t: 'p', text: 'Plug Wallet and Sonic were both products developed by Psychedelic.' },
			{ t: 'h3', text: 'Plug' },
			{ t: 'p', text: 'A wallet built for the Internet Computer ecosystem, allowing users to securely manage digital assets.' },
			{ t: 'h3', text: 'Sonic' },
			{ t: 'p', text: 'A decentralized finance platform providing token trading, liquidity pools, and market analytics.' },
			{ t: 'p', text: 'Because both products shared the same ecosystem, there was a unique opportunity to leverage Sonic’s data infrastructure and surface valuable insights directly within Plug.' },
			{ t: 'p', text: 'Rather than forcing users to leave the wallet, we could bring critical market information closer to the moment decisions were made.' },
			{ t: 'h', text: 'Defining What Matters' },
			{ t: 'p', text: 'Not every metric deserves a place in a wallet. The challenge was identifying which signals would actually help users make better decisions.' },
			{ t: 'p', text: 'After evaluating the available data, we focused on a small set of high-impact metrics.' },
			{ t: 'h3', text: 'Transaction Activity' },
			{ t: 'p', text: 'Daily transaction volume provides a strong indication of network activity and user engagement. A growing number of transactions can signal increased adoption and market interest.' },
			{ t: 'h3', text: 'Market Capitalization' },
			{ t: 'p', text: 'Market cap helps users understand the relative size of a token and compare it against other assets in the ecosystem.' },
			{ t: 'h3', text: 'Liquidity' },
			{ t: 'p', text: 'Liquidity indicates how easily a token can be traded without significantly impacting its price. For users, it provides an important signal around risk and market stability.' },
			{ t: 'media', img: '/work/plug/2.webp', text: 'Plug token metrics' },

			{ t: 'h', text: 'Designing for Small Screens' },
			{ t: 'p', text: 'Displaying financial data on mobile devices presents a unique challenge. Charts can easily become overwhelming, especially when multiple metrics compete for attention.' },
			{ t: 'p', text: 'The goal was to create an experience that felt informative without becoming intimidating. We prioritized:' },
			{ t: 'ul', items: ['Price trends', 'Liquidity', 'Trading volume'] },
			{ t: 'p', text: 'These metrics were displayed through interactive charts, while secondary information was surfaced through more lightweight UI patterns. Additional data included:' },
			{ t: 'ul', items: [
				'Market capitalization',
				'Token balance',
				'24-hour transaction volume',
				'Social links',
				'Liquidity pools',
			] },
			{ t: 'media', video: '/work/plug/3.mp4', text: 'Plug analytics screen' },

			{ t: 'h', text: 'Making Data Actionable' },
			{ t: 'p', text: 'Analytics only create value when they support action. For this reason, the experience was designed around the relationship between information and execution.' },
			{ t: 'p', text: 'Users could access token transfers directly from the analytics view, allowing them to evaluate market conditions and act immediately when needed.' },
			{ t: 'p', text: 'The intention wasn’t to encourage more transactions. It was to reduce the distance between understanding and action.' },
			{ t: 'media', img: '/work/plug/4.webp', text: 'Plug data-to-action flow' },

			{ t: 'h', text: 'Chart Design' },
			{ t: 'p', text: 'The analytics experience was built around a flexible chart system. Users could:' },
			{ t: 'ul', items: [
				'Switch between daily, weekly, and monthly views',
				'Inspect specific values within a selected range',
				'View high and low points automatically',
				'Compare trends over time',
			] },
			{ t: 'p', text: 'This provided enough depth for experienced users while remaining approachable for newcomers.' },
			{ t: 'media', img: '/work/plug/5.webp', text: 'Plug chart interactions' },

			{ t: 'h', text: 'Outcome' },
			{ t: 'p', text: 'The project established a foundation for bringing richer financial intelligence into the wallet experience. More importantly, it shifted the role of the wallet from a storage tool to a decision-support tool.' },
			{ t: 'p', text: 'Instead of forcing users to gather information elsewhere, Plug could become the place where ownership, understanding, and action coexist.' },
			{ t: 'h', text: 'Final Thoughts' },
			{ t: 'p', text: 'One of the most interesting lessons from this project was realizing that information architecture can be just as important as functionality.' },
			{ t: 'p', text: 'The wallet already allowed users to move assets. The challenge wasn’t adding another transaction flow. It was helping people feel more confident about the decisions they were making.' },
			{ t: 'quote', text: 'Sometimes the most valuable feature isn’t a new action. It’s providing the context that makes existing actions smarter.' },
		],
	},

	// -------------------------------------------------------------------------
	{
		slug: 'froggos',
		name: "Froggo's",
		title: 'Turning a Brazilian expression into a playful cereal brand',
		accent: '#6b8f2f',
		cover: '/work/froggos/1.webp',
		meta: [
			{ label: 'Role', value: 'Creative Direction' },
			{ label: 'Timeline', value: 'Personal Project' },
			{ label: 'Areas', value: 'Branding • Illustration • 3D Design' },
		],
		blocks: [
			{ t: 'h', text: 'Overview' },
			{ t: 'p', text: 'Froggo’s started with a simple question:' },
			{ t: 'quote', text: 'What if "swallowing a frog" was actually breakfast?' },
			{ t: 'p', text: 'In Brazil, the expression engolir sapo is used when someone has to tolerate an uncomfortable situation without reacting. It’s something most people experience growing up, especially when transitioning into adult life.' },
			{ t: 'p', text: 'I became fascinated by the contrast. As children, mornings are often associated with cartoons, cereal, and carefree routines. As adults, we slowly learn to swallow more and more frogs.' },
			{ t: 'p', text: 'Froggo’s was born from that contradiction: a fictional cereal brand where the frogs are part of the recipe.' },
			{ t: 'p', text: 'What started as a joke quickly evolved into a multidisciplinary project combining illustration, branding, 3D design, storytelling, web design, and AI-assisted development.' },
			{ t: 'h', text: 'Building the World' },
			{ t: 'p', text: 'The goal wasn’t simply to design a logo or package. I wanted Froggo’s to feel like a real product that could exist on a supermarket shelf.' },
			{ t: 'p', text: 'The process began with character exploration. I sketched dozens of frogs, experimenting with different personalities, shapes, and expressions until a visual language emerged that felt:' },
			{ t: 'ul', items: ['Playful', 'Charming', 'Slightly chaotic', 'Unapologetically weird'] },
			{ t: 'p', text: 'The result was a cast of characters that became the foundation for the entire brand.' },
			{ t: 'media', img: '/work/froggos/2.webp', text: "Froggo's character exploration" },

			{ t: 'h', text: 'From Character to Brand' },
			{ t: 'p', text: 'Once the characters were established, I expanded the identity into a complete product system. This included:' },
			{ t: 'ul', items: [
				'Brand identity',
				'Packaging design',
				'Sticker collections',
				'Product illustrations',
				'Promotional assets',
				'Marketing visuals',
			] },
			{ t: 'p', text: 'Every element was designed to reinforce the same idea:' },
			{ t: 'quote', text: 'Froggo’s should feel like the kind of cereal you would’ve begged your parents to buy as a kid.' },
			{ t: 'media', img: '/work/froggos/3.webp', text: "Froggo's packaging" },

			{ t: 'h', text: 'Bringing Froggo’s Into 3D' },
			{ t: 'p', text: 'To push the concept further, I translated the illustrations into three-dimensional assets. The frogs evolved from simple drawings into fully modeled characters and cereal pieces, allowing the brand to exist beyond static graphics.' },
			{ t: 'p', text: 'This stage helped transform Froggo’s from a visual concept into something that felt surprisingly tangible. For the first time, it looked less like a design project and more like a real product.' },
			{ t: 'media', video: '/work/froggos/loop.mp4', text: "Froggo's 3D renders" },

			{ t: 'h', text: 'Designing the Experience' },
			{ t: 'p', text: 'The next step was building a digital home for the brand. Rather than creating a traditional marketing website, I approached the experience as an extension of the product world itself.' },
			{ t: 'p', text: 'The website combines:' },
			{ t: 'ul', items: [
				'Interactive 3D scenes',
				'Product storytelling',
				'Motion design',
				'Playful micro-interactions',
				'Immersive visual moments',
			] },
			{ t: 'p', text: 'One of the centerpiece interactions features a floating cereal bowl overflowing with Froggo’s pieces, reinforcing the whimsical and slightly absurd personality of the brand.' },
			{ t: 'media', img: '/work/froggos/5.webp', text: "Froggo's website" },

			{ t: 'h', text: 'Experimenting with AI-Native Development' },
			{ t: 'p', text: 'Froggo’s also became a testing ground for a new way of building. Using coding agents connected through MCP servers, I translated the visual system into a working front-end experience while exploring AI-assisted development workflows.' },
			{ t: 'p', text: 'The project allowed me to experiment with how design systems, creative direction, and AI agents can collaborate during implementation without sacrificing visual quality.' },
			{ t: 'p', text: 'Rather than replacing design decisions, the agents became collaborators that accelerated execution and iteration.' },
			{ t: 'media', img: '/work/froggos/6.webp', text: "Froggo's AI-native implementation" },

			{ t: 'h', text: 'Final Thoughts' },
			{ t: 'p', text: 'Froggo’s reminded me that some of the most valuable projects begin without a business goal. It gave me space to explore illustration, branding, 3D design, storytelling, web experiences, and AI-native workflows inside a single creative ecosystem.' },
			{ t: 'p', text: 'More importantly, it reinforced something I believe deeply:' },
			{ t: 'quote', text: 'The best design projects don’t just solve problems. Sometimes they create worlds people wish existed.' },
		],
	},
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
	caseStudies.find((c) => c.slug === slug);

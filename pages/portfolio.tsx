import gsap from 'gsap';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { profile } from '../config/profile';
import styles from '../styles/Portfolio.module.css';

// Coins orbit the centre on a tilted ellipse (RX/RY) as one organised group AND
// spin about their own vertical axis (rotateY). Both come from one clock, so the
// spin cascades around the ring. Each coin is a real cylinder: front + back face
// plus a segmented rim, giving it a little 3D thickness.
const RX = 330;
const RY = 235;
const LEAN = 10;
const BASE_SIZE = 104;
const FLIP = 2; // vertical-axis turns per full orbit (controls the cascade)
const THICK = 9; // coin thickness (px)
const SEG = 30; // rim segments
const R = BASE_SIZE / 2;
const CHORD = 13; // rim segment width (slight overlap, no gaps)

// Pre-computed rim transforms — a cylinder whose axis points at the viewer.
const RIM = Array.from(
	{ length: SEG },
	(_, i) => `rotateZ(${(360 / SEG) * i}deg) translateY(${R}px) rotateX(90deg)`
);

const LinkedInIcon = () => (
	<svg
		className={`${styles.navIcon} ${styles.navIconLn}`}
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M3.04 4.5a1.78 1.78 0 1 1-.02 3.56 1.78 1.78 0 0 1 .02-3.56zM1.46 9.2h3.18V21H1.46zM7.2 9.2h3.05v1.61h.04c.42-.8 1.46-1.66 3.01-1.66 3.22 0 3.81 2.12 3.81 4.88V21h-3.18v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H7.2z" />
	</svg>
);

const MailIcon = () => (
	<svg
		className={`${styles.navIcon} ${styles.navIconMail}`}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.7"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
		<path d="M3 6l9 6 9-6" />
	</svg>
);

const ArrowLeft = () => (
	<svg
		className={styles.navArrow}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.7"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M19 12H5" />
		<path d="M12 19l-7-7 7-7" />
	</svg>
);

const ArrowRight = () => (
	<svg
		className={styles.navArrow}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.7"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14" />
		<path d="M12 5l7 7-7 7" />
	</svg>
);

function Portfolio() {
	const root = useRef<HTMLDivElement>(null);
	const orbitRef = useRef<HTMLDivElement>(null);
	const dragged = useRef(false);

	const linkedin =
		profile.links.find((l) => l.icon === 'linkedin')?.url ||
		'https://br.linkedin.com/in/pedro-loula-10667b172';
	const mail =
		profile.links.find((l) => l.url.startsWith('mailto:'))?.url ||
		'mailto:pedrodloula@gmail.com';

	useEffect(() => {
		const cleanups: Array<() => void> = [];

		const ctx = gsap.context(() => {
			const reduce = window.matchMedia(
				'(prefers-reduced-motion: reduce)'
			).matches;

			const orbit = orbitRef.current!;
			const nodes = gsap.utils.toArray<HTMLElement>('[data-node]');
			const coins = gsap.utils.toArray<HTMLElement>('[data-coin]');
			const n = nodes.length;
			const DEG = 180 / Math.PI;

			// Evenly spaced start angles → organised, balanced cascade.
			const base = nodes.map((_, i) => (i * Math.PI * 2) / n + 0.5);

			const clock = { v: 0 }; // shared orbit angle (radians)
			const render = () => {
				nodes.forEach((node, i) => {
					const th = base[i] + clock.v;
					const near = (-Math.cos(th) + 1) / 2; // 0 far(top)..1 near
					gsap.set(node, {
						xPercent: -50,
						yPercent: -50,
						x: Math.sin(th) * RX,
						y: -Math.cos(th) * RY,
						scale: 0.82 + near * 0.34,
						zIndex: Math.round(near * 100) + 5,
					});
					// Spin happens on the inner coin so the caption stays upright.
					gsap.set(coins[i], {
						rotationX: LEAN,
						rotationY: th * DEG * FLIP,
					});
				});
			};
			render();

			let auto: gsap.core.Tween | null = null;
			const startAuto = () => {
				if (reduce) return;
				auto = gsap.to(clock, {
					v: `+=${Math.PI * 2}`,
					duration: 42,
					ease: 'none',
					repeat: -1,
					onUpdate: render,
				});
			};
			startAuto();

			// Drag to spin the whole group faster around the ring
			const stage = orbit.closest(`.${styles.stage}`) as HTMLElement;
			let dragging = false;
			let lastX = 0;
			let moved = 0;
			const down = (e: PointerEvent) => {
				dragging = true;
				dragged.current = false;
				moved = 0;
				lastX = e.clientX;
				auto?.kill();
				stage.classList.add(styles.grabbing);
			};
			const move = (e: PointerEvent) => {
				if (!dragging) return;
				const dx = e.clientX - lastX;
				lastX = e.clientX;
				moved += Math.abs(dx);
				if (moved > 6) dragged.current = true;
				clock.v += dx * 0.006;
				render();
			};
			const up = () => {
				if (!dragging) return;
				dragging = false;
				stage.classList.remove(styles.grabbing);
				startAuto();
			};
			stage.addEventListener('pointerdown', down);
			window.addEventListener('pointermove', move);
			window.addEventListener('pointerup', up);
			cleanups.push(() => {
				stage.removeEventListener('pointerdown', down);
				window.removeEventListener('pointermove', move);
				window.removeEventListener('pointerup', up);
			});
		}, root);

		return () => {
			ctx.revert();
			cleanups.forEach((c) => c());
		};
	}, []);

	return (
		<>
			<Head>
				<title>Pedro Loula — Product Designer</title>
				<meta
					name="description"
					content="Pedro Loula — a selection of products, experiences, and systems I've helped bring to life."
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<div className={styles.page} ref={root}>
				<Link href="/" passHref>
					<a
						className={`${styles.topLink} ${styles.topLeft}`}
						data-reveal
					>
						<ArrowLeft />
						Back to Windows
					</a>
				</Link>
				<span className={styles.logo} data-reveal>
					Pedro Loula
				</span>
				<a
					className={`${styles.topLink} ${styles.topRight}`}
					href={`/work/${profile.projects[0].slug}`}
					data-reveal
				>
					Read case studies
					<ArrowRight />
				</a>

				<a
					className={`${styles.navBtn} ${styles.navLeft}`}
					href={linkedin}
					target="_blank"
					rel="noopener noreferrer"
					data-reveal
				>
					<LinkedInIcon />
					LinkedIn
				</a>
				<a
					className={`${styles.navBtn} ${styles.navRight}`}
					href={mail}
					data-reveal
				>
					<MailIcon />
					Email me
				</a>

				<div className={styles.stage}>
					<p className={styles.statement}>
						<strong className={styles.statementStrong}>
							Howdy, I&apos;m Pedro.
						</strong>{' '}
						Here&apos;s a selection of products, experiences, and
						systems I&apos;ve helped bring to life.
					</p>

					<div className={styles.orbit} ref={orbitRef}>
						{profile.projects.map((project) => (
							<a
								key={project.slug}
								className={styles.node}
								href={`/work/${project.slug}`}
								data-node
								onClick={(e) => {
									if (dragged.current) e.preventDefault();
								}}
								style={
									{
										'--size': `${BASE_SIZE}px`,
										'--accent': project.accent,
										'--thick': `${THICK}px`,
										'--chord': `${CHORD}px`,
									} as React.CSSProperties
								}
							>
								<span className={styles.coin} data-coin>
									<span
										className={`${styles.face} ${styles.faceFront}`}
									>
										{project.image ? (
											<img
												src={project.image}
												alt={project.name}
												className={styles.faceImg}
											/>
										) : (
											<span className={styles.faceInitial}>
												{project.name.charAt(0)}
											</span>
										)}
									</span>
									<span
										className={`${styles.face} ${styles.faceBack}`}
									>
										{project.image ? (
											<img
												src={project.image}
												alt={project.name}
												className={styles.faceImg}
											/>
										) : (
											<span className={styles.faceInitial}>
												{project.name.charAt(0)}
											</span>
										)}
									</span>
									{RIM.map((t, k) => (
										<span
											key={k}
											className={styles.edge}
											style={{ transform: t }}
										/>
									))}
								</span>
								<span className={styles.nodeCaption}>
									<span className={styles.nodeName}>
										{project.name}
									</span>
									<span className={styles.nodeTag}>
										{project.tag}
									</span>
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Portfolio;

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
	caseStudies,
	getCaseStudy,
	Block,
	CaseStudy,
} from '../../config/caseStudies';
import styles from '../../styles/CaseStudy.module.css';

interface Props {
	study: CaseStudy;
	next: CaseStudy;
	prev: CaseStudy;
}

function renderBlock(b: Block, i: number) {
	switch (b.t) {
		case 'h':
			return (
				<h2 key={i} id={`sec-${i}`} data-sec className={styles.h2} data-reveal>
					{b.text}
				</h2>
			);
		case 'h3':
			return (
				<h3 key={i} className={styles.h3} data-reveal>
					{b.text}
				</h3>
			);
		case 'p':
			return (
				<p key={i} className={styles.p} data-reveal>
					{b.text}
				</p>
			);
		case 'lead':
			return (
				<p key={i} className={styles.lead} data-reveal>
					{b.text}
				</p>
			);
		case 'quote':
			return (
				<blockquote key={i} className={styles.quote} data-reveal>
					{b.text}
				</blockquote>
			);
		case 'ul':
			return (
				<ul key={i} className={styles.ul} data-reveal>
					{b.items?.map((it, k) => (
						<li key={k}>{it}</li>
					))}
				</ul>
			);
		case 'ol':
			return (
				<ol key={i} className={styles.ol} data-reveal>
					{b.items?.map((it, k) => (
						<li key={k}>{it}</li>
					))}
				</ol>
			);
		case 'code':
			return (
				<pre key={i} className={styles.code} data-reveal>
					{b.text}
				</pre>
			);
		case 'media':
			if (b.video) {
				return (
					<figure key={i} className={styles.mediaImg} data-reveal>
						<video
							src={b.video}
							autoPlay
							loop
							muted
							playsInline
							aria-label={b.text || ''}
						/>
					</figure>
				);
			}
			if (b.img) {
				return (
					<figure key={i} className={styles.mediaImg} data-reveal>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={b.img} alt={b.text || ''} loading="lazy" />
					</figure>
				);
			}
			return (
				<figure key={i} className={styles.media} data-reveal>
					<span className={styles.mediaDot} />
					<span className={styles.mediaLabel}>{b.text}</span>
				</figure>
			);
		case 'metrics':
			return (
				<div key={i} className={styles.metrics} data-reveal>
					{b.metrics?.map((m, k) => (
						<div key={k} className={styles.metric}>
							<span className={styles.metricValue}>{m.value}</span>
							<span className={styles.metricLabel}>{m.label}</span>
						</div>
					))}
				</div>
			);
		default:
			return null;
	}
}

function WorkPage({ study, next, prev }: Props) {
	const root = useRef<HTMLDivElement>(null);
	const [activeId, setActiveId] = useState('');

	const sections = study.blocks
		.map((b, i) =>
			b.t === 'h' ? { id: `sec-${i}`, text: b.text as string } : null
		)
		.filter(Boolean) as { id: string; text: string }[];

	// The global `body { overflow: hidden }` (for the fixed Windows desktop)
	// blocks scrolling — re-enable it while a case study is mounted.
	useEffect(() => {
		const body = document.body.style;
		const html = document.documentElement.style;
		const prev = {
			overflow: body.overflow,
			bg: body.backgroundImage,
			scroll: html.scrollBehavior,
		};
		body.overflow = 'visible';
		body.backgroundImage = 'none';
		html.scrollBehavior = 'smooth';
		return () => {
			body.overflow = prev.overflow;
			body.backgroundImage = prev.bg;
			html.scrollBehavior = prev.scroll;
		};
	}, []);

	// Scroll-reveal + active-section tracking for the table of contents.
	useEffect(() => {
		const el = root.current;
		if (!el) return;
		const reduce = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		const items = Array.from(
			el.querySelectorAll<HTMLElement>('[data-reveal]')
		);
		if (reduce) {
			items.forEach((n) => n.classList.add(styles.inView));
		} else {
			const reveal = new IntersectionObserver(
				(entries) => {
					entries.forEach((e) => {
						if (e.isIntersecting) {
							e.target.classList.add(styles.inView);
							reveal.unobserve(e.target);
						}
					});
				},
				{ threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
			);
			items.forEach((n) => reveal.observe(n));
		}

		// Active TOC entry = the last heading whose top has scrolled past the
		// reading line (~140px). Always resolves to exactly one section.
		const heads = Array.from(
			el.querySelectorAll<HTMLElement>('[data-sec]')
		);
		let ticking = false;
		const update = () => {
			ticking = false;
			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 4;
			if (atBottom) {
				setActiveId(heads[heads.length - 1]?.id || '');
				return;
			}
			let current = heads[0]?.id || '';
			for (const h of heads) {
				if (h.getBoundingClientRect().top <= 140) current = h.id;
				else break;
			}
			setActiveId(current);
		};
		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [study.slug]);

	return (
		<>
			<Head>
				<title>{`${study.name} — Pedro Loula`}</title>
				<meta name="description" content={study.title} />
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
				<header className={styles.topbar}>
					<div className={styles.topbarInner}>
						<Link href="/portfolio">
							<a className={styles.brand}>Pedro Loula</a>
						</Link>
						<Link href="/portfolio">
							<a className={styles.index}>All work</a>
						</Link>
					</div>
				</header>

				<main className={styles.main}>
					<section className={styles.hero}>
						<div className={styles.heroText}>
							<p className={styles.eyebrow} data-reveal>
								Case Study
							</p>
							<h1 className={styles.title} data-reveal>
								{study.name}
							</h1>
							<p className={styles.subtitle} data-reveal>
								{study.title}
							</p>
							<div className={styles.meta} data-reveal>
								{study.meta.map((m) => (
									<div
										key={m.label}
										className={styles.metaItem}
									>
										<span className={styles.metaLabel}>
											{m.label}
										</span>
										<span className={styles.metaValue}>
											{m.value}
										</span>
									</div>
								))}
							</div>
						</div>
						<figure className={styles.heroMedia} data-reveal>
							{study.cover ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img src={study.cover} alt={study.name} />
							) : (
								<>
									<span className={styles.mediaDot} />
									<span className={styles.mediaLabel}>
										Cover image
									</span>
								</>
							)}
						</figure>
					</section>

					<div className={styles.layout}>
						<aside className={styles.toc}>
							<nav className={styles.tocInner}>
								<span className={styles.tocTitle}>Contents</span>
								<ul className={styles.tocList}>
									{sections.map((s) => (
										<li key={s.id}>
											<a
												href={`#${s.id}`}
												className={`${styles.tocLink} ${
													activeId === s.id
														? styles.tocActive
														: ''
												}`}
												onClick={() =>
													setActiveId(s.id)
												}
											>
												{s.text}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</aside>

						<div className={styles.content}>
							{study.blocks.map((b, i) => renderBlock(b, i))}

							<footer className={styles.footer}>
								<nav className={styles.pager}>
									<Link href={`/work/${prev.slug}`}>
										<a
											className={`${styles.pagerLink} ${styles.pagerPrev}`}
										>
											<span
												className={styles.pagerEyebrow}
											>
												← Previous
											</span>
											<span className={styles.pagerName}>
												{prev.name}
											</span>
										</a>
									</Link>
									<Link href={`/work/${next.slug}`}>
										<a
											className={`${styles.pagerLink} ${styles.pagerNext}`}
										>
											<span
												className={styles.pagerEyebrow}
											>
												Next →
											</span>
											<span className={styles.pagerName}>
												{next.name}
											</span>
										</a>
									</Link>
								</nav>
							</footer>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: caseStudies.map((c) => ({ params: { slug: c.slug } })),
	fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
	const slug = params!.slug as string;
	const study = getCaseStudy(slug)!;
	const idx = caseStudies.findIndex((c) => c.slug === slug);
	const len = caseStudies.length;
	const next = caseStudies[(idx + 1) % len];
	const prev = caseStudies[(idx - 1 + len) % len];
	return { props: { study, next, prev } };
};

export default WorkPage;

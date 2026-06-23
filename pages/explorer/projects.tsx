import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { profile } from '../../config/profile';

function Projects() {
	const items = [
		{ name: 'Portfolio', url: '/portfolio' },
		...profile.projects.map((p) => ({
			name: p.name,
			url: `/work/${p.slug}`,
		})),
	];

	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{items.map((project) => (
						<div
							className={styles.listItem}
							key={project.name}
							onClick={() =>
								window.open(
									project.url,
									'_blank',
									'noopener,noreferrer'
								)
							}
						>
							<div className={styles.listItemName}>
								<Image
									src="/svg/chrome.svg"
									alt="icon"
									width={16}
									height={16}
									unoptimized
								></Image>
								<p>{project.name}</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Shortcut</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					))}
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>{profile.username} - Projects</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/projects`}
				/>

				{/* Description */}
				<meta name="description" content="A few things I've built." />

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Projects`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/projects`}
				/>
				<meta
					property="og:description"
					content="A few things I've built."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Projects"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Projects;

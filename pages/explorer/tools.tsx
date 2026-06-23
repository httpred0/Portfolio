import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { profile } from '../../config/profile';

const tools = [
	{ name: 'Figma', icon: 'figma', url: 'https://www.figma.com/' },
	{ name: 'Claude', icon: 'claude', url: 'https://claude.ai/new' },
	{ name: 'Codex', icon: 'codex', url: 'https://openai.com/codex/' },
	{ name: 'Granola', icon: 'granola', url: 'https://www.granola.ai/' },
	{ name: 'Slack', icon: 'slack', url: 'https://slack.com/' },
	{ name: 'Whispr Flow', icon: 'whisprflow', url: 'https://wisprflow.ai/' },
	{ name: 'Cursor', icon: 'cursor', url: 'https://cursor.com/' },
	{ name: 'Notion', icon: 'notion', url: 'https://www.notion.com/' },
];

function Tools() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{tools.map((tool) => (
						<div
							className={styles.listItem}
							key={tool.icon}
							onClick={() =>
								window.open(
									tool.url,
									'_blank',
									'noopener,noreferrer'
								)
							}
						>
							<div className={styles.listItemName}>
								<Image
									src={`/svg/${tool.icon}.svg`}
									alt="icon"
									width={16}
									height={16}
									unoptimized
									className={
										tool.icon === 'notion'
											? 'invert-on-dark'
											: undefined
									}
								></Image>
								<p>{tool.name}</p>
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
				<title>{profile.username} - Tools</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/tools`}
				/>

				{/* Description */}
				<meta
					name="description"
					content="The tools I use daily for design and development."
				/>

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Tools`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/tools`}
				/>
				<meta
					property="og:description"
					content="The tools I use daily for design and development."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Tools"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Tools;

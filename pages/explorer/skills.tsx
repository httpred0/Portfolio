import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { profile } from '../../config/profile';

const skills = [
	{
		name: 'designer-skills.md',
		url: 'https://github.com/julianoczkowski/designer-skills',
	},
	{ name: 'impeccable.md', url: 'https://impeccable.style/#slop' },
	{
		name: 'frontend-design.md',
		url: 'https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md',
	},
	{
		name: 'shadcnui.md',
		url: 'https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md',
	},
	{
		name: 'expo.md',
		url: 'https://github.com/expo/skills/blob/main/plugins/expo/skills/building-native-ui/SKILL.md',
	},
];

function Skills() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{skills.map((skill) => (
						<div
							className={styles.listItem}
							key={skill.name}
							onClick={() =>
								window.open(
									skill.url,
									'_blank',
									'noopener,noreferrer'
								)
							}
						>
							<div className={styles.listItemName}>
								<Image
									src="/svg/md.svg"
									alt="icon"
									width={16}
									height={16}
									unoptimized
								></Image>
								<p>{skill.name}</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Markdown</p>
							<p className={styles.listItemSize}>4kt</p>
						</div>
					))}
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>{profile.username} - Skills</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/skills`}
				/>

				{/* Description */}
				<meta
					name="description"
					content="Design and engineering skills I work with."
				/>

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Skills`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/skills`}
				/>
				<meta
					property="og:description"
					content="Design and engineering skills I work with."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Skills"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Skills;

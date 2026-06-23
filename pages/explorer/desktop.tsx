import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';

function Desktop() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					<Link href="/notepad/about" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/notes/notes.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>About me.txt</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Text Document</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/explorer/projects" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Projects</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/portfolio" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/svg/chrome.svg"
									alt="icon"
									width={16}
									height={16}
									unoptimized
								></Image>
								<p>Portfolio</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Shortcut</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/explorer/tools" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Tools</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/explorer/skills" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Skills</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/explorer/podcasts" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Podcasts I listen to</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
					<Link href="/explorer/links" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Links</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>

					<Link href="/explorer/pictures" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/pictures/pictures.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Pictures</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>

					<Link href="/explorer/videos" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/videos/videos.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Videos</p>
							</div>
							<p className={styles.listItemDateModified}>
								01/01/2026
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kt</p>
						</div>
					</Link>
				</div>
			</>
		);
	};

	return (
		<>
			<Head>
				<title>Pedro Loula - Desktop</title>
				<link
					rel="canonical"
					href="https://www.pedroloula.com/explorer/desktop"
				/>

				{/* Description */}
				<meta
					name="description"
					content="My desktop is beautiful until I start some project and then my desktop is full of temporary files and folders. I don't want to see them."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Pedro Loula - Desktop" />
				<meta
					property="og:url"
					content="https://www.pedroloula.com/explorer/desktop"
				/>
				<meta
					property="og:description"
					content="My desktop is beautiful until I start some project and then my desktop is full of temporary files and folders. I don't want to see them."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="desktop"
					folder="Desktop"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Desktop;

import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { profile } from '../../config/profile';

function Links() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{profile.links.map((link) => {
						const isMail = link.url.startsWith('mailto:');
						return (
							<a
								key={link.name}
								href={link.url}
								target={isMail ? undefined : '_blank'}
								rel="noopener noreferrer"
							>
								<div className={styles.listItem}>
									<div className={styles.listItemName}>
										<Image
											src={`/svg/${link.icon}.svg`}
											alt="icon"
											width={18}
											height={18}
										></Image>
										<p>{link.name}</p>
									</div>
									<p className={styles.listItemDateModified}>
										01/01/2026
									</p>
									<p className={styles.listItemType}>Shortcut</p>
									<p className={styles.listItemSize}>2kt</p>
								</div>
							</a>
						);
					})}
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>Pedro Loula - Links</title>
				<link
					rel="canonical"
					href="https://www.pedroloula.com/explorer/links"
				/>

				{/* Description */}
				<meta
					name="description"
					content="All my social media links combined in one place. How cool is that?"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Pedro Loula - Links" />
				<meta
					property="og:url"
					content="https://www.pedroloula.com/explorer/links"
				/>
				<meta
					property="og:description"
					content="All my social media links combined in one place. How cool is that?"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="/icons/links/links.svg"
					folder="Links"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Links;

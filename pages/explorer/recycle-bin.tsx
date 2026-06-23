import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { profile } from '../../config/profile';

const deletedItems = [
	{ name: 'Illustrator', icon: '/icons/illustrator/illustrator.svg' },
	{ name: 'Photoshop', icon: '/icons/photoshop/photoshop.svg' },
];

function RecycleBin() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{deletedItems.map((item) => (
						<div className={styles.listItem} key={item.name}>
							<div className={styles.listItemName}>
								<Image
									src={item.icon}
									alt="icon"
									width={16}
									height={16}
									unoptimized
								></Image>
								<p>{item.name}</p>
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
				<title>{profile.username} - Recycle Bin</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/recycle-bin`}
				/>

				{/* Description */}
				<meta
					name="description"
					content="Stuff I don't use anymore."
				/>

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Recycle Bin`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/recycle-bin`}
				/>
				<meta
					property="og:description"
					content="Stuff I don't use anymore."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="/icons/trash/trash_full.png"
					folder="Recycle Bin"
					topNav={true}
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default RecycleBin;

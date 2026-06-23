import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Icons from '../../components/modules/Icons/Icons';
import { handleWindowPriority } from '../../components/utils/WindowPriority/WindowPriority';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import MediaPlayer from '../../components/windows/MediaPlayer/MediaPlayer';
import { Context } from '../../context/ContextProvider';
import styles from '../../styles/utils/MediaGrid.module.css';
import { MediaType } from '../../typings';
import { profile } from '../../config/profile';

function Pictures({ data }: { data: MediaType[] }) {
	const [openImage, setOpenImage] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const ImageContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((image) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={image.filename}
						onClick={async () => {
							setOpenImage(image);

							const newWindowState = await handleWindowPriority({
								windowName: 'mediaPlayer',
								windowPriority: windowState,
							});
							if (!newWindowState) return;
							setWindowState(newWindowState);
						}}
					>
						<div className={styles.imageWrapper}>
							<Image
								className="no_click"
								src={image.url}
								alt="icon"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<p className="no_click">{image.filename}</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>{profile.username} - Pictures</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/pictures`}
				/>

				{/* Description */}
				<meta name="description" content="A few pictures of me." />

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Pictures`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/pictures`}
				/>
				<meta property="og:description" content="A few pictures of me." />
			</Head>
			<div style={{ height: '100%' }}>
				{openImage && (
					<MediaPlayer
						media={openImage}
						closeMedia={setOpenImage}
						component={
							<Image
								src={openImage.url}
								alt="icon"
								layout="fill"
								objectFit="contain"
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Pictures"
					topNav={false}
					icon="pictures"
					component={<ImageContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	// Reads every image dropped into /public/images/pictures so you can add or
	// remove photos just by changing files in that folder — no code edits.
	const fs = await import('fs');
	const path = await import('path');

	const dir = path.join(process.cwd(), 'public', 'images', 'pictures');
	const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.svg'];

	let files: string[] = [];
	try {
		files = fs
			.readdirSync(dir)
			.filter((file) => allowed.includes(path.extname(file).toLowerCase()))
			.sort();
	} catch {
		files = [];
	}

	const data: MediaType[] = files.map((file) => {
		const ext = path.extname(file);
		const name = path.basename(file, ext);
		const url = `/images/pictures/${file}`;
		return {
			url,
			secure_url: url,
			thumbnail: url,
			public_id: name,
			filename: name,
			format: ext.replace('.', ''),
		};
	});

	return {
		props: { data },
	};
}

export default Pictures;

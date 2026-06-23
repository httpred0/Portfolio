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

function Videos({ data }: { data: MediaType[] }) {
	const [openVideo, setOpenVideo] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const VideoContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((video) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={video.filename}
						onClick={async () => {
							setOpenVideo(video);

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
								src={video.thumbnail}
								alt="icon"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<p className="no_click">
							{video.filename}.{video.format}
						</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>{profile.username} - Videos</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/videos`}
				/>

				{/* Description */}
				<meta name="description" content="A few videos worth watching." />

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Videos`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/videos`}
				/>
				<meta
					property="og:description"
					content="A few videos worth watching."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				{openVideo && (
					<MediaPlayer
						closeMedia={setOpenVideo}
						media={openVideo}
						component={
							<iframe
								src={openVideo.secure_url}
								title={openVideo.filename}
								style={{
									width: '100%',
									height: '100%',
									border: 'none',
								}}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Videos"
					topNav={false}
					icon="videos"
					component={<VideoContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	// Build the Videos list from the YouTube IDs in profile.ts. Titles come
	// from YouTube's keyless oEmbed endpoint; thumbnails from i.ytimg.com.
	const data: MediaType[] = await Promise.all(
		profile.videos.map(async (video) => {
			let title = 'YouTube video';
			try {
				const res = await fetch(
					`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
				);
				if (res.ok) {
					const json = await res.json();
					if (json?.title) title = json.title;
				}
			} catch {
				// Offline / blocked — fall back to the default title.
			}

			const start = 'start' in video && video.start ? video.start : 0;

			return {
				thumbnail: `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`,
				secure_url: `https://www.youtube.com/embed/${video.id}?autoplay=1${
					start ? `&start=${start}` : ''
				}`,
				filename: title,
				url: `https://www.youtube.com/watch?v=${video.id}`,
				public_id: video.id,
				format: 'mp4',
			};
		})
	);

	return {
		props: { data },
	};
}

export default Videos;

import Head from 'next/head';
import { useContext, useState } from 'react';
import Icons from '../../components/modules/Icons/Icons';
import { handleWindowPriority } from '../../components/utils/WindowPriority/WindowPriority';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import MediaPlayer from '../../components/windows/MediaPlayer/MediaPlayer';
import { Context } from '../../context/ContextProvider';
import styles from '../../styles/utils/MediaGrid.module.css';
import { MediaType } from '../../typings';
import { profile } from '../../config/profile';

function Music({ data }: { data: MediaType[] }) {
	const [openTrack, setOpenTrack] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const MusicContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((track) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={track.public_id}
						onClick={async () => {
							setOpenTrack(track);

							const newWindowState = await handleWindowPriority({
								windowName: 'mediaPlayer',
								windowPriority: windowState,
							});
							if (!newWindowState) return;
							setWindowState(newWindowState);
						}}
					>
						<div className={styles.imageWrapper}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								className="no_click"
								src={track.thumbnail}
								alt={track.filename}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '4px',
								}}
							/>
						</div>
						<p className="no_click">{track.filename}.mp3</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>{profile.username} - Music</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/explorer/music`}
				/>

				{/* Description */}
				<meta name="description" content="Songs I have on repeat." />

				{/* OpenGraph */}
				<meta
					property="og:title"
					content={`${profile.username} - Music`}
				/>
				<meta
					property="og:url"
					content={`${profile.siteUrl}/explorer/music`}
				/>
				<meta
					property="og:description"
					content="Songs I have on repeat."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				{openTrack && (
					<MediaPlayer
						closeMedia={setOpenTrack}
						media={openTrack}
						component={
							<iframe
								src={openTrack.secure_url}
								title={openTrack.filename}
								style={{
									width: '100%',
									height: '100%',
									border: 'none',
								}}
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								allowFullScreen
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Music"
					topNav={false}
					icon="music"
					component={<MusicContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	// Build the Music list from the Spotify track IDs in profile.ts. Titles +
	// album art come from Spotify's keyless oEmbed endpoint.
	const data: MediaType[] = await Promise.all(
		profile.music.map(async (id) => {
			let title = 'Spotify track';
			let thumbnail = '';
			try {
				const res = await fetch(
					`https://open.spotify.com/oembed?url=https://open.spotify.com/track/${id}`
				);
				if (res.ok) {
					const json = await res.json();
					if (json?.title) title = json.title;
					if (json?.thumbnail_url) thumbnail = json.thumbnail_url;
				}
			} catch {
				// Offline / blocked — fall back to defaults.
			}

			return {
				thumbnail,
				secure_url: `https://open.spotify.com/embed/track/${id}`,
				filename: title,
				url: `https://open.spotify.com/track/${id}`,
				public_id: id,
				format: 'mp3',
			};
		})
	);

	return {
		props: { data },
	};
}

export default Music;

import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';
import { profile } from '../config/profile';

export default function Home() {
	return (
		<>
			<Head>
				<title>{profile.username}</title>
				<link rel="canonical" href={profile.siteUrl} />

				{/* Description */}
				<meta name="description" content={profile.tagline} />

				{/* OpenGraph */}
				<meta property="og:title" content={profile.username} />
				<meta property="og:url" content={profile.siteUrl} />
				<meta property="og:description" content={profile.tagline} />
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}

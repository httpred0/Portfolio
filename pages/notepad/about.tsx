import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import Notepad from '../../components/windows/Notepad/Notepad';
import { profile, getAge } from '../../config/profile';
function About() {
	const textContent = () => {
		const age = getAge();
		return profile.about.text.replace(
			'{age}',
			age !== null ? String(age) : ''
		);
	};

	return (
		<>
			<Head>
				<title>{profile.username} - About me</title>
				<link
					rel="canonical"
					href={`${profile.siteUrl}/notepad/about`}
				/>

				{/* Description */}
				<meta
					name="description"
					content="Who am I? I guess you will find out after reading this."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content={`${profile.username} - About me`} />
				<meta
					property="og:url"
					content={`${profile.siteUrl}/notepad/about`}
				/>
				<meta
					property="og:description"
					content="Who am I? I guess you will find out after reading this."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Notepad initialText={textContent()} />
				<Icons />
			</div>
		</>
	);
}

export default About;

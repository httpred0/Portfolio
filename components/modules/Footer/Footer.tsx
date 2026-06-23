import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { FiVolume2 } from 'react-icons/fi';
import { ErrorType } from '../../../typings';
import Error from '../../windows/Error/Error';
import styles from './Footer.module.css';
import Weather from './Weather';
import WindowsMenu from './WindowsMenu';

function Footer() {
	const [winMenu, setWinMenu] = useState(false);
	const [errors, setError] = useState([] as ErrorType[]);

	const handleError = (err: string) => {
		setError([...errors, { error: err, index: errors.length }]);
	};

	const handleWinMenu = () => {
		setWinMenu(!winMenu);
	};

	const [hourStr, setHourStr] = useState('00:00 PM');
	const [dateStr, setDateStr] = useState('1/1/1970');

	useEffect(() => {
		let isMounted = true;
		setInterval(() => {
			if (typeof navigator !== 'undefined') {
				if (isMounted)
					setHourStr(
						new Date().toLocaleTimeString(navigator.language, {
							hour: '2-digit',
							minute: '2-digit',
						})
					);
				if (isMounted)
					setDateStr(
						new Date().toLocaleDateString(navigator.language)
					);
			}
		}, 1000);
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			{errors &&
				errors.map((err, index) => {
					return (
						<Error
							key={err.index}
							error={err.error}
							errors={errors}
							setError={setError}
							index={err.index}
						/>
					);
				})}
			<div className={`${styles.container} taskbar`}>
				<Weather />
				<section className={styles.iconContainer}>
					<div
						className={`${styles.icon} windowsIcon`}
						onClick={() => handleWinMenu()}
					>
						<Image
							src={'/icons/windows/windows.png'}
							width={25}
							height={25}
							alt="logo"
							className="windowsIcon"
						/>
					</div>
					<Link href="/explorer/quick-access" passHref>
						<div className={styles.icon}>
							<Image
								src={'/icons/explorer/explorer.png'}
								width={25}
								height={25}
								alt="logo"
							/>
						</div>
					</Link>
					<div
						className={styles.icon}
						onClick={() =>
							window.open(
								'https://open.spotify.com/intl-pt/artist/5ihrpwA9GYrZ51RKwQ9tja',
								'_blank',
								'noopener,noreferrer'
							)
						}
					>
						<Image
							src={'/icons/spotify/spotify.png'}
							width={25}
							height={25}
							alt="logo"
						/>
					</div>
					{[
						{ name: 'Claude', icon: 'claude', url: 'https://claude.ai/new' },
						{ name: 'Codex', icon: 'codex', url: 'https://openai.com/codex/' },
						{ name: 'Figma', icon: 'figma', url: 'https://www.figma.com/' },
						{ name: 'Granola', icon: 'granola', url: 'https://www.granola.ai/' },
						{ name: 'Slack', icon: 'slack', url: 'https://slack.com/' },
						{ name: 'Whispr Flow', icon: 'whisprflow', url: 'https://wisprflow.ai/' },
					].map((app) => (
						<div
							key={app.icon}
							className={styles.icon}
							onClick={() =>
								window.open(
									app.url,
									'_blank',
									'noopener,noreferrer'
								)
							}
						>
							<Image
								src={`/svg/${app.icon}.svg`}
								width={25}
								height={25}
								alt={app.name}
								unoptimized
							/>
						</div>
					))}
				</section>
				<section className={styles.toolbarContainer}>
					<div className={styles.language}>
						<p>ENG</p>
					</div>
					<div className={styles.icon}>
						<AiOutlineWifi />
						<FiVolume2 />
					</div>
					<div className={styles.dateIcons}>
						<p>{hourStr}</p>
						<p>{dateStr}</p>
					</div>
				</section>
			</div>
			<WindowsMenu winMenu={winMenu} handleWinMenu={handleWinMenu} />
		</>
	);
}

export default Footer;

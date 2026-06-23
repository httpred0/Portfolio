import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './Bluescreen.module.css';

type Props = {
	errorCode: string;
};

function Bluescreen({ errorCode }: Props) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let p = 0;
		// Climb to 100% quickly (always advancing, never stalling at 0)...
		const interval = setInterval(() => {
			p = Math.min(100, p + Math.floor(Math.random() * 12) + 8);
			setProgress(p);
			if (p >= 100) {
				clearInterval(interval);
				// ...then "restart" back to the Windows desktop so the user
				// isn't trapped. (Skip on the mobile width screen, where
				// returning would only re-trigger this same screen.)
				if (errorCode !== 'SCREEN_WIDTH_NOT_SUPPORTED') {
					setTimeout(() => {
						window.location.href = '/';
					}, 600);
				}
			}
		}, 130);
		return () => clearInterval(interval);
	}, [errorCode]);

	return (
		<>
			<Head>
				<title>Pedro Loula - {errorCode || 'ERROR'}</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div>
						<h1>:(</h1>
						<h2>
							Your PC ran into a problem and needs to restart.
							We&apos;re just collecting some error info, and then
							we&apos;ll restart for you.
						</h2>
					</div>
					<h2>{progress}% complete</h2>
				</div>
			</div>
		</>
	);
}

export default Bluescreen;

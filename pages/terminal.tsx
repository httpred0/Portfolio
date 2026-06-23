import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';
import { default as TerminalComponent } from '../components/windows/Terminal/Terminal';

function Terminal() {
	return (
		<>
			<Head>
				<title>Pedro Loula - Terminal</title>
				<link rel="canonical" href="https://www.pedroloula.com/terminal" />

				{/* Description */}
				<meta
					name="description"
					content="A place to execute commands and feel like being a hacker."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Pedro Loula - Terminal" />
				<meta
					property="og:url"
					content="https://www.pedroloula.com/terminal"
				/>
				<meta
					property="og:description"
					content="A place to execute commands and feel like being a hacker."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<TerminalComponent />
				<Icons />
			</div>
		</>
	);
}

export default Terminal;

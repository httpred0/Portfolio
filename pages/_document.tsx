// pages/_document.js

import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Favicon */}
				<link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
				<link rel="alternate icon" href="/favicon.ico?v=2" />

				{/* Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
					rel="stylesheet"
				/>

				{/* SEO & Open Graph meta tags */}
				<meta name="theme-color" content="#55FFFF" />
				<meta charSet="utf-8" />
				<meta name="language" content="english" />

				<meta name="author" content="Pedro Loula" />
				<meta name="designer" content="Pedro Loula" />
				<meta name="publisher" content="Pedro Loula" />

				<meta
					name="keywords"
					content="Pedro Loula, product designer, design systems, UX, UI, AI, product design, portfolio"
				/>

				<meta name="robots" content="index, follow" />
				<meta name="subject" content="Personal" />

				{/* Global OpenGraph tags */}
				<meta
					property="og:site_name"
					content="Pedro Loula — Product Designer"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.pedroloula.com" />
				<meta
					property="og:image"
					content="https://www.pedroloula.com/og.png"
				/>

				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
							});
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

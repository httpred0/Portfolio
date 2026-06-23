import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';

function Documents() {
	return (
		<>
			<Head>
				<title>Pedro Loula - Documents</title>
				<link
					rel="canonical"
					href="https://www.pedroloula.com/explorer/documents"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Who uses this folder? Maybe I should write 100 reasons why I don't use Linux as my primary OS here."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Pedro Loula - Documents" />
				<meta
					property="og:url"
					content="https://www.pedroloula.com/explorer/documents"
				/>
				<meta
					property="og:description"
					content="Who uses this folder? Maybe I should write 100 reasons why I don't use Linux as my primary OS here."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="Documents"
					topNav={true}
					icon="documents"
				/>
				<Icons />
			</div>
		</>
	);
}

export default Documents;

import { useContext, useEffect } from 'react';
import { Context } from '../../../context/ContextProvider';
import Footer from '../../modules/Footer/Footer';
import styles from './Layout.module.css';

function Layout({ children }: { children: React.ReactNode }) {
	const { themeState } = useContext(Context);
	const [theme] = themeState;

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<div className={`${styles.container} layout`}>{children}</div>
			<Footer />
		</>
	);
}

export default Layout;

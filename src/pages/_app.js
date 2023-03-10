import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

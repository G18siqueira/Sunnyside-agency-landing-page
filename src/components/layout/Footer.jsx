import Image from 'next/image';

import LogoImg from '/public/assets/logo.svg';

import styles from './footer.module.scss';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.logo}>
						<Image src={LogoImg} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

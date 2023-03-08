import Image from 'next/image';
import useAnimationScroll from '../hooks/useAnimationScroll';

import { LinkNav } from './LinkNav';
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

import LogoImg from '/public/assets/logo-footer.svg';

import styles from './footer.module.scss';
const Footer = () => {
	useAnimationScroll();

	return (
		<footer className={`${styles.footer}`}>
			<div className="container">
				<div className={styles.content}>
					<div className={styles.logo}>
						<Image src={LogoImg} alt="logo" />
					</div>
					<nav>
						<LinkNav aria-label="link" href="/#grid">
							About
						</LinkNav>
						<LinkNav aria-label="link" href="/#">
							Services
						</LinkNav>
						<LinkNav aria-label="link" href="/#">
							Projects
						</LinkNav>
					</nav>
					<div className={styles.social}>
						<LinkNav aria-label="link" href="/#">
							<AiFillFacebook />
						</LinkNav>
						<LinkNav aria-label="link" href="/#">
							<AiOutlineInstagram />
						</LinkNav>
						<LinkNav aria-label="link" href="/#">
							<AiOutlineTwitter />
						</LinkNav>
						<LinkNav aria-label="link" href="/#">
							<BsPinterest />
						</LinkNav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

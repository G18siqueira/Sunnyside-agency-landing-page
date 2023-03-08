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
						<Image src={LogoImg} />
					</div>
					<nav>
						<LinkNav href="/#grid">About</LinkNav>
						<LinkNav href="/#">Services</LinkNav>
						<LinkNav href="/#">Projects</LinkNav>
					</nav>
					<div className={styles.social}>
						<LinkNav href="/">
							<AiFillFacebook />
						</LinkNav>
						<LinkNav href="/">
							<AiOutlineInstagram />
						</LinkNav>
						<LinkNav href="/">
							<AiOutlineTwitter />
						</LinkNav>
						<LinkNav href="/">
							<BsPinterest />
						</LinkNav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

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
						<LinkNav ariaLabel="link" href="/#grid">
							About
						</LinkNav>
						<LinkNav ariaLabel="link" href="/#">
							Services
						</LinkNav>
						<LinkNav ariaLabel="link" href="/#">
							Projects
						</LinkNav>
					</nav>
					<div className={styles.social}>
						<LinkNav ariaLabel="link" href="/#">
							<AiFillFacebook />
						</LinkNav>
						<LinkNav ariaLabel="link" href="/#">
							<AiOutlineInstagram />
						</LinkNav>
						<LinkNav ariaLabel="link" href="/#">
							<AiOutlineTwitter />
						</LinkNav>
						<LinkNav ariaLabel="link" href="/#">
							<BsPinterest />
						</LinkNav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

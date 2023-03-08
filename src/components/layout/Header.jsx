import { useState, useEffect } from 'react';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';
import { LinkNav } from './LinkNav.jsx';

import Image from 'next/image';
import useAnimationScroll from '../hooks/useAnimationScroll.jsx';

import LogoImg from '/public/assets/logo.svg';
import styles from './header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [lastScrollPos, setLastScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('header');
			const scrollY = window.scrollY;

			if (scrollY > lastScrollPos) {
				header.classList.add(styles.scrollHide);
			} else {
				header.classList.remove(styles.scrollHide);
			}

			setLastScrollPos(scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollPos]);

	const handleClick = () => {
		setToggle(!toggle);
	};

	const navVisible = toggle ? styles.navShow : styles.navHide;
	useAnimationScroll();

	return (
		<header className={`${styles.header} `}>
			<div className={`container ${styles.container}`}>
				<div className={styles.logo}>
					<LinkNav href="/">
						<Image src={LogoImg} />
					</LinkNav>
				</div>
				<nav className={navVisible}>
					<LinkNav onClick={() => setToggle(false)} href="/#grid">
						About
					</LinkNav>
					<LinkNav onClick={() => setToggle(false)} href="/#">
						Services
					</LinkNav>
					<LinkNav onClick={() => setToggle(false)} href="/#">
						Projects
					</LinkNav>
					<LinkNav
						onClick={() => setToggle(false)}
						className={styles.linkContact}
						href="/#"
					>
						Contact
					</LinkNav>

					<button className={styles.btn} onClick={handleClick}>
						<HiOutlineXMark />
					</button>
				</nav>
				<button className={styles.btn} onClick={handleClick}>
					<HiBars3 />
				</button>
			</div>
		</header>
	);
};

export default Header;

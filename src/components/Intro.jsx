import Image from 'next/image';
import useAnimationScroll from './hooks/useAnimationScroll';

import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

import IntroImageMobi from 'public/assets/general/image-header-mob.jpg';
import IntroImageDesk from 'public/assets/general/image-header.jpg';

import styles from './intro.module.scss';
const Intro = () => {
	useAnimationScroll();

	return (
		<section className={`${styles.intro} `}>
			<div className={styles.imageBg}>
				<picture>
					<source
						media="(max-width: 768px)"
						srcSet={IntroImageMobi}
					/>
					<source
						media="(min-width: 769px)"
						srcSet={IntroImageDesk}
					/>
					<Image
						src={IntroImageDesk}
						className={`animation animation--zoomIn`}
					/>
				</picture>
			</div>

			<div className={styles.infos}>
				<h1>We Are Creatives</h1>
				<a href="#grid">
					<HiOutlineArrowNarrowDown />
				</a>
			</div>
		</section>
	);
};

export default Intro;

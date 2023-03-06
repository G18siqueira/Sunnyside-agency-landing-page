import Image from 'next/image';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

import IntroImageMobi from 'public/assets/general/image-header-mob.jpg';
import IntroImageDesk from 'public/assets/general/image-header.jpg';

import styles from './intro.module.scss';
const Intro = () => {
	return (
		<section className={styles.intro}>
			<div className={styles.imageBg}>
				<picture>
					<source
						media="(max-width: 768px)"
						srcset={IntroImageMobi}
					/>
					<source
						media="(min-width: 769px)"
						srcset={IntroImageDesk}
					/>
					<Image src={IntroImageDesk} />
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

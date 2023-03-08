import Image from 'next/image';
import Link from 'next/link';

import { useEffect } from 'react';
import useAnimationScroll from './hooks/useAnimationScroll';

import ImageGrid1 from '/public/assets/general/image-transform.jpg';
import ImageGrid2 from '/public/assets/general/image-stand-out.jpg';
import ImageGrid3 from '/public/assets/general/image-graphic-design.jpg';
import ImageGrid4 from '/public/assets/general/image-photography.jpg';

import styles from './grid.module.scss';

const Grid = () => {
	useAnimationScroll();

	return (
		<section className={styles.grid} id="grid">
			<div className="container-custom">
				<div className={styles.content}>
					<div
						className={`${styles.gridItem} ${styles.gridItemText} animation animation--from-left `}
					>
						<div className={styles.block}>
							<h2>Transform your brand</h2>
							<p>
								We are a full-service creative agency
								specializing in helping brands grow fast. Engage
								your clients through compelling visuals that do
								most of the marketing for you.
							</p>
							<Link
								className={styles.underlineYellow}
								href="/#"
								aria-label="link"
							>
								Learn more
							</Link>
						</div>
					</div>

					<div
						className={`${styles.gridItem} animation animation--from-right`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid1} alt="grid" />
						</div>
					</div>

					<div
						className={`${styles.gridItem} animation animation--from-left`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid2} alt="grid" />
						</div>
					</div>

					<div
						className={`${styles.gridItem} ${styles.gridItemText} animation animation--from-right`}
					>
						<div className={styles.block}>
							<h2>Stand out to the right audience</h2>
							<p>
								Using a collaborative formula of designers,
								researchers, photographers, videographers, and
								copywriters, we'll build and extend your brand
								in digital places.
							</p>
							<Link
								className={styles.underlineRed}
								href="/#"
								aria-label="link"
							>
								Learn more
							</Link>
						</div>
					</div>

					<div
						className={`${styles.gridItem} ${styles.gridItemCustom} animation animation--from-top`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid3} alt="grid" />
						</div>

						<div className={`${styles.block} ${styles.colorA}`}>
							<h3>Graphic design</h3>
							<p>
								Great design makes you memorable. We deliver
								artwork that underscores your brand message and
								captures potential clients' attention.
							</p>
						</div>
					</div>

					<div
						className={`${styles.gridItem} ${styles.gridItemCustom} animation animation--from-bottom`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid4} alt="grid" />
						</div>

						<div className={`${styles.block} ${styles.colorB}`}>
							<h3>Photography</h3>
							<p>
								Increase your credibility by getting the most
								stunning, high-quality photos that improve your
								business image.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Grid;

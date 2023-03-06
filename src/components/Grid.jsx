import Image from 'next/image';

import ImageGrid1 from '/public/assets/general/image-transform.jpg';
import ImageGrid2 from '/public/assets/general/image-stand-out.jpg';
import ImageGrid3 from '/public/assets/general/image-graphic-design.jpg';
import ImageGrid4 from '/public/assets/general/image-photography.jpg';

import styles from './grid.module.scss';

const Grid = () => {
	return (
		<section className={styles.grid} id="grid">
			<div className="container-custom">
				<div className={styles.content}>
					<div
						className={`${styles.gridItem} ${styles.gridItemText}`}
					>
						<div className={styles.block}>
							<h3>Transform your brand</h3>
							<p>
								We are a full-service creative agency
								specializing in helping brands grow fast. Engage
								your clients through compelling visuals that do
								most of the marketing for you.
							</p>
							<a>Learn more</a>
						</div>
					</div>

					<div className={styles.gridItem}>
						<div className={styles.image}>
							<Image src={ImageGrid1} />
						</div>
					</div>

					<div className={styles.gridItem}>
						<div className={styles.image}>
							<Image src={ImageGrid2} />
						</div>
					</div>

					<div
						className={`${styles.gridItem} ${styles.gridItemText}`}
					>
						<div className={styles.block}>
							<h3>Stand out to the right audience</h3>
							<p>
								Using a collaborative formula of designers,
								researchers, photographers, videographers, and
								copywriters, we'll build and extend your brand
								in digital places.
							</p>
							<a>Learn more</a>
						</div>
					</div>

					<div
						className={`${styles.gridItem} ${styles.gridItemCustom}`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid3} />
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
						className={`${styles.gridItem} ${styles.gridItemCustom}`}
					>
						<div className={styles.image}>
							<Image src={ImageGrid4} />
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

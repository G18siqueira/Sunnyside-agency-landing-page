import styles from './footerGrid.module.scss';

import Image from 'next/image';

import ImageGrid1 from '/public/assets/general/image-gallery-milkbottles.jpg';
import ImageGrid1mob from '/public/assets/general/image-gallery-milkbottles-mob.jpg';
import ImageGrid2 from '/public/assets/general/image-gallery-orange.jpg';
import ImageGrid2mob from '/public/assets/general/image-gallery-orange-mob.jpg';
import ImageGrid3 from '/public/assets/general/image-graphic-design.jpg';
import ImageGrid3mob from '/public/assets/general/image-graphic-design-mob.jpg';
import ImageGrid4 from '/public/assets/general/image-gallery-sugarcubes.jpg';
import ImageGrid4mob from '/public/assets/general/image-gallery-sugar-cubes-mob.jpg';

const FooterGrid = () => {
	return (
		<section className={styles.footerGrid}>
			<div className={styles.content}>
				<div className={styles.gridItem}>
					<picture>
						<source
							media="(max-width: 768px)"
							srcset={ImageGrid1mob}
						/>
						<source
							media="(min-width: 769px)"
							srcset={ImageGrid1}
						/>
						<Image src={ImageGrid1} />
					</picture>
				</div>

				<div className={styles.gridItem}>
					<picture>
						<source
							media="(max-width: 768px)"
							srcset={ImageGrid2mob}
						/>
						<source
							media="(min-width: 769px)"
							srcset={ImageGrid2}
						/>
						<Image src={ImageGrid2} />
					</picture>
				</div>
				<div className={styles.gridItem}>
					<picture>
						<source
							media="(max-width: 768px)"
							srcset={ImageGrid3mob}
						/>
						<source
							media="(min-width: 769px)"
							srcset={ImageGrid3}
						/>
						<Image src={ImageGrid3} />
					</picture>
				</div>

				<div className={styles.gridItem}>
					<picture>
						<source
							media="(max-width: 768px)"
							srcset={ImageGrid4mob}
						/>
						<source
							media="(min-width: 769px)"
							srcset={ImageGrid4}
						/>
						<Image src={ImageGrid4} />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default FooterGrid;

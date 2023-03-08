import Image from 'next/image';
import useAnimationScroll from './hooks/useAnimationScroll';
import styles from './footerGrid.module.scss';

import ImageGrid1 from '/public/assets/general/image-gallery-milkbottles.jpg';
import ImageGrid1mob from '/public/assets/general/image-gallery-milkbottles-mob.jpg';
import ImageGrid2 from '/public/assets/general/image-gallery-orange.jpg';
import ImageGrid2mob from '/public/assets/general/image-gallery-orange-mob.jpg';
import ImageGrid3 from '/public/assets/general/image-gallery-cone.jpg';
import ImageGrid3mob from '/public/assets/general/image-gallery-cone-mob.jpg';
import ImageGrid4 from '/public/assets/general/image-gallery-sugarcubes.jpg';
import ImageGrid4mob from '/public/assets/general/image-gallery-sugar-cubes-mob.jpg';

const FooterGrid = () => {
	useAnimationScroll();
	return (
		<section className={styles.footerGrid}>
			<div className={styles.content}>
				<div
					className={`${styles.gridItem} animation animation--from-left`}
				>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={ImageGrid1mob}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={ImageGrid1}
						/>
						<Image src={ImageGrid1} alt='grid'/>
					</picture>
				</div>

				<div
					className={`${styles.gridItem} animation animation--from-top`}
				>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={ImageGrid2mob}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={ImageGrid2}
						/>
						<Image src={ImageGrid2} alt='grid'/>
					</picture>
				</div>
				<div
					className={`${styles.gridItem} animation animation--from-right`}
				>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={ImageGrid3mob}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={ImageGrid3}
						/>
						<Image src={ImageGrid3} alt='grid'/>
					</picture>
				</div>

				<div
					className={`${styles.gridItem} animation animation--from-bottom`}
				>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet={ImageGrid4mob}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={ImageGrid4}
						/>
						<Image src={ImageGrid4} alt='grid'/>
					</picture>
				</div>
			</div>
		</section>
	);
};

export default FooterGrid;

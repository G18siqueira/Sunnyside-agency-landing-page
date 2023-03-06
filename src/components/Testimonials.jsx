import styles from './testimonials.module.scss';

import Image from 'next/image';

import PhotoImage1 from '/public/assets/peoples/image-emily.jpg';
import PhotoImage2 from '/public/assets/peoples/image-thomas.jpg';
import PhotoImage3 from '/public/assets/peoples/image-jennie.jpg';

const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<div className="container">
				<h1>Client Testimonials</h1>
				<div className={styles.content}>
					<div className={styles.people}>
						<div className={styles.image}>
							<Image src={PhotoImage1} />
						</div>
						<div className={styles.text}>
							<p>
								We put our trust in Sunnyside and they
								delivered, making sure our needs were met and
								deadlines were always hit.
							</p>
						</div>
						<div className={styles.name}>
							<h3>Emily R.</h3>
							<p>Marketing Director</p>
						</div>
					</div>

					<div className={styles.people}>
						<div className={styles.image}>
							<Image src={PhotoImage2} />
						</div>
						<div className={styles.text}>
							<p>
								Sunnyside's enthusiasm coupled with their keen
								interest in our brand's success made it a
								satisfying and enjoyable experience.
							</p>
						</div>
						<div className={styles.name}>
							<h3>Thomas S.</h3>
							<p>Chief Operating</p>
						</div>
					</div>

					<div className={styles.people}>
						<div className={styles.image}>
							<Image src={PhotoImage3} />
						</div>
						<div className={styles.text}>
							<p>
								Officer Incredible end result! Our sales
								increased over 400% when we worked with
								Sunnyside. Highly recommended!
							</p>
						</div>
						<div className={styles.name}>
							<h3>Jennie F.</h3>
							<p>Business Owner</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

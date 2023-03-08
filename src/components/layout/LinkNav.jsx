import Link from 'next/link';
import styles from './linkNav.module.scss';

export const LinkNav = ({ className, onClick, href, ariaLabel, children }) => {
	return (
		<Link
			onClick={onClick}
			className={className}
			href={href}
			aria-label={ariaLabel}
		>
			{children}
		</Link>
	);
};

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface BackSectionProps extends PropsWithChildren {
	href: Url;
}

const BackSection = ({ href, children }: BackSectionProps) => {
	return (
		<section className='flex items-center justify-center'>
			<Link
				href={href}
				className='group flex w-full cursor-pointer items-center rounded-md bg-foreground px-6 py-3 text-background transition-all duration-300 hover:pl-3 hover:pr-12 hover:opacity-80 sm:w-3/4 md:w-96'
				aria-label='Volver a la lista de música'>
				<FontAwesomeIcon
					icon={faAngleLeft}
					size='1x'
					className='max-w-2 flex-shrink-0 cursor-pointer transition-all duration-700 group-hover:mr-4 group-hover:animate-pulse'
				/>
				<div className='flex-grow cursor-pointer select-none text-center transition-all duration-300 group-hover:flex-grow-0'>
					{children}
				</div>
			</Link>
		</section>
	);
};

export default BackSection;

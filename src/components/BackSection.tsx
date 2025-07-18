import Link from "next/link";
import { PropsWithChildren } from "react";

const BackSection = ({ children }: PropsWithChildren) => {
	return (
		<section className='flex items-center justify-center'>
			<Link
				href='/music'
				className='group flex w-full items-center rounded-md bg-foreground px-6 py-3 text-background transition-all duration-300 hover:pl-3 hover:pr-12 hover:opacity-80 sm:w-3/4 md:w-96'
				aria-label='Volver a la lista de música'>
				<i className='fa fa-angle-left flex-shrink-0 transition-all duration-700 group-hover:mr-4 group-hover:animate-pulse'></i>
				<div className='flex-grow text-center transition-all duration-300 group-hover:flex-grow-0'>
					{children}
				</div>
			</Link>
		</section>
	);
};

export default BackSection;

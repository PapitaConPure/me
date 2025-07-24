'use client';

import getRoot from '@/lib/getroot';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { IframeHTMLAttributes, useState } from 'react';

interface VideoProps extends IframeHTMLAttributes<HTMLIFrameElement> {
	src: string;
	thumbnailUrl?: string;
}

export function YouTubeVideo({
	src,
	thumbnailUrl,
	className = '',
	...props
}: VideoProps) {
	const [loading, setLoading] = useState(true);

	const embedSrc = src.replace(
		'https://www.youtube.com/watch?v=',
		'https://www.youtube.com/embed/',
	);

	const appendix = embedSrc.includes('?') ? '&' : '?';

	const finalSrc = `${embedSrc}${appendix}&fs=0&iv_load_policy=3&rel=0&showinfo=0${process.env.NODE_ENV === 'production' ? '&origin=https://papitaconpure.github.io' : ''}&rel=0`;

	return (
		<div className={`relative ${className}`}>
			{loading && thumbnailUrl && (
				<div className='absolute h-full w-full rounded-md'>
					<Image
						src={getRoot(thumbnailUrl)}
						alt='Video thumbnail'
						className='h-full w-full rounded-md object-cover'
						width={1280}
						height={720}
					/>
				</div>
			)}
			{loading && (
				<div
					className={`absolute flex h-full w-full animate-pulse items-center justify-center rounded-md ${thumbnailUrl ? '' : 'border'} border-secondary-main`}>
					<FontAwesomeIcon icon={faYoutube} size='4x' className='text-secondary-700' />
				</div>
			)}
			<iframe
				loading='lazy'
				className={`absolute inset-0 h-full w-full rounded-md transition-opacity duration-300 ${
					loading ? 'opacity-0' : 'opacity-100'
				}`}
				src={finalSrc}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				onLoad={() => setLoading(false)}
				{...props}
			/>
		</div>
	);
}

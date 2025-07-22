'use client';

import React, { AnchorHTMLAttributes, ReactNode, useState } from 'react';

interface DirectDownloadButtonProps {
	downloadStageChildren: ReactNode;
	idleClassName?: string;
	downloadingClassName?: string;
}

function DirectDownloadButton({
	downloadStageChildren,
	className,
	children,
	...props
}: DirectDownloadButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
	const [downloading, setDownloading] = useState(false);

	return (
		<a
			{...props}
			rel='noopener noreferrer'
			className={`${className} ${downloading ? 'pointer-events-none opacity-60' : ''}`}
			onClick={() => {
				setDownloading(true);
				setTimeout(() => setDownloading(false), 2000);
			}}>
			{downloading ? downloadStageChildren : children}
		</a>
	);
}

export default DirectDownloadButton;

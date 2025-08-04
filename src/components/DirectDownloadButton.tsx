'use client';

import React, { AnchorHTMLAttributes, ReactNode, useState } from 'react';

interface DirectDownloadButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	downloadStageChildren: ReactNode;
	idleClassName?: string;
	downloadingClassName?: string;
}

function DirectDownloadButton({
	downloadStageChildren,
	className,
	children,
	...props
}: DirectDownloadButtonProps) {
	const [downloading, setDownloading] = useState(false);

	return (
		<a
			{...props}
			rel='noopener noreferrer'
			className={`${className} ${downloading ? 'pointer-events-none opacity-60' : ''}`}
			tabIndex={0}
			onClick={() => {
				setDownloading(true);
				setTimeout(() => setDownloading(false), 2000);
			}}>
			{downloading ? downloadStageChildren : children}
		</a>
	);
}

export default DirectDownloadButton;

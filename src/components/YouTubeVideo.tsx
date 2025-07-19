'use client';

import { IframeHTMLAttributes, useState } from "react";

interface VideoProps {
    src: string;
};

export function Video({
    src,
    className = '',
    ...props
}: VideoProps & IframeHTMLAttributes<HTMLIFrameElement>) {
    const [ loading, setLoading ] = useState(true);

    const embedSrc = src.replace(
        'https://www.youtube.com/watch?v=',
        'https://www.youtube.com/embed/',
    );
    
	return (
        <div className={`relative ${className}`}>
            <iframe
                className={`w-full h-full rounded-md transition-opacity duration-300 ${
                    loading ? 'opacity-0' : 'opacity-100'
                }`}
                src={embedSrc}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                onLoad={() => setLoading(false)}
                {...props}
            />
        </div>
	);
}

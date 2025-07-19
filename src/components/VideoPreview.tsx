import getRoot from '@/lib/getroot';
import React from 'react'

interface VideoPreviewProps {
    url: string;
    format: string;
    className: string;
}

function VideoPreview({ url, format, className }: VideoPreviewProps) {
    return (
        <video
            autoPlay
            loop
            className={className}>
            <source
                src={getRoot(url)}
                type={`video/${format}`}
            />
            Your browser does not support the «video» element.
        </video>
    );
}

export default VideoPreview;

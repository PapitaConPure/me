import getRoot from '@/lib/getroot';
import React from 'react'

interface AudioPreviewProps {
    url: string;
    format: string;
    className: string;
}

function AudioPreview({ url, format, className }: AudioPreviewProps) {
    return (
        <audio
            controls
            controlsList='nodownload noremoteplayback nofullscreen'
            className={className}>
            <source
                src={getRoot(url)}
                type={`audio/${format}`}
            />
            Your browser does not support the «audio» element.
        </audio>
    );
}

export default AudioPreview;

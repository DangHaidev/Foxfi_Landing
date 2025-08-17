import React from 'react';

const VideoBackground = () => {
    return (
        <div className="video-background-container">
            <video autoPlay muted loop playsInline className="video-element">
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;

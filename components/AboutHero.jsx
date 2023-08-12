'use client'
import ReactPlayer from 'react-player';
import video from '../public/heroaboutvideo.mp4';
const AboutHero = () => {
    return(
<div className="hero-vid-wrapper">
            <ReactPlayer
            className="reactPlayer"
            url={video}
            playing={true}
            loop={true}
            volume={0}
            muted={true}
            playsinline={true}
            width={'100%'}
            height={'100%'}
            />
            </div>
    );
};

export default AboutHero;
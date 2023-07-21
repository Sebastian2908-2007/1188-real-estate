import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

const HouseDetailsPage = ({ houseInfoId }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    async function fetchVideoUrl() {
      try {
        const response = await fetch(`/api/video?houseInfoId=${houseInfoId}`);
        if (!response.ok) {
          throw new Error('Video not found.');
        }
        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoUrl);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    }

    fetchVideoUrl();
  }, [houseInfoId]);

  return (
    <div>
      <h1>House Details</h1>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
};

export default HouseDetailsPage;

'use client'
import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import RecordRTC from 'recordrtc';

const SERVER_UPLOAD_URL = '/api/uploadVideo'; // Replace with your actual API route URL


const CameraRecorder = () => {
  const webcamRef = useRef(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [cameraPermission, setCameraPermission] = useState(null);

  useEffect(() => {
    if (!cameraPermission) {
      requestCameraPermission();
    }
  }, [cameraPermission]);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setCameraPermission(true);
      webcamRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
      setCameraPermission(false);
    }
  };

  const startRecording = () => {
    if (!isRecording) {
      const options = { mimeType: 'video/webm;codecs=vp9' };
      const stream = webcamRef.current.stream;
      const recordStream = RecordRTC(stream, options);
      recordStream.startRecording();
      setRecorder(recordStream);
      setIsRecording(true);

      // Reset recordedChunks before starting a new recording
      setRecordedChunks([]);
    }
  };

  const stopRecording = async () => {
    if (isRecording) {
      recorder.stopRecording(() => {
        setIsRecording(false);

        const blob = recorder.getBlob();
        setRecordedChunks([blob]);
        uploadVideo(blob);
      });
    }
  };

  const uploadVideo = async (blob) => {
    try {
      const formData = new FormData();
      formData.append('video', blob, 'recording.webm');

      const response = await fetch(SERVER_UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const { videoUrl } = await response.json();
        console.log('Video uploaded successfully:', videoUrl);
      } else {
        console.error('Video upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      {cameraPermission === null ? (
        <div>Loading...</div>
      ) : cameraPermission === false ? (
        <div>Camera permission denied. Please grant permission in browser settings.</div>
      ) : (
        <div>
          <Webcam audio={false} ref={webcamRef} />
          <div>
            {isRecording ? (
              <div>
                <button onClick={stopRecording}>Stop Recording</button>
                <video controls autoPlay>
                  <source src={URL.createObjectURL(new Blob(recordedChunks))} />
                </video>
              </div>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraRecorder;




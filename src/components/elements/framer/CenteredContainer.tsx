"use client"

import { ReactNode, useEffect } from "react";

const CenteredContainer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Log access attempts to video files
    const checkVideoAccess = async () => {
      try {
        const responseMp4 = await fetch('/videos/background-1.mp4');
        const responseWebM = await fetch('/videos/background-1.webm');
        console.log('MP4 Response:', responseMp4);
        console.log('WebM Response:', responseWebM);
        
        if (!responseMp4.ok) {
          console.error('MP4 video file not found or error loading: ', responseMp4.status);
        }
        if (!responseWebM.ok) {
          console.error('WebM video file not found or error loading: ', responseWebM.status);
        }
      } catch (error) {
        console.error('Error accessing video files:', error);
      }
    };

    checkVideoAccess();
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        {/* <source src="/videos/background-1.mp4" type="video/mp4" /> */}
        <source src="/videos/background-1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100%",
          zIndex: 1,
          gap: "0.8rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CenteredContainer;
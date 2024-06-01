
import { ReactNode } from "react";

const BackgroundVideo = ({ children, webmVideoPath }: { children: ReactNode, webmVideoPath: string }) => {

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
        <source src={webmVideoPath} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          // position: "relative",
          display: "grid",
          placeContent: "center",
          // width: "100%",
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

export default BackgroundVideo;
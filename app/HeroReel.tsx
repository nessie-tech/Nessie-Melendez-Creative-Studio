"use client";

import { useEffect, useRef } from "react";

export function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playReel = () => {
      void video.play().catch(() => {
        // Some mobile browsers delay autoplay until the next ready event.
      });
    };

    playReel();
    video.addEventListener("canplay", playReel);

    return () => video.removeEventListener("canplay", playReel);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      aria-hidden="true"
    >
      <source src="/nessie-demo-reel.mp4" type="video/mp4" />
    </video>
  );
}

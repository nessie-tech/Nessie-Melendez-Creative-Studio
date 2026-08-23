"use client";

import { useEffect, useRef, useState } from "react";

export function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playReel = () => {
      video.defaultMuted = true;
      video.muted = true;
      void video.play().then(() => setIsPlaying(true)).catch(() => {
        // Some mobile browsers delay autoplay until the next ready event.
      });
    };

    playReel();
    video.addEventListener("canplay", playReel);
    video.addEventListener("playing", () => setIsPlaying(true));
    window.addEventListener("touchstart", playReel, { passive: true });
    window.addEventListener("pointerdown", playReel);
    window.addEventListener("scroll", playReel, { passive: true });

    return () => {
      video.removeEventListener("canplay", playReel);
      window.removeEventListener("touchstart", playReel);
      window.removeEventListener("pointerdown", playReel);
      window.removeEventListener("scroll", playReel);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      data-playing={isPlaying}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      controls={false}
      aria-hidden="true"
    >
      <source src="/nessie-demo-reel.mp4" type="video/mp4" />
    </video>
  );
}

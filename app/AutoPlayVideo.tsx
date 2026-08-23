"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

type AutoPlayVideoProps = {
  className: string;
  src: string;
  style?: CSSProperties;
};

export function AutoPlayVideo({ className, src, style }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playVideo = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.controls = false;
      void video.play().catch(() => {
        // Mobile browsers can defer autoplay until the next user gesture.
      });
    };

    const keepAlive = window.setInterval(() => {
      if (video.paused || video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        playVideo();
      }
    }, 500);

    const markReady = () => {
      setIsReady(true);
      playVideo();
    };

    const restartNearEnd = () => {
      if (
        Number.isFinite(video.duration) &&
        video.duration > 0 &&
        video.currentTime >= video.duration - 0.12
      ) {
        video.currentTime = 0;
        playVideo();
      }
    };

    playVideo();
    video.addEventListener("canplay", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("pause", playVideo);
    video.addEventListener("ended", playVideo);
    video.addEventListener("timeupdate", restartNearEnd);
    window.addEventListener("touchstart", playVideo, { passive: true });
    window.addEventListener("pointerdown", playVideo);
    window.addEventListener("scroll", playVideo, { passive: true });
    document.addEventListener("visibilitychange", playVideo);

    return () => {
      window.clearInterval(keepAlive);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("pause", playVideo);
      video.removeEventListener("ended", playVideo);
      video.removeEventListener("timeupdate", restartNearEnd);
      window.removeEventListener("touchstart", playVideo);
      window.removeEventListener("pointerdown", playVideo);
      window.removeEventListener("scroll", playVideo);
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      data-ready={isReady}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      aria-hidden="true"
      style={style}
    />
  );
}

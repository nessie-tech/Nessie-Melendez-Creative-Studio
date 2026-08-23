"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  label: string;
  title: string;
  titleLines: string[];
  caption: string;
  mediaSrc: string;
  focalPoint: string;
  posterLabel: string;
  posterTime?: number;
};

export function ServiceShowcase({ services }: { services: Service[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  function activate(index: number) {
    setSelectedIndex(index);
    setPlayingIndex(index);
  }

  return (
    <div className="service-offer-grid" aria-label="Creative service offers">
      {services.map((service, index) => {
        const isSelected = selectedIndex === index;
        const isPlaying = playingIndex === index;

        return (
          <ServiceCard
            activate={() => activate(index)}
            isPlaying={isPlaying}
            isSelected={isSelected}
            key={service.title}
            service={service}
          />
        );
      })}
    </div>
  );
}

function ServiceCard({
  activate,
  isPlaying,
  isSelected,
  service,
}: {
  activate: () => void;
  isPlaying: boolean;
  isSelected: boolean;
  service: Service;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileInView, setIsMobileInView] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const posterTime = service.posterTime ?? 0.35;
  const shouldPlay = isPlaying || isMobileInView;

  useEffect(() => {
    const card = cardRef.current;

    if (!card || !window.matchMedia("(max-width: 820px)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileInView(entry.isIntersecting && entry.intersectionRatio > 0.45);
      },
      { threshold: [0, 0.45, 0.7] },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (shouldPlay) {
      void video.play();
      return;
    }

    video.pause();

    if (Number.isFinite(video.duration) && video.duration > posterTime) {
      video.currentTime = posterTime;
    }
  }, [posterTime, shouldPlay]);

  return (
    <button
      ref={cardRef}
      className="service-offer-card"
      data-active={isSelected}
      type="button"
      aria-pressed={isSelected}
      onClick={activate}
      onFocus={activate}
      onMouseEnter={activate}
      onPointerDown={activate}
    >
      <span className="service-offer-label">{service.label}</span>
      <strong className="service-offer-title" aria-label={service.title}>
        {service.titleLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </strong>

      <span
        className="service-offer-media"
        data-playing={shouldPlay}
        data-ready={isReady}
        aria-hidden="true"
      >
        <span className="service-offer-poster">
          <span>{service.posterLabel}</span>
        </span>
        <video
          ref={videoRef}
          className="service-offer-video"
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={(event) => {
            const video = event.currentTarget;

            if (!shouldPlay && Number.isFinite(video.duration) && video.duration > posterTime) {
              video.currentTime = posterTime;
            }
          }}
          onCanPlay={() => setIsReady(true)}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;

            if (
              shouldPlay &&
              Number.isFinite(video.duration) &&
              video.duration > 0 &&
              video.currentTime >= video.duration - 0.08
            ) {
              video.currentTime = 0;
              void video.play();
            }
          }}
          style={{ objectPosition: service.focalPoint }}
        >
          <source src={service.mediaSrc} type="video/mp4" />
        </video>
      </span>

      <span className="service-offer-details">
        <small>{service.caption}</small>
      </span>
    </button>
  );
}

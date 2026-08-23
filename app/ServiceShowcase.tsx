"use client";

import { useState } from "react";

type Service = {
  label: string;
  title: string;
  titleLines: string[];
  caption: string;
  mediaSrc: string;
  focalPoint: string;
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
          <button
            className="service-offer-card"
            data-active={isSelected}
            key={service.title}
            type="button"
            aria-pressed={isSelected}
            onClick={() => activate(index)}
            onFocus={() => activate(index)}
            onMouseEnter={() => activate(index)}
          >
            <span className="service-offer-label">{service.label}</span>
            <strong className="service-offer-title" aria-label={service.title}>
              {service.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </strong>

            <span className="service-offer-media" aria-hidden="true">
              <video
                key={`${service.title}-${isPlaying ? "playing" : "still"}`}
                className="service-offer-video"
                autoPlay={isPlaying}
                muted
                loop
                playsInline
                preload="metadata"
                onTimeUpdate={(event) => {
                  const video = event.currentTarget;

                  if (
                    isPlaying &&
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
      })}
    </div>
  );
}

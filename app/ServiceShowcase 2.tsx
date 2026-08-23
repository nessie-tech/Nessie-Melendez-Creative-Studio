"use client";

import { useState } from "react";

type Service = {
  label: string;
  title: string;
  caption: string;
  mediaSrc: string;
  focalPoint: string;
};

export function ServiceShowcase({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];

  return (
    <div className="services-showcase">
      <div className="service-preview" aria-live="polite">
        <video
          key={`${activeService.title}-${activeService.mediaSrc}`}
          className="service-preview-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{ objectPosition: activeService.focalPoint }}
          aria-label={`${activeService.title} temporary motion preview`}
        >
          <source src={activeService.mediaSrc} type="video/mp4" />
          Temporary service motion preview. Replace mediaSrc in the service data
          with a dedicated clip when available.
        </video>
        <div className="service-preview-overlay">
          <span>{activeService.label}</span>
          <h3>{activeService.title}</h3>
          <p>{activeService.caption}</p>
        </div>
      </div>

      <div className="service-selectors" aria-label="Creative service previews">
        {services.map((service, index) => (
          <button
            className="service-selector"
            data-active={index === activeIndex}
            key={service.title}
            type="button"
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <span>{service.label}</span>
            <strong>{service.title}</strong>
            <small>{service.caption}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { AutoPlayVideo } from "./AutoPlayVideo";

type Service = {
  label: string;
  title: string;
  titleLines: string[];
  caption: string;
  mediaSrc: string;
  mediaType?: "image" | "video";
  focalPoint: string;
  posterLabel: string;
  posterTime?: number;
};

export function ServiceShowcase({ services }: { services: Service[] }) {
  return (
    <div className="service-offer-grid" aria-label="Creative service offers">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <button
      className="service-offer-card"
      type="button"
    >
      <span className="service-offer-label">{service.label}</span>
      <strong className="service-offer-title" aria-label={service.title}>
        {service.titleLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </strong>

      <span
        className="service-offer-media"
        data-playing="true"
        aria-hidden="true"
      >
        <span className="service-offer-poster">
          <span>{service.posterLabel}</span>
        </span>
        {service.mediaType === "image" ? (
          <img
            className="service-offer-image"
            src={service.mediaSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ objectPosition: service.focalPoint }}
          />
        ) : (
          <AutoPlayVideo
            className="service-offer-video"
            src={service.mediaSrc}
            style={{ objectPosition: service.focalPoint }}
          />
        )}
      </span>

      <span className="service-offer-details">
        <small>{service.caption}</small>
      </span>
    </button>
  );
}

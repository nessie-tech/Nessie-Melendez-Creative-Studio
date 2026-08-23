"use client";

import { useEffect, useState } from "react";

const greeting = "Hello, I'm\nNessie.";

export function AboutTypewriter() {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(greeting.slice(0, index));

      if (index >= greeting.length) {
        window.clearInterval(timer);
      }
    }, 72);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1 className="about-typewriter-title" aria-label="Hello, I'm Nessie.">
      <span className="sr-only">Hello, I&apos;m Nessie.</span>
      <span aria-hidden="true" className="about-typewriter-text">
        {visibleText}
      </span>
    </h1>
  );
}

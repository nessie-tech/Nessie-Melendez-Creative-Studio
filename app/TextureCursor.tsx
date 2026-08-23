"use client";

import { useEffect } from "react";

export function TextureCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const cursor = {
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };
    let animationFrame = 0;

    function handlePointerMove(event: PointerEvent) {
      cursor.targetX = event.clientX;
      cursor.targetY = event.clientY;
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    }

    function animateCursorRing() {
      cursor.currentX += (cursor.targetX - cursor.currentX) * 0.18;
      cursor.currentY += (cursor.targetY - cursor.currentY) * 0.18;
      root.style.setProperty("--cursor-ring-x", `${cursor.currentX}px`);
      root.style.setProperty("--cursor-ring-y", `${cursor.currentY}px`);
      animationFrame = window.requestAnimationFrame(animateCursorRing);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(animateCursorRing);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
    </>
  );
}

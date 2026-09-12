"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    let isHovering = false;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      const ease = isHovering ? 0.08 : 0.14;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      if (ring) {
        ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovering = true;
      dot?.classList.add("cursor-dot--hover");
      ring?.classList.add("cursor-ring--hover");
    };

    const onLeave = () => {
      isHovering = false;
      dot?.classList.remove("cursor-dot--hover");
      ring?.classList.remove("cursor-ring--hover");
    };

    const onMouseDown = () => {
      dot?.classList.add("cursor-dot--click");
      ring?.classList.add("cursor-ring--click");
    };

    const onMouseUp = () => {
      dot?.classList.remove("cursor-dot--click");
      ring?.classList.remove("cursor-ring--click");
    };

    const attachHoverListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"], input, textarea, select, label')
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    rafId = requestAnimationFrame(animate);

    // MutationObserver to re-attach on DOM updates
    const mo = new MutationObserver(attachHoverListeners);
    mo.observe(document.body, { childList: true, subtree: true });
    attachHoverListeners();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

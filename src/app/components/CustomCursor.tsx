"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    let raf: number;
    const animateRing = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${p.rx}px`;
        ringRef.current.style.top = `${p.ry}px`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    const onEnterInteractive = () => {
      cursorRef.current?.style.setProperty("scale", "2");
      ringRef.current?.style.setProperty("scale", "1.5");
      ringRef.current?.style.setProperty("border-color", "rgba(232,73,15,0.7)");
    };

    const onLeaveInteractive = () => {
      cursorRef.current?.style.setProperty("scale", "1");
      ringRef.current?.style.setProperty("scale", "1");
      ringRef.current?.style.setProperty("border-color", "rgba(232,73,15,0.4)");
    };

    window.addEventListener("mousemove", onMove);
    animateRing();

    const observer = new MutationObserver(() => {
      document.querySelectorAll("button, a").forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-orange rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[scale] duration-150 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-orange/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[scale,border-color] duration-400 hidden md:block"
        style={{ transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.275)" }}
      />
    </>
  );
}

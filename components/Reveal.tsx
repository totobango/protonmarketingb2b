"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in ms, applied when the element enters the viewport. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
};

/**
 * Scroll-reveal wrapper. Reveals once, then unobserves, so no work happens on scroll.
 * Content is visible by default and only hidden once JS confirms it can
 * animate, so it degrades safely without JS and for reduced-motion users.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setShown(true);
      return;
    }

    setArmed(true);
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={[styles.reveal, armed && !shown ? styles.hidden : "", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

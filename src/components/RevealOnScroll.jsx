import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.transitionDelay = `${delay}ms`;
          element.classList.add("reveal-visible");
          observer.unobserve(element); // run ONCE (better perf)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction}`}
    >
      {children}
    </div>
  );
};


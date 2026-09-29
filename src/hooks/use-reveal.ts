import { useEffect } from "react";

/**
 * Observa todos os elementos com a classe `.reveal` e adiciona
 * `.reveal-visible` quando entram na viewport (animação suave de entrada).
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    // Scroll reveals are intentionally disabled on phones. Mobile browser chrome
    // constantly changes the visual viewport and can retrigger compositing,
    // making large sections appear to blink while scrolling.
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 80px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

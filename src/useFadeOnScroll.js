import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useFadeOnScroll() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-visible");
            entry.target.classList.remove("fade-hidden");
          } else {
            entry.target.classList.remove("fade-visible");
            entry.target.classList.add("fade-hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Reset all fade elements when route changes
    elements.forEach((el) => {
      el.classList.remove("fade-visible");
      el.classList.add("fade-hidden");
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);
}

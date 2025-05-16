document.addEventListener("DOMContentLoaded", () => {
  const lazyDivs = document.querySelectorAll<HTMLElement>("[data-bg-class]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        const el = entry.target;
        const bgClass = el.dataset.bgClass;

        if (bgClass) {
          el.classList.add(bgClass);
          observer.unobserve(el);
        }
      }
    });
  });

  lazyDivs.forEach(el => observer.observe(el));
});


/* =====================================================
   RAID PREMIUM — ADVANCED MOTION ENGINE
   Elegant + Futuristic Animation System
   ===================================================== */

(() => {
  "use strict";

  const RAIDMotion = {
    duration: 700,
    stagger: 85,
    observer: null,
    initialized: false,

    reducedMotion: window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches,

    init() {
      if (this.initialized) return;
      this.initialized = true;

      document.documentElement.classList.add("raid-motion-ready");

      this.createObserver();
      this.observePresentation();
      this.bindGlobalEvents();

      document.querySelectorAll(".slide").forEach(slide => {
        this.observeSlide(slide);
      });
    },

    createObserver() {
      if (this.reducedMotion || !("IntersectionObserver" in window)) {
        this.observer = null;
        return;
      }

      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            this.revealSlide(entry.target);
            this.observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -5% 0px"
        }
      );
    },

    observeSlide(slide) {
      if (!(slide instanceof HTMLElement)) return;

      if (this.reducedMotion || !this.observer) {
        this.revealSlide(slide);
        return;
      }

      this.observer.observe(slide);
    },

    revealSlide(slide) {
      if (!(slide instanceof HTMLElement)) return;

      slide.classList.add("raid-slide-visible");

      const selectors = [
        ".slide-title",
        ".slide-subtitle",
        ".slide-lead",
        ".content-card",
        ".section-card",
        ".code-card",
        ".question-item",
        ".answer-item",
        ".slide-note",
        ".slide-section",
        ".slide-content"
      ];

      const elements = slide.querySelectorAll(selectors.join(","));

      elements.forEach((element, index) => {
        if (element.dataset.raidAnimated === "true") return;

        element.dataset.raidAnimated = "true";

        element.style.setProperty(
          "--raid-delay",
          `${Math.min(index * this.stagger, 680)}ms`
        );

        element.classList.add("raid-reveal");

        if (this.reducedMotion) {
          element.classList.add("raid-reveal-visible");
        } else {
          requestAnimationFrame(() => {
            element.classList.add("raid-reveal-visible");
          });
        }
      });
    },

    observePresentation() {
      const presentation = document.querySelector("#presentation");
      if (!presentation) return;

      const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (!(node instanceof HTMLElement)) return;

            if (node.matches(".slide")) {
              this.observeSlide(node);
            }

            node.querySelectorAll?.(".slide").forEach(slide => {
              this.observeSlide(slide);
            });
          });
        });
      });

      mutationObserver.observe(presentation, {
        childList: true,
        subtree: true
      });
    },

    bindGlobalEvents() {
      window.addEventListener("raid:slidechange", event => {
        const slide = event.detail?.slide;

        if (slide instanceof HTMLElement) {
          this.revealSlide(slide);
        }
      });

      window.addEventListener("pageshow", () => {
        document.querySelectorAll(".slide.active").forEach(slide => {
          this.revealSlide(slide);
        });
      });
    },

    reset(slide) {
      if (!(slide instanceof HTMLElement)) return;

      slide.querySelectorAll(".raid-reveal").forEach(element => {
        element.classList.remove("raid-reveal-visible");
        delete element.dataset.raidAnimated;
      });

      slide.classList.remove("raid-slide-visible");
      this.observeSlide(slide);
    }
  };

  window.RAIDMotion = RAIDMotion;

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => RAIDMotion.init(),
      { once: true }
    );
  } else {
    RAIDMotion.init();
  }
})();

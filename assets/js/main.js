(function () {
  // -----------------------------
  // Active nav link (supports /services/*.html detail pages)
  // -----------------------------
  const path = (window.location.pathname || "").toLowerCase();

  const links = document.querySelectorAll(".nav-links a");
  if (links && links.length) {
    links.forEach(a => a.classList.remove("active"));

    const setActiveByHrefIncludes = (needle) => {
      for (const a of links) {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href.includes(needle)) {
          a.classList.add("active");
          return true;
        }
      }
      return false;
    };

    const isServices = path.includes("/services.html") || path.includes("/services/");
    const isAbout = path.includes("/about.html");
    const isContact = path.includes("/contact.html");

    // Home can be /index.html or /ka/ /en/ /ru/ (with or without trailing slash)
    const isHome =
      path.endsWith("/index.html") ||
      /\/(ka|en|ru)\/?$/.test(path);

    if (isServices) setActiveByHrefIncludes("services.html");
    else if (isAbout) setActiveByHrefIncludes("about.html");
    else if (isContact) setActiveByHrefIncludes("contact.html");
    else if (isHome) setActiveByHrefIncludes("index.html");
    else {
      // Fallback: match exact filename like the old logic
      const file = (path.split("/").pop() || "index.html").toLowerCase();
      for (const a of links) {
        const href = (a.getAttribute("href") || "").toLowerCase();
        if (href === file) {
          a.classList.add("active");
          break;
        }
      }
    }
  }

  // -----------------------------
  // Premium sticky header: shrink + depth on scroll
  // -----------------------------
  const nav = document.querySelector(".nav");
  if (!nav) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    window.requestAnimationFrame(() => {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

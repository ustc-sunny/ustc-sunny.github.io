(function () {
  "use strict";

  var newsButton = document.getElementById("news-toggle");
  var newsArchive = document.getElementById("news-archive");
  if (newsButton && newsArchive) {
    var newsExpanded = false;
    function renderNews() {
      newsArchive.hidden = !newsExpanded;
      newsButton.textContent = newsExpanded ? "Show latest news" : "See all news";
      newsButton.setAttribute("aria-expanded", String(newsExpanded));
    }
    renderNews();
    newsButton.hidden = false;
    newsButton.addEventListener("click", function () {
      newsExpanded = !newsExpanded;
      renderNews();
      if (!newsExpanded) newsButton.scrollIntoView({ block: "nearest" });
    });
  }

  var masthead = document.querySelector(".masthead");
  var nav = document.getElementById("site-nav");
  if (!masthead || !nav) return;

  var menu = nav.querySelector(".hidden-links");
  var button = nav.querySelector("button");
  var links = Array.from(nav.querySelectorAll("a[href*='#']"));
  var sections = links.map(function (link) {
    return document.getElementById(decodeURIComponent(link.hash.slice(1)));
  });
  var headerHeight = 0;
  var pending = false;

  function updateActive() {
    pending = false;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section && section.getBoundingClientRect().top <= headerHeight + 32) current = section;
    });
    links.forEach(function (link, index) {
      if (sections[index] === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function measureHeader() {
    headerHeight = masthead.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--masthead-height", headerHeight + "px");
    updateActive();
  }

  function closeMenu() {
    menu.classList.add("hidden");
    button.classList.remove("close");
    button.setAttribute("aria-expanded", "false");
  }

  // Leave anchors to the browser so hashes, history and keyboard navigation work.
  nav.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (link) {
      var wasInMenu = menu.contains(link);
      closeMenu();
      var target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else if (wasInMenu) button.focus();
    } else if (event.target.closest("button")) {
      button.setAttribute("aria-expanded", String(!menu.classList.contains("hidden")));
    }
  });
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) closeMenu();
  });
  nav.addEventListener("keydown", function (event) {
    if (event.key === "Escape") { closeMenu(); button.focus(); }
  });

  window.addEventListener("scroll", function () {
    if (!pending) { pending = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  window.addEventListener("resize", measureHeader);
  document.addEventListener("toggle", updateActive, true);
  if (window.ResizeObserver) new ResizeObserver(measureHeader).observe(masthead);
  measureHeader();

  // Publications collapse at startup and images can shift content before load.
  // Re-align direct incoming links once that layout has settled.
  window.addEventListener("load", function () {
    measureHeader();
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    updateActive();
  });
}());

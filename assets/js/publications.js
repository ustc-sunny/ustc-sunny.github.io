(function () {
  "use strict";

  var button = document.getElementById("publications-toggle");
  var heading = document.getElementById("publications-heading");
  var chapters = document.getElementById("book-chapters");
  if (!button || !heading || !chapters) return;

  var additional = document.querySelectorAll("[data-additional-publication]");
  var expanded = false;

  function render() {
    additional.forEach(function (paper) { paper.hidden = !expanded; });
    chapters.hidden = !expanded;
    heading.textContent = expanded ? "📝 Publications" : "📝 Publications";
    button.textContent = expanded ? "Show selected publications" : "See all publications";
    button.setAttribute("aria-expanded", String(expanded));
  }

  render();
  button.hidden = false;
  button.addEventListener("click", function () {
    expanded = !expanded;
    render();
    // Keep the control in view when collapsing a long list.
    if (!expanded) button.scrollIntoView({ block: "nearest" });
  });
}());

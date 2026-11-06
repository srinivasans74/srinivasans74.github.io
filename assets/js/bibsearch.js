import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const publications = document.querySelector(".publications");
  const controls = document.getElementById("publication-filters");
  if (!publications || !controls) return;

  const search = document.getElementById("bibsearch");
  const year = document.getElementById("publication-year");
  const buttons = controls.querySelectorAll("button[data-type]");
  const empty = document.getElementById("publication-empty");
  const entries = Array.from(publications.querySelectorAll(".bibliography > li"), (element) => ({
    element,
    metadata: element.querySelector("[data-year]"),
    text: element.textContent.toLowerCase(),
  }));
  let type = "";

  if (year) {
    const years = [...new Set(entries.map(({ metadata }) => metadata.dataset.year).filter(Boolean))];
    years.sort((a, b) => Number(b) - Number(a)).forEach((value) => year.add(new Option(value, value)));
  }

  const filterItems = () => {
    const term = search ? search.value.trim().toLowerCase() : "";
    publications.querySelectorAll(".bibliography").forEach((element) => element.classList.remove("unloaded"));
    let visible = 0;
    entries.forEach(({ element, metadata, text }) => {
      const matches =
        (!type || metadata.dataset.type === type) && (!year || !year.value || metadata.dataset.year === year.value) && text.includes(term);
      element.classList.toggle("unloaded", !matches);
      if (matches) visible++;
    });

    publications.querySelectorAll("h2.bibliography").forEach((heading) => {
      let sibling = heading.nextElementSibling;
      let groupVisible = false;
      while (sibling && sibling.tagName !== "H2") {
        if (sibling.tagName === "OL") {
          const hasMatches = !!sibling.querySelector("li:not(.unloaded)");
          sibling.classList.toggle("unloaded", !hasMatches);
          sibling.previousElementSibling.classList.toggle("unloaded", !hasMatches);
          groupVisible ||= hasMatches;
        }
        sibling = sibling.nextElementSibling;
      }
      heading.classList.toggle("unloaded", !groupVisible);
    });
    empty.hidden = visible > 0;
    highlightSearchTerm({ search: term, selector: ".publications .bibliography > li:not(.unloaded)" });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      type = button.dataset.type;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      filterItems();
    });
  });
  if (year) year.addEventListener("change", filterItems);
  if (search) {
    let timeoutId;
    search.addEventListener("input", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(filterItems, 300);
    });

    const updateFromHash = () => {
      let value;
      try {
        value = decodeURIComponent(window.location.hash.substring(1));
      } catch {
        return;
      }
      // Keep citation anchors usable alongside existing hash-based search links.
      if (value && document.getElementById(value)) return;
      search.value = value;
      filterItems();
    };
    window.addEventListener("hashchange", updateFromHash);
    updateFromHash();
  }
  filterItems();
  controls.hidden = false;
});

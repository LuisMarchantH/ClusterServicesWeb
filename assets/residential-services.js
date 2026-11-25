const serviceSelect = document.getElementById("service");

document.querySelectorAll("a[data-quote-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const option = serviceSelect.querySelector(
      `option[data-quote-service="${link.dataset.quoteService}"]`,
    );
    if (option) option.selected = true;
  });
});

document.querySelectorAll("[data-language]").forEach((link) => {
  link.addEventListener("click", () => {
    link.hash = window.location.hash;
  });
});

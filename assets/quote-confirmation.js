(() => {
  const confirmation = document.querySelector("[data-quote-success]");
  const url = new URL(window.location.href);
  if (!confirmation || url.searchParams.get("sent") !== "1") return;

  confirmation.hidden = false;
  confirmation.focus();
  url.searchParams.delete("sent");
  window.history.replaceState(window.history.state, "", url);
})();

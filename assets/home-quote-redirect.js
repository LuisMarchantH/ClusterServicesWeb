const quoteLink = document.getElementById("property-quote-link");
const sent = new URLSearchParams(window.location.search).get("sent") === "1";

if (window.location.hash === "#contact" || sent) {
  const destination = new URL(quoteLink.href);
  if (sent) destination.searchParams.set("sent", "1");
  window.location.replace(destination);
}

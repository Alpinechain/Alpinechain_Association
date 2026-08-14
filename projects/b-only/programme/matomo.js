(function () {
  var trackerOrigin = "https://analytics.alpinechain.xyz/";
  var canonicalUrl = window.location.origin + window.location.pathname;

  window._paq = window._paq || [];
  window._paq.push(["disableCookies"]);
  window._paq.push(["setDoNotTrack", true]);
  window._paq.push(["setCustomUrl", canonicalUrl]);
  window._paq.push(["trackPageView"]);
  window._paq.push(["enableLinkTracking"]);
  window._paq.push(["setTrackerUrl", trackerOrigin + "matomo.php"]);
  window._paq.push(["setSiteId", "7"]);

  var script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = trackerOrigin + "matomo.js";
  document.head.appendChild(script);
})();

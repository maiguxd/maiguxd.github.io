/* La Casa del Relleno — interacciones: menú, revelado al scroll y gráficos. */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeNav() {
    var box = document.querySelector(".nav-box");
    if (box) box.removeAttribute("open");
  }

  document.querySelectorAll(".nav-panel a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  document.addEventListener("click", function (e) {
    var box = document.querySelector(".nav-box");
    if (box && box.open && !box.contains(e.target)) closeNav();
  });

  var targets = document.querySelectorAll(".reveal, .chart, .metric, .q-card");
  if (!("IntersectionObserver" in window) || reduce) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach(function (el) {
    io.observe(el);
  });
})();

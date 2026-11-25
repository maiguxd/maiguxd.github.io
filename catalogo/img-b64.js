/* Carga imágenes desde archivos .b64 (el conector de GitHub no sube binarios raw) */
(function (global) {
  "use strict";
  var cache = {};
  function dataUrl(path, t) {
    var mime = /\.png/i.test(path) ? "image/png" : "image/jpeg";
    return "data:" + mime + ";base64," + String(t).replace(/\s+/g, "");
  }
  function load(path) {
    if (!cache[path]) {
      cache[path] = fetch(path)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          return r.text();
        })
        .then(function (t) {
          return dataUrl(path, t);
        });
    }
    return cache[path];
  }
  function apply(root) {
    var scope = root || document;
    scope.querySelectorAll("img[data-src]").forEach(function (img) {
      var path = img.getAttribute("data-src");
      if (!path || img.dataset.loaded === path) return;
      img.dataset.loaded = path;
      load(path)
        .then(function (u) {
          img.src = u;
        })
        .catch(function (e) {
          console.warn("img", path, e);
        });
    });
    document.querySelectorAll("[data-b64-bg]").forEach(function (el) {
      var path = el.getAttribute("data-b64-bg");
      if (!path || el.dataset.bgloaded === path) return;
      el.dataset.bgloaded = path;
      load(path)
        .then(function (u) {
          el.style.backgroundImage = 'url("' + u + '")';
        })
        .catch(function (e) {
          console.warn("bg", path, e);
        });
    });
    document.querySelectorAll("link[data-src]").forEach(function (link) {
      var path = link.getAttribute("data-src");
      if (!path || link.dataset.loaded === path) return;
      link.dataset.loaded = path;
      load(path)
        .then(function (u) {
          link.href = u;
        })
        .catch(function (e) {
          console.warn("link", path, e);
        });
    });
  }
  [
    "assets/logo.png.b64",
    "assets/logo-icon.jpg.b64",
    "assets/grain.png.b64",
    "assets/img/cable-cb90.jpg.b64",
    "assets/img/cubo-kl02.jpg.b64",
    "assets/img/powerbank-eo103.jpg.b64",
    "assets/img/vidrio-templado.jpg.b64",
    "assets/img/audifonos-es45.jpg.b64"
  ].forEach(function (p) {
    load(p);
  });
  global.cargarImagenesB64 = { load: load, apply: apply };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      apply();
    });
  } else {
    apply();
  }
})(window);

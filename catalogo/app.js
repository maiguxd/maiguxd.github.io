(function () {
  "use strict";

  const dinero = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  });

  const pedido = {};
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  const IMG_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  function srcB64(src) {
    if (!src) return src;
    return src.indexOf(".b64") !== -1 ? src : src + ".b64";
  }
  function imgTag(src, alt, attrs) {
    const extra = attrs ? " " + attrs : "";
    return `<img src="${IMG_PLACEHOLDER}" data-src="${esc(srcB64(src))}" alt="${esc(alt || "")}"${extra}>`;
  }
  function refreshImgs() {
    if (window.cargarImagenesB64) window.cargarImagenesB64.apply();
  }


  function itemPorId(id) {
    return (
      CATALOGO.productos.find((p) => p.id === id) ||
      CATALOGO.combos.find((c) => c.id === id)
    );
  }

  function esCombo(item) {
    return CATALOGO.combos.some((c) => c.id === item.id);
  }

  function imagenDe(item) {
    if (item.imagen) return item.imagen;
    const primera = (item.piezas || [])[0];
    const prod = primera && CATALOGO.productos.find((p) => p.id === primera.id);
    return prod ? prod.imagen : "assets/logo.png";
  }

  function renderProductos() {
    const root = $("#grid-productos");
    root.innerHTML = CATALOGO.productos
      .map((p) => {
        const unitario = p.precioTiendaUnitario
          ? `<small>${dinero.format(p.precioTiendaUnitario)} c/u</small>`
          : "";
        const notaPub = p.notaPublico
          ? `<span class="note">${esc(p.notaPublico)}</span>`
          : "";
        const badge = p.marca
          ? `<span class="badge">${esc(p.marca)}</span>`
          : "";
        const fotoNota = p.fotoNota
          ? `<p class="caption">${esc(p.fotoNota)}</p>`
          : "";
        const aviso = p.pideReferencia
          ? `<p class="warn">Hay que pedir la referencia (modelo de celular) que más rote en la tienda.</p>`
          : "";
        const feats = (p.caracteristicas || [])
          .map((f) => `<li>${esc(f)}</li>`)
          .join("");
        const unidad = p.unidadVenta === "unidad" ? "Por unidad" : p.unidadVenta;
        return `<article class="card" id="${esc(p.id)}">
          <div class="card-media">
            ${imgTag(p.imagen, p.alt || p.nombre, 'width="1200" height="1200"')}
            ${fotoNota}
          </div>
          <div class="card-body">
            ${badge}
            <h3>${esc(p.nombre)}</h3>
            <p class="unidad">${esc(unidad)}</p>
            <p class="desc">${esc(p.descripcion)}</p>
            <ul class="feats">${feats}</ul>
            ${aviso}
            <div class="prices">
              <div class="price main">
                <label>Precio para la tienda</label>
                <b>${dinero.format(p.precioTienda)}</b>
                ${unitario}
              </div>
              <div class="price">
                <label>Precio sugerido al público</label>
                <b>${dinero.format(p.precioPublico)}</b>
                ${p.precioTiendaUnitario ? "<small>c/u</small>" : ""}
                ${notaPub}
              </div>
            </div>
            <div class="card-actions">
              <button class="btn" type="button" data-add="${esc(p.id)}">Agregar al pedido</button>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  function renderCombos() {
    const root = $("#grid-combos");
    const byId = Object.fromEntries(CATALOGO.productos.map((p) => [p.id, p]));
    root.innerHTML = CATALOGO.combos
      .map((c) => {
        const thumbs = (c.piezas || [])
          .map((pz) => {
            const p = byId[pz.id];
            if (!p) return "";
            return imgTag(p.imagen, p.nombre, 'width="200" height="200"');
          })
          .join("");
        const incluye = (c.incluye || []).map((x) => `<li>${esc(x)}</li>`).join("");
        const ahorro =
          typeof c.precioSiSuelto === "number" && c.precioSiSuelto > c.precioTienda
            ? c.precioSiSuelto - c.precioTienda
            : 0;
        const ahorroHtml = ahorro
          ? `<p class="ahorro">Si se compra suelto: ${dinero.format(c.precioSiSuelto)}. En combo ahorras ${dinero.format(ahorro)}.</p>`
          : "";
        const publico = c.precioPublicoConjunto
          ? `<div class="price">
              <label>Precio sugerido al público</label>
              <b>${dinero.format(c.precioPublicoConjunto)}</b>
              <small>el set (o cada pieza por separado)</small>
            </div>`
          : "";
        const aviso = c.nota ? `<p class="warn">${esc(c.nota)}</p>` : "";
        return `<article class="combo" id="${esc(c.id)}">
          <div class="combo-thumbs">${thumbs}</div>
          <div class="combo-body">
            <h3>${esc(c.nombre)}</h3>
            <p class="desc">${esc(c.descripcion)}</p>
            <ul class="incluye">${incluye}</ul>
            ${aviso}
            <div class="prices">
              <div class="price main">
                <label>Precio para la tienda</label>
                <b>${dinero.format(c.precioTienda)}</b>
              </div>
              ${publico}
            </div>
            ${ahorroHtml}
            <div class="card-actions">
              <button class="btn gold" type="button" data-add="${esc(c.id)}">Agregar al pedido</button>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  function lineasPedido() {
    return Object.entries(pedido)
      .filter(([, n]) => n > 0)
      .map(([id, cantidad]) => ({ item: itemPorId(id), cantidad }))
      .filter((l) => l.item);
  }

  function totalPedido() {
    return lineasPedido().reduce((s, l) => s + l.item.precioTienda * l.cantidad, 0);
  }

  function renderPedido() {
    const lineas = lineasPedido();
    const list = $("#pedido-list");
    const total = totalPedido();
    const nItems = lineas.reduce((s, l) => s + l.cantidad, 0);

    if (!lineas.length) {
      list.innerHTML = `<p class="pedido-empty">Todavía no has agregado nada. Elige productos o combos y se arman aquí para enviarlos por correo.</p>`;
    } else {
      list.innerHTML = lineas
        .map(({ item, cantidad }) => {
          const ref = item.pideReferencia
            ? `<p class="ref">Indica en el correo el modelo de celular de los vidrios.</p>`
            : "";
          return `<div class="linea">
            ${imgTag(imagenDe(item), "")}
            <div>
              <h4>${esc(item.nombre)}</h4>
              ${ref}
              <div class="qty">
                <button type="button" data-qty="${esc(item.id)}" data-delta="-1" aria-label="Quitar uno">−</button>
                <span>${cantidad}</span>
                <button type="button" data-qty="${esc(item.id)}" data-delta="1" aria-label="Agregar uno">+</button>
              </div>
            </div>
            <div class="subtotal">${dinero.format(item.precioTienda * cantidad)}</div>
          </div>`;
        })
        .join("");
    }

    $("#pedido-total").textContent = dinero.format(total);
    const btn = $("#btn-enviar");
    if (lineas.length) {
      btn.href = armarMailto(lineas, total);
      btn.setAttribute("aria-disabled", "false");
    } else {
      btn.removeAttribute("href");
      btn.setAttribute("aria-disabled", "true");
    }

    const bar = $("#pedido-bar");
    const has = lineas.length > 0;
    document.body.classList.toggle("has-pedido", has);
    $("#bar-cuenta").textContent =
      nItems === 1 ? "1 ítem en el pedido" : nItems + " ítems en el pedido";
    $("#bar-total").textContent = dinero.format(total);
    bar.hidden = !has;

    const live = $("#pedido-live");
    if (live) live.textContent = has ? `Pedido: ${nItems} ítems, total ${dinero.format(total)}` : "Pedido vacío";
    refreshImgs();
  }

  function armarMailto(lineas, total) {
    const renglones = lineas.map(({ item, cantidad }) => {
      const extra = item.pideReferencia
        ? "  (Modelo de celular de los vidrios: ________)"
        : "";
      return `• ${cantidad} × ${item.nombre} — ${dinero.format(item.precioTienda)} c/u${extra ? "\n" + extra : ""}`;
    });
    const cuerpo = [
      "Hola, quiero hacer este pedido del catálogo de Vitrina Barrio:",
      "",
      ...renglones,
      "",
      `Total (precio para la tienda): ${dinero.format(total)}`,
      "",
      "Nombre de la tienda:",
      "Barrio o sector:",
      "Ciudad:",
      "Notas:"
    ].join("\n");
    const asunto = "Pedido catálogo Vitrina Barrio";
    return (
      "mailto:" +
      encodeURIComponent(CATALOGO.correo) +
      "?subject=" +
      encodeURIComponent(asunto) +
      "&body=" +
      encodeURIComponent(cuerpo)
    );
  }

  function agregar(id, delta) {
    const item = itemPorId(id);
    if (!item) return;
    const next = (pedido[id] || 0) + delta;
    if (next <= 0) delete pedido[id];
    else pedido[id] = next;
    renderPedido();
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nav() {
    const navEl = $("#nav");
    const hamb = $("#hamb");
    hamb.addEventListener("click", () => {
      const open = navEl.classList.toggle("open");
      hamb.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".menu a").forEach((a) =>
      a.addEventListener("click", () => {
        navEl.classList.remove("open");
        hamb.setAttribute("aria-expanded", "false");
      })
    );
  }

  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) {
      agregar(add.getAttribute("data-add"), 1);
      return;
    }
    const qty = e.target.closest("[data-qty]");
    if (qty) {
      agregar(qty.getAttribute("data-qty"), Number(qty.getAttribute("data-delta")));
    }
  });

  renderProductos();
  renderCombos();
  renderPedido();
  nav();
  refreshImgs();
})();

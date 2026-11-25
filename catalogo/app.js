(function () {
  "use strict";

  const dinero = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  });

  const pedidos = { mayor: {}, detal: {} };
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


  let vista = "intro";

  const TITULOS = {
    intro: "Catálogo de accesorios para celular · Vitrina Barrio",
    mayor: "Catálogo al por mayor · Vitrina Barrio",
    detal: "Venta por unidad · Vitrina Barrio"
  };
  const TOPBARS = {
    mayor: "Catálogo al por mayor para tiendas de barrio en <b>Bucaramanga</b> y alrededores · Actualizado el 24 de noviembre de 2026",
    detal: "Venta por unidad · <b>Bucaramanga</b> y alrededores · Actualizado el 24 de noviembre de 2026"
  };

  function formatoDetal(p) {
    const n = dinero.format(p.precioPublico);
    const desde = p.precioPublicoDesde
      ? `<span class="prefijo">desde</span> `
      : "";
    const aprox = p.precioPublicoAprox ? `<small>aprox.</small>` : "";
    return `<b>${desde}${n}</b>${aprox}`;
  }

  function esMayor() {
    return vista === "mayor";
  }

  function bolsa() {
    return vista === "detal" ? pedidos.detal : pedidos.mayor;
  }

  function precioItem(item) {
    return vista === "detal" ? item.precioPublico : item.precioTienda;
  }

  function textoPrecio(item, cantidad) {
    const n = dinero.format(precioItem(item) * (cantidad || 1));
    if (vista === "detal" && (item.precioPublicoDesde || item.precioPublicoAprox)) {
      return "desde " + n + (item.precioPublicoAprox ? " aprox." : "");
    }
    return n;
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

  function renderIntro() {
    const tx = CATALOGO.textos || {};
    const set = (id, val) => {
      const el = $("#" + id);
      if (el && val) el.textContent = val;
    };
    set("intro-eyebrow", tx.introEyebrow);
    if (tx.introTitulo) {
      const h = $("#intro-titulo");
      if (h) h.innerHTML = esc(tx.introTitulo).replace("Bucaramanga", "<em>Bucaramanga</em>");
    }
    set("intro-texto", tx.introTexto);
    set("intro-elegir", tx.introElegir);
    set("intro-mayor-titulo", tx.introMayorTitulo);
    set("intro-mayor-sub", tx.introMayorSub);
    set("intro-detal-titulo", tx.introDetalTitulo);
    set("intro-detal-sub", tx.introDetalSub);
    $$(".switch-back").forEach((a) => {
      if (tx.introVolver) a.textContent = tx.introVolver;
    });
  }

  function renderProductos() {
    const root = $("#grid-productos");
    const detal = vista === "detal";
    root.innerHTML = CATALOGO.productos
      .map((p) => {
        const unitario =
          !detal && p.precioTiendaUnitario
            ? `<small>${dinero.format(p.precioTiendaUnitario)} c/u</small>`
            : "";
        const notaPub = detal
          ? p.precioPublicoAprox || p.precioPublicoDesde
            ? `<span class="note">Referencia de mercado, precio aproximado. Indica el modelo de celular al pedir.</span>`
            : ""
          : p.notaPublico
            ? `<span class="note">${esc(p.notaPublico)}</span>`
            : "";
        const badge = p.marca
          ? `<span class="badge">${esc(p.marca)}</span>`
          : "";
        const fotoNota = p.fotoNota
          ? `<p class="caption">${esc(p.fotoNota)}</p>`
          : "";
        const aviso = p.pideReferencia
          ? detal
            ? `<p class="warn">Indica el modelo de celular al hacer el pedido.</p>`
            : `<p class="warn">Hay que pedir la referencia (modelo de celular) que más rote en la tienda.</p>`
          : "";
        const feats = (p.caracteristicas || [])
          .map((f) => `<li>${esc(f)}</li>`)
          .join("");
        const nombre = detal ? p.nombreDetal || p.nombre : p.nombre;
        const unidad = detal
          ? "Por unidad"
          : p.unidadVenta === "unidad"
            ? "Por unidad"
            : p.unidadVenta;
        const prices = detal
          ? `<div class="prices prices-one">
              <div class="price main">
                <label>Precio al detal (por unidad)</label>
                ${formatoDetal(p)}
                ${notaPub}
              </div>
            </div>`
          : `<div class="prices">
              <div class="price main">
                <label>Precio para tiendas</label>
                <b>${dinero.format(p.precioTienda)}</b>
                ${unitario}
              </div>
              <div class="price">
                <label>Precio al detal (por unidad)</label>
                ${formatoDetal(p)}
                ${notaPub}
              </div>
            </div>`;
        return `<article class="card" id="${esc(p.id)}">
          <div class="card-media">
            ${imgTag(p.imagen, p.alt || p.nombre, 'width="1200" height="1200"')}
            ${fotoNota}
          </div>
          <div class="card-body">
            ${badge}
            <h3>${esc(nombre)}</h3>
            <p class="unidad">${esc(unidad)}</p>
            <p class="desc">${esc(p.descripcion)}</p>
            <ul class="feats">${feats}</ul>
            ${aviso}
            ${prices}
            <div class="card-actions">
              <button class="btn" type="button" data-add="${esc(p.id)}">Agregar al pedido</button>
            </div>
          </div>
        </article>`;
      })
      .join("");
    refreshImgs();
  }

  function renderDetal() {
    const root = $("#lista-detal");
    if (!root) return;
    const filas = CATALOGO.productos
      .map((p) => {
        const marca = p.marca
          ? `<span class="detal-marca">${esc(p.marca)}</span>`
          : `<span class="detal-marca">Referencia de mercado</span>`;
        const nota =
          p.precioPublicoAprox || p.precioPublicoDesde
            ? `<span class="detal-nota">No es un precio oficial; es una referencia aproximada.</span>`
            : `<span class="detal-nota">Tienda oficial YOOKIE</span>`;
        return `<div class="detal-row">
          ${imgTag(p.imagen, "", 'width="72" height="72"')}
          <div class="detal-info">
            <h3>${esc(p.nombreDetal || p.nombre)}</h3>
            ${marca}
            ${nota}
          </div>
          <div class="detal-precio">${formatoDetal(p)}</div>
        </div>`;
      })
      .join("");
    root.innerHTML = `
      <div class="detal-head" aria-hidden="true">
        <span>Producto</span>
        <span>Precio al detal (por unidad)</span>
      </div>
      ${filas}`;
    refreshImgs();
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
                <label>Precio para tiendas</label>
                <b>${dinero.format(c.precioTienda)}</b>
              </div>
            </div>
            ${ahorroHtml}
            <div class="card-actions">
              <button class="btn gold" type="button" data-add="${esc(c.id)}">Agregar al pedido</button>
            </div>
          </div>
        </article>`;
      })
      .join("");
    refreshImgs();
  }

  function lineasPedido() {
    return Object.entries(bolsa())
      .filter(([, n]) => n > 0)
      .map(([id, cantidad]) => ({ item: itemPorId(id), cantidad }))
      .filter((l) => l.item && (vista !== "detal" || !esCombo(l.item)));
  }

  function totalPedido() {
    return lineasPedido().reduce((s, l) => s + precioItem(l.item) * l.cantidad, 0);
  }

  function hayAprox() {
    return lineasPedido().some(
      (l) => l.item.precioPublicoDesde || l.item.precioPublicoAprox
    );
  }

  function renderPedido() {
    if (vista === "intro") {
      const bar = $("#pedido-bar");
      if (bar) bar.hidden = true;
      document.body.classList.remove("has-pedido");
      return;
    }
    const lineas = lineasPedido();
    const list = $("#pedido-list");
    const total = totalPedido();
    const nItems = lineas.reduce((s, l) => s + l.cantidad, 0);
    const totalMostrado = hayAprox() && vista === "detal"
      ? "desde " + dinero.format(total) + " aprox."
      : dinero.format(total);

    if (!lineas.length) {
      list.innerHTML = vista === "detal"
        ? `<p class="pedido-empty">Todavía no has agregado nada. Elige productos y se arman aquí para enviarlos por correo.</p>`
        : `<p class="pedido-empty">Todavía no has agregado nada. Elige productos o combos y se arman aquí para enviarlos por correo.</p>`;
    } else {
      list.innerHTML = lineas
        .map(({ item, cantidad }) => {
          const ref = item.pideReferencia
            ? `<p class="ref">Indica en el correo el modelo de celular de los vidrios.</p>`
            : "";
          const nombre = vista === "detal" ? item.nombreDetal || item.nombre : item.nombre;
          return `<div class="linea">
            ${imgTag(imagenDe(item), "")}
            <div>
              <h4>${esc(nombre)}</h4>
              ${ref}
              <div class="qty">
                <button type="button" data-qty="${esc(item.id)}" data-delta="-1" aria-label="Quitar uno">−</button>
                <span>${cantidad}</span>
                <button type="button" data-qty="${esc(item.id)}" data-delta="1" aria-label="Agregar uno">+</button>
              </div>
            </div>
            <div class="subtotal">${esc(textoPrecio(item, cantidad))}</div>
          </div>`;
        })
        .join("");
    }

    const label = $("#pedido-total-label");
    if (label) label.textContent = vista === "detal" ? "Total al detal" : "Total para tiendas";
    $("#pedido-total").textContent = totalMostrado;
    const btn = $("#btn-enviar");
    if (lineas.length) {
      btn.href = armarMailto(lineas, totalMostrado);
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
    $("#bar-total").textContent = totalMostrado;
    bar.hidden = !has;

    const live = $("#pedido-live");
    if (live) live.textContent = has ? `Pedido: ${nItems} ítems, total ${totalMostrado}` : "Pedido vacío";
    refreshImgs();
  }

  function armarMailto(lineas, totalMostrado) {
    const detal = vista === "detal";
    const renglones = lineas.map(({ item, cantidad }) => {
      const extra = item.pideReferencia
        ? "  (Modelo de celular de los vidrios: ________)"
        : "";
      const nombre = detal ? item.nombreDetal || item.nombre : item.nombre;
      const precio = textoPrecio(item, 1);
      return `• ${cantidad} × ${nombre} — ${precio}${cantidad > 1 ? " c/u" : ""}${extra ? "\n" + extra : ""}`;
    });
    const tipo = detal
      ? "este pedido por unidad (al detal)"
      : "este pedido al por mayor";
    const totalLine = detal
      ? `Total (precio al detal, por unidad): ${totalMostrado}`
      : `Total (precio para tiendas): ${totalMostrado}`;
    const avisoVidrio = detal && hayAprox()
      ? "El precio de los vidrios es aproximado, según el mercado."
      : "";
    const datos = detal
      ? ["Nombre:", "Barrio o sector:", "Ciudad:", "Notas:"]
      : ["Nombre de la tienda:", "Barrio o sector:", "Ciudad:", "Notas:"];
    const cuerpo = [
      `Hola, quiero hacer ${tipo} del catálogo de Vitrina Barrio:`,
      "",
      ...renglones,
      "",
      totalLine,
      avisoVidrio,
      "",
      ...datos
    ]
      .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
      .join("\n");
    const asunto = detal
      ? "Pedido por unidad — Vitrina Barrio"
      : "Pedido al por mayor — Vitrina Barrio";
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
    if (vista !== "mayor" && vista !== "detal") return;
    const item = itemPorId(id);
    if (!item) return;
    if (vista === "detal" && esCombo(item)) return;
    const bag = bolsa();
    const next = (bag[id] || 0) + delta;
    if (next <= 0) delete bag[id];
    else bag[id] = next;
    renderPedido();
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hashVista() {
    const h = (location.hash || "").replace("#", "").split("/")[0];
    if (h === "mayor" || h === "detal" || h === "intro") return h;
    return "intro";
  }

  function setVista(next, opts) {
    const optsSafe = opts || {};
    const v = next === "mayor" || next === "detal" || next === "intro" ? next : "intro";
    const cambió = vista !== v;
    vista = v;
    document.body.classList.remove("vista-intro", "vista-mayor", "vista-detal");
    document.body.classList.add("vista-" + vista);
    document.documentElement.dataset.vista = vista;
    document.title = TITULOS[vista] || TITULOS.intro;

    const topbar = $("#topbar");
    if (topbar && TOPBARS[vista]) topbar.innerHTML = TOPBARS[vista];

    $$(".switch [data-vista]").forEach((a) => {
      const on = a.getAttribute("data-vista") === vista;
      a.classList.toggle("on", on);
      a.setAttribute("aria-selected", on ? "true" : "false");
    });

    const intro = $("#intro");
    const cat = $("#catalogo");
    if (vista === "intro") {
      if (intro) intro.removeAttribute("inert");
      if (cat) cat.setAttribute("inert", "");
      const bar = $("#pedido-bar");
      if (bar) bar.hidden = true;
      document.body.classList.remove("has-pedido");
    } else {
      if (cat) cat.removeAttribute("inert");
      if (intro) intro.setAttribute("inert", "");
      if (cambió) {
        renderProductos();
        renderPedido();
        window.scrollTo(0, 0);
      } else {
        renderPedido();
      }
    }

    const want = vista === "intro" ? "intro" : vista;
    const cur = (location.hash || "").replace("#", "");
    if (optsSafe.hash !== false && cur !== want) {
      const url = "#" + want;
      if (optsSafe.replace) history.replaceState(null, "", url);
      else history.pushState(null, "", url);
    }

    const navEl = $("#nav");
    if (navEl) {
      navEl.classList.remove("open");
      const hamb = $("#hamb");
      if (hamb) hamb.setAttribute("aria-expanded", "false");
    }
  }

  function irA(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function nav() {
    const navEl = $("#nav");
    const hamb = $("#hamb");
    if (hamb) {
      hamb.addEventListener("click", () => {
        const open = navEl.classList.toggle("open");
        hamb.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
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
      return;
    }
    const vistaBtn = e.target.closest("[data-vista]");
    if (vistaBtn) {
      e.preventDefault();
      setVista(vistaBtn.getAttribute("data-vista"));
      return;
    }
    const scroll = e.target.closest("[data-scroll]");
    if (scroll) {
      e.preventDefault();
      const navEl = $("#nav");
      if (navEl) {
        navEl.classList.remove("open");
        const hamb = $("#hamb");
        if (hamb) hamb.setAttribute("aria-expanded", "false");
      }
      irA(scroll.getAttribute("data-scroll"));
    }
  });

  window.addEventListener("hashchange", () => {
    const v = hashVista();
    if (v !== vista) setVista(v, { hash: false });
  });

  renderIntro();
  renderDetal();
  renderCombos();
  nav();
  setVista(hashVista(), { hash: false, replace: true });
  requestAnimationFrame(function () {
    document.documentElement.classList.add("ready");
  });
})();

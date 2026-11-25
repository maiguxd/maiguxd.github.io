/* =============================================================================
   PRECIOS Y PRODUCTOS DEL CATÁLOGO — Vitrina Barrio
   =============================================================================
   Archivo para editar. Aquí están todos los productos, combos y precios.

   Cómo cambiar un precio:
     1. Busca el producto o combo por su nombre.
     2. Cambia solo el número entero, en pesos colombianos (COP),
        sin puntos, comas ni el signo $.
        Ejemplo: doce mil pesos se escribe 12000
     3. Guarda este archivo y recarga la página. Los precios se ven
        formateados solos (ejemplo: $12.000).

   El vidrio templado puede cambiar de precio: edita el bloque
   marcado como "PRECIOS DEL VIDRIO" más abajo (tres números).

   No agregues aquí otros valores. La página solo usa el precio para
   la tienda y el precio sugerido al público.
   ============================================================================= */

const CATALOGO = {
  marca: "Vitrina Barrio",
  sitioWeb: "https://maiguxd.github.io/",
  correo: "vitrinabarrio@gmail.com",
  titulo: "Catálogo mayorista de accesorios para celular",
  descripcion: "Accesorios tecnológicos para surtir tiendas de barrio, misceláneas, papelerías y locales de accesorios en Bucaramanga y alrededores. Precios al por mayor.",
  zona: "Bucaramanga (Colorados / Campestre) y alrededores",
  actualizado: "2026-11-24",
  garantia: "3 meses",
  envio: "En 2 a 4 días hábiles. El envío es gratis desde $250.000 si se paga en línea.",

  productos: [
    {
      id: "cable-cb90",
      nombre: "Cable de carga rápida Yookie CB90",
      marca: "Yookie",
      descripcion: "Cable trenzado Yookie para carga rápida y paso de datos, con conectores reforzados. Sirve para el día a día y rota fácil en tienda.",
      caracteristicas: [
        "Carga rápida PD; según la versión, hasta 30 W o 60 W",
        "Cable trenzado, pensado para aguantar el uso diario",
        "Transferencia de datos",
        "Conectores reforzados",
        "Disponible en Tipo-C a Tipo-C y Tipo-C a iPhone"
      ],
      unidadVenta: "unidad",
      imagen: "assets/img/cable-cb90.jpg",
      alt: "Caja del cable de carga rápida Yookie CB90, vista frontal y posterior",
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 12000,
      // Precio sugerido al público, en COP
      precioPublico: 15900
    },
    {
      id: "cubo-kl02",
      nombre: "Cubo de carga rápida Yookie KL02 20W",
      marca: "Yookie",
      descripcion: "Cubo cargador Yookie de 20 W con puerto USB-C, compacto y fácil de vender junto con el cable.",
      caracteristicas: [
        "Carga rápida de hasta 20 W",
        "Tecnología Power Delivery",
        "Puerto USB-C",
        "Compatible con celulares, audífonos, tabletas y otros dispositivos con carga Tipo-C",
        "Diseño compacto y portátil",
        "Modelo Yookie KL02"
      ],
      unidadVenta: "unidad",
      imagen: "assets/img/cubo-kl02.jpg",
      alt: "Cubo de carga rápida Yookie KL02 de 20 W, visto por ambos lados",
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 18000,
      // Precio sugerido al público, en COP
      precioPublico: 21900
    },
    {
      id: "powerbank-eo103",
      nombre: "Power bank Yookie EO103 10.000 mAh",
      marca: "Yookie",
      descripcion: "Batería portátil Yookie de 10.000 mAh con carga rápida de 22,5 W y pantalla que muestra el porcentaje de batería.",
      caracteristicas: [
        "Capacidad de 10.000 mAh",
        "Carga rápida de hasta 22,5 W",
        "Puertos USB-A y USB-C",
        "Pantalla digital LED con el porcentaje de batería",
        "Protección contra sobrecarga, sobrecalentamiento y cortocircuito",
        "Diseño compacto"
      ],
      unidadVenta: "unidad",
      imagen: "assets/img/powerbank-eo103.jpg",
      alt: "Caja del power bank Yookie EO103 de 10.000 mAh, vista frontal y posterior",
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 52000,
      // Precio sugerido al público, en COP
      precioPublico: 68000
    },
    {
      id: "vidrio-templado",
      nombre: "Vidrio templado Premium (paquete de 10)",
      marca: "",
      descripcion: "Paquete de 10 vidrios templados de la misma referencia, para proteger la pantalla. Hay que pedir el modelo de celular que más se venda en la tienda.",
      caracteristicas: [
        "Presentación de 10 unidades de una misma referencia",
        "Protección contra rayones, golpes y uso diario",
        "Alta transparencia",
        "Alta sensibilidad táctil",
        "Recubrimiento antihuellas"
      ],
      unidadVenta: "paquete de 10 unidades",
      imagen: "assets/img/vidrio-templado.jpg",
      alt: "Foto de ejemplo de un vidrio templado Premium. El pedido se arma por modelo de celular.",
      fotoNota: "Foto de ejemplo. El pedido se arma por el modelo de celular que más rote en la tienda.",
      pideReferencia: true,
      notaPublico: "Por unidad al público. El paquete no se vende al detal como combo cerrado.",

      /* -----------------------------------------------------------------
         PRECIOS DEL VIDRIO — pueden cambiar.
         Edita estos tres números (enteros, COP, sin puntos ni $).
         Si cambias el precio del paquete, actualiza también el unitario
         (el paquete son 10 unidades).
         ----------------------------------------------------------------- */
      precioTienda: 60000,           // Precio para la tienda, del paquete de 10
      precioTiendaUnitario: 6000,    // Precio para la tienda, por cada vidrio
      precioPublico: 15000           // Precio sugerido al público, por unidad
    },
    {
      id: "audifonos-es45",
      nombre: "Audífonos inalámbricos Yookie ES45",
      marca: "Yookie",
      descripcion: "Audífonos inalámbricos Yookie con estuche recargable de pantalla digital y carga Tipo-C, para música, llamadas y uso diario.",
      caracteristicas: [
        "Audífonos inalámbricos Yookie ES45",
        "Estuche recargable con pantalla digital para ver el nivel de batería",
        "Pensados para música, llamadas y uso diario",
        "Carga del estuche por Tipo-C",
        "Diseño compacto"
      ],
      unidadVenta: "unidad",
      imagen: "assets/img/audifonos-es45.jpg",
      alt: "Caja de los audífonos inalámbricos Yookie ES45, vista frontal y posterior",
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 36000,
      // Precio sugerido al público, en COP
      precioPublico: 49900
    }
  ],

  combos: [
    {
      id: "combo-carga",
      nombre: "Combo Carga",
      descripcion: "El combo más pedido: cubo y cable listos para vender juntos o por separado.",
      incluye: [
        "1 cubo Yookie KL02 20W",
        "1 cable Yookie CB90"
      ],
      piezas: [
        { id: "cubo-kl02", cantidad: 1 },
        { id: "cable-cb90", cantidad: 1 }
      ],
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 28000,
      // Lo que saldría si se compran sueltos, en COP (para mostrar el ahorro)
      precioSiSuelto: 30000,
      // Precio sugerido al público por el set, en COP
      precioPublicoConjunto: 35000
    },
    {
      id: "combo-vitrina-carga",
      nombre: "Combo Vitrina de carga",
      descripcion: "Surtido corto para dejar cables y cubos en la vitrina, sin meter tanto inventario de una vez.",
      incluye: [
        "5 cables Yookie CB90",
        "2 cubos Yookie KL02 20W"
      ],
      piezas: [
        { id: "cable-cb90", cantidad: 5 },
        { id: "cubo-kl02", cantidad: 2 }
      ],
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 90000,
      // Lo que saldría si se compran sueltos, en COP (para mostrar el ahorro)
      precioSiSuelto: 96000,
      // No hay precio sugerido de set en el catálogo
      precioPublicoConjunto: null
    },
    {
      id: "combo-arranque-tienda",
      nombre: "Combo Arranque tienda",
      descripcion: "Pedido inicial para una tienda de barrio: carga y protección, con un descuento pequeño por llevar el paquete.",
      incluye: [
        "5 cables Yookie CB90",
        "2 cubos Yookie KL02 20W",
        "1 paquete de 10 vidrios templados (una misma referencia)"
      ],
      piezas: [
        { id: "cable-cb90", cantidad: 5 },
        { id: "cubo-kl02", cantidad: 2 },
        { id: "vidrio-templado", cantidad: 1 }
      ],
      pideReferencia: true,
      nota: "Confirmar con la tienda la referencia de los vidrios antes de armar el combo.",
      // Precio para la tienda (al por mayor), en COP
      precioTienda: 145000,
      // Lo que saldría si se compran sueltos, en COP (para mostrar el ahorro)
      precioSiSuelto: 156000,
      // No hay precio sugerido de set en el catálogo
      precioPublicoConjunto: null
    }
  ]
};

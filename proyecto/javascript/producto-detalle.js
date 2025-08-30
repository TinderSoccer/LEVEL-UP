// Base de datos de productos
const productosDB = {
  'ps5': {
    nombre: 'Consola PlayStation 5 Slim',
    categoria: 'Consolas',
    imagen: 'imagenes/ps5.png',
    precio: 599999,
    precioOriginal: 699999,
    descuento: 15,
    descripcion: 'La PlayStation 5 Slim ofrece una experiencia de juego revolucionaria con tecnología de próxima generación. Disfruta de gráficos increíbles, tiempos de carga ultrarrápidos y audio 3D inmersivo.',
    caracteristicas: [
      'Procesador AMD Ryzen Zen 2 de 8 núcleos',
      'GPU AMD Radeon RDNA 2',
      'SSD ultra rápido de 825GB',
      'Ray Tracing en tiempo real',
      'Audio 3D Tempest',
      'Retrocompatibilidad con PS4'
    ],
    especificaciones: {
      'Procesador': 'AMD Ryzen Zen 2 de 8 núcleos a 3.5GHz',
      'GPU': 'AMD Radeon RDNA 2 - 10.28 TFLOPs',
      'Memoria': '16GB GDDR6',
      'Almacenamiento': 'SSD NVMe de 825GB',
      'Dimensiones': '390mm x 104mm x 260mm',
      'Peso': '3.9kg',
      'Conectividad': 'Wi-Fi 6, Bluetooth 5.1, Ethernet'
    }
  },
  'nintendo-oled': {
    nombre: 'Consola Nintendo Switch Modelo OLED Neon',
    categoria: 'Consolas',
    imagen: 'imagenes/nintendo-oled.png',
    precio: 349999,
    precioOriginal: 389999,
    descuento: 10,
    descripcion: 'La Nintendo Switch OLED ofrece una pantalla vibrante de 7 pulgadas, mayor almacenamiento y un soporte ajustable mejorado. Juega en casa o en movimiento.',
    caracteristicas: [
      'Pantalla OLED de 7 pulgadas',
      'Almacenamiento interno de 64GB',
      'Soporte ajustable mejorado',
      'Audio mejorado en modo portátil',
      'Base con puerto LAN incorporado',
      'Joy-Con Neon Azul y Rojo'
    ],
    especificaciones: {
      'Pantalla': 'OLED de 7 pulgadas, 1280×720',
      'Procesador': 'NVIDIA Custom Tegra',
      'Memoria': '4GB RAM',
      'Almacenamiento': '64GB eMMC',
      'Batería': '4-9 horas aproximadamente',
      'Dimensiones': '242mm x 13.9mm x 102mm',
      'Peso': '420g (solo consola)'
    }
  },
  'nintendo-switch-2': {
    nombre: 'Nintendo Switch 2',
    categoria: 'Consolas',
    imagen: 'imagenes/nintenso-switch-2.png',
    precio: 449999,
    precioOriginal: 499999,
    descuento: 10,
    descripcion: 'La nueva generación de Nintendo Switch con mejoras significativas en rendimiento y funcionalidades. Una experiencia de juego completamente renovada.',
    caracteristicas: [
      'Procesador de nueva generación',
      'Gráficos mejorados',
      'Mayor autonomía de batería',
      'Retrocompatibilidad con Switch',
      'Nuevos Joy-Con mejorados',
      'Pantalla de mayor resolución'
    ],
    especificaciones: {
      'Pantalla': 'OLED de 8 pulgadas, 1080p',
      'Procesador': 'NVIDIA Tegra X2',
      'Memoria': '8GB RAM',
      'Almacenamiento': '128GB',
      'Batería': '6-12 horas',
      'Dimensiones': '260mm x 15mm x 110mm',
      'Peso': '450g'
    }
  },
  'xbox-series-x': {
    nombre: 'Xbox Series X 1 TB Digital Blanca',
    categoria: 'Consolas',
    imagen: 'imagenes/xbox.png',
    precio: 549999,
    precioOriginal: 599999,
    descuento: 8,
    descripción: 'La Xbox Series X ofrece la máxima potencia de juego con 4K nativo, 120 FPS y tecnología de carga rápida. Incluye Xbox Game Pass.',
    caracteristicas: [
      'Resolución 4K nativa hasta 120 FPS',
      'SSD NVMe de 1TB personalizado',
      'Auto HDR y Spatial Audio',
      'Quick Resume para múltiples juegos',
      'Retrocompatibilidad con Xbox One, 360 y Original',
      '3 meses de Xbox Game Pass Ultimate'
    ],
    especificaciones: {
      'Procesador': 'AMD Zen 2 de 8 núcleos a 3.8GHz',
      'GPU': 'AMD RDNA 2 - 12 TFLOPs',
      'Memoria': '16GB GDDR6',
      'Almacenamiento': 'SSD NVMe de 1TB',
      'Dimensiones': '151mm x 151mm x 301mm',
      'Peso': '4.45kg',
      'Conectividad': 'Wi-Fi 5, Bluetooth 5.1'
    }
  },
  'memoria-ssd': {
    nombre: 'Memoria SSD M2 PS5/PC 1TB con disipador',
    categoria: 'Accesorios',
    imagen: 'imagenes/Memoria-ssd-removebg-preview.png',
    precio: 159999,
    precioOriginal: 199999,
    descuento: 20,
    descripcion: 'Memoria SSD M.2 NVMe de alta velocidad, compatible con PS5 y PC. Incluye disipador térmico para un rendimiento óptimo.',
    caracteristicas: [
      'Velocidad de lectura hasta 7,000 MB/s',
      'Compatible con PS5 y PC',
      'Disipador térmico incluido',
      'Tecnología 3D NAND',
      'Interfaz PCIe 4.0',
      'Garantía de 5 años'
    ],
    especificaciones: {
      'Capacidad': '1TB',
      'Interfaz': 'PCIe 4.0 x4, NVMe 1.4',
      'Velocidad lectura': 'Hasta 7,000 MB/s',
      'Velocidad escritura': 'Hasta 6,400 MB/s',
      'Factor de forma': 'M.2 2280',
      'Temperatura': '0°C a 70°C',
      'Durabilidad': '600 TBW'
    }
  }
};

// Función para establecer datos del producto
function setProductData(id, nombre, imagen, categoria) {
  localStorage.setItem('selectedProduct', JSON.stringify({
    id: id,
    nombre: nombre,
    imagen: imagen,
    categoria: categoria
  }));
}

// Función para cambiar cantidad
function changeQuantity(change) {
  const quantityInput = document.getElementById('quantity');
  let currentQuantity = parseInt(quantityInput.value);
  let newQuantity = currentQuantity + change;
  
  if (newQuantity >= 1) {
    quantityInput.value = newQuantity;
  }
}

// Función para cargar detalles del producto
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Obtener datos del localStorage como respaldo
  const selectedProduct = localStorage.getItem('selectedProduct');
  let productData = null;
  
  if (productId && productosDB[productId]) {
    productData = productosDB[productId];
  } else if (selectedProduct) {
    const basicData = JSON.parse(selectedProduct);
    productData = productosDB[basicData.id] || {
      nombre: basicData.nombre,
      categoria: basicData.categoria,
      imagen: basicData.imagen,
      precio: 0,
      descripcion: 'Información del producto no disponible.',
      caracteristicas: [],
      especificaciones: {}
    };
  }
  
  if (!productData) {
    // Mostrar producto por defecto
    productData = {
      nombre: 'Producto no encontrado',
      categoria: 'General',
      imagen: 'imagenes/default.png',
      precio: 0,
      descripcion: 'El producto seleccionado no se encontró.',
      caracteristicas: [],
      especificaciones: {}
    };
  }
  
  // Actualizar elementos de la página
  document.getElementById('product-title').textContent = productData.nombre;
  document.getElementById('breadcrumb-category').textContent = productData.categoria;
  document.getElementById('breadcrumb-product').textContent = productData.nombre;
  document.getElementById('product-main-image').src = productData.imagen;
  document.getElementById('product-main-image').alt = productData.nombre;
  
  if (productData.precio) {
    document.getElementById('product-price').textContent = `$${productData.precio.toLocaleString()}`;
    if (productData.precioOriginal && productData.descuento) {
      document.getElementById('product-original-price').textContent = `$${productData.precioOriginal.toLocaleString()}`;
      document.getElementById('product-discount').textContent = `${productData.descuento}% OFF`;
    }
  }
  
  document.getElementById('product-description').textContent = productData.descripcion;
  
  // Cargar características
  const featuresList = document.getElementById('product-features-list');
  featuresList.innerHTML = '';
  if (productData.caracteristicas) {
    productData.caracteristicas.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
  
  // Cargar especificaciones
  const specsGrid = document.getElementById('specs-grid');
  specsGrid.innerHTML = '';
  if (productData.especificaciones) {
    Object.entries(productData.especificaciones).forEach(([key, value]) => {
      const specItem = document.createElement('div');
      specItem.className = 'spec-item';
      specItem.innerHTML = `<strong>${key}:</strong> ${value}`;
      specsGrid.appendChild(specItem);
    });
  }
  
  // Cargar productos relacionados (productos de la misma categoría)
  loadRelatedProducts(productData.categoria, productId || 'unknown');
}

// Función para cargar productos relacionados
function loadRelatedProducts(categoria, currentProductId) {
  const relatedContainer = document.getElementById('related-products-list');
  relatedContainer.innerHTML = '';
  
  const relatedProducts = Object.entries(productosDB).filter(([id, product]) => 
    product.categoria === categoria && id !== currentProductId
  ).slice(0, 4);
  
  relatedProducts.forEach(([id, product]) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'producto';
    productDiv.innerHTML = `
      <a href="detalle-producto.html?id=${id}" onclick="setProductData('${id}', '${product.nombre}', '${product.imagen}', '${product.categoria}')">
        <img src="${product.imagen}" alt="${product.nombre}">
        <h3>${product.nombre}</h3>
        <p class="price">$${product.precio.toLocaleString()}</p>
      </a>
    `;
    relatedContainer.appendChild(productDiv);
  });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  loadProductDetails();
  
  // Agregar funcionalidad a los botones
  document.querySelector('.btn-add-cart').addEventListener('click', () => {
    alert('Producto agregado al carrito!');
  });
  
  document.querySelector('.btn-favorite').addEventListener('click', (e) => {
    const icon = e.target.querySelector('i') || e.target;
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas');
      alert('Producto agregado a favoritos!');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
      alert('Producto eliminado de favoritos!');
    }
  });
});
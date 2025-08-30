// Función para establecer datos del producto (usada en index.html)
function setProductData(id, nombre, imagen, categoria) {
  localStorage.setItem('selectedProduct', JSON.stringify({
    id: id,
    nombre: nombre,
    imagen: imagen,
    categoria: categoria
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.productos-container').forEach(container => {
    const lista = container.querySelector('.productos-lista');
    const flechaIzquierda = container.querySelector('.arrow.left');
    const flechaDerecha = container.querySelector('.arrow.right');
    const anchoPaso = lista.clientWidth; 

    if (!lista || !flechaIzquierda || !flechaDerecha) return;

    // Función para actualizar el estado 
    const actualizarBotones = () => {
      flechaIzquierda.disabled = lista.scrollLeft === 0;
      flechaDerecha.disabled = lista.scrollLeft + anchoPaso >= lista.scrollWidth;
    };

    // Escucha el clic en la flecha izquierda
    flechaIzquierda.addEventListener('click', () => {
      lista.scrollBy({ left: -anchoPaso, behavior: 'smooth' });
    });

    // Escucha el clic en la flecha derecha
    flechaDerecha.addEventListener('click', () => {
      lista.scrollBy({ left: anchoPaso, behavior: 'smooth' });
    });

    // Actualiza los botones al iniciar y al desplazarse
    lista.addEventListener('scroll', actualizarBotones);
    actualizarBotones(); 
  });
});
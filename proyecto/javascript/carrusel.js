document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.productos-container').forEach(container => {
    const lista = container.querySelector('.productos-lista');
    const flechaIzquierda = container.querySelector('.arrow.left');
    const flechaDerecha = container.querySelector('.arrow.right');
    const anchoPaso = lista.clientWidth; // Desplazamiento de una "página"

    if (!lista || !flechaIzquierda || !flechaDerecha) return;

    // Función para actualizar el estado de los botones (habilitado/deshabilitado)
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
    actualizarBotones(); // Llama a la función al cargar la página
  });
});
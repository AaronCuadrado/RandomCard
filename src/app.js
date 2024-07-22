// Espera a que el contenido del documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Referencia al elemento de la carta
  const carta = document.getElementById('carta');
  // Referencia al botón para generar una nueva carta
  const botonNuevaCarta = document.getElementById('boton');

  // Posibles palos y valores de las cartas
  const palos = ['corazon', 'pica', 'trebol', 'diamante'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  // Función para obtener una carta aleatoria
  function obtenerCartaAleatoria() {
      // Selecciona un palo aleatorio
      const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
      // Selecciona un valor aleatorio
      const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

      // Actualiza la clase de la carta con el palo seleccionado
      carta.className = `carta ${paloAleatorio}`;
      // Actualiza el valor de la carta
      carta.querySelector('.valor-carta').textContent = valorAleatorio;
      // Actualiza los símbolos del palo en la parte superior e inferior de la carta
      carta.querySelector('.palo-arriba').textContent = obtenerSimboloPalo(paloAleatorio);
      carta.querySelector('.palo-abajo').textContent = obtenerSimboloPalo(paloAleatorio);
  }

  // Función para obtener el símbolo del palo
  function obtenerSimboloPalo(palo) {
      // Retorna el símbolo correspondiente al palo
      switch (palo) {
          case 'corazon': return '♥';
          case 'pica': return '♠';
          case 'trebol': return '♣';
          case 'diamante': return '♦';
      }
  }

  // Asocia la función para obtener una carta aleatoria al evento de clic del botón
  botonNuevaCarta.addEventListener('click', obtenerCartaAleatoria);

  // Configura un intervalo para generar una nueva carta cada 10 segundos
  setInterval(obtenerCartaAleatoria, 10000);

  // Genera una carta aleatoria al cargar la página
  obtenerCartaAleatoria();
});

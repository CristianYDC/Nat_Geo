/* -------------------------------------------------------------------------- */
/*                                 Menú Mobil                                 */
/* -------------------------------------------------------------------------- */

let btnL = document.getElementById('btnLeft')
let btnR = document.getElementById('btnRight')

let content = document.getElementById('menu__items')

btnR.addEventListener('click', goRight)
btnL.addEventListener('click', goLeft)

let clickedIndex = 0
let showLeftBtn = true;
let showRightBtn = false;


btnL.style.display = 'none';
btnR.style.display = 'block';
showLeftBtn = false;
showRightBtn = true;

let ancho;

function actualizarAncho() {
  let screenWidth = window.screen.width;

  if (screenWidth > 424) {
    ancho = 135;
  } else if (screenWidth > 374) {
    ancho = 185;
  } else {
    ancho = 240;
  }

  console.log("El valor de ancho es " + ancho);
}

// Actualizar el valor de "ancho" en el inicio
actualizarAncho();

// Detectar cambios en el tamaño de la pantalla y actualizar "ancho"
window.addEventListener("resize", function() {
  actualizarAncho();
});



// Función para mover el contenido hacia la derecha
function goRight()
{
	// Si el índice de clics es menor que 1 (es decir, si no se ha alcanzado el final)
	if (clickedIndex < 1){
		// Aumentar el índice de clics en 1
    	clickedIndex = clickedIndex +1;
    	// Mover el contenido hacia la izquierda según el ancho de la pantalla
    	content.style.marginLeft = -ancho  + 'px';

    	// Si el botón de la derecha está visible
    	if (showRightBtn) {
      		// Ocultar el botón de la derecha y mostrar el botón de la izquierda
      		btnR.style.display = 'none';
      		btnL.style.display = 'block';
      		// Actualizar los valores de los indicadores de visibilidad
      		showRightBtn = false;
      		showLeftBtn = true;
    	}
  	}
}

// Función para mover el contenido hacia la izquierda
function goLeft()
{
	// Si el índice de clics es mayor que 0 (es decir, si no se ha alcanzado el inicio)
	if (clickedIndex >0){
		// Disminuir el índice de clics en 1
    	clickedIndex = clickedIndex -1
    	// Mover el contenido hacia la izquierda según el ancho de la pantalla y el índice de clics
    	content.style.marginLeft = -ancho * clickedIndex + 'px';

    	// Si el botón de la izquierda está visible
    	if (showLeftBtn) {
      		// Ocultar el botón de la izquierda y mostrar el botón de la derecha
      		btnL.style.display = 'none';
      		btnR.style.display = 'block';
      		// Actualizar los valores de los indicadores de visibilidad
      		showLeftBtn = false;
      		showRightBtn = true;
    	}
  	}
}

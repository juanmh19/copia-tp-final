function spinner(params) {
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loading__spinner').style.display = 'flex';
    
        window.addEventListener('load', function() {
            document.getElementById('loading__spinner').style.display = 'none';
        });

        var form = document.getElementById('buscador');
        var form2 = document.getElementById('sesion');

        form.addEventListener('submit', function() {
            document.getElementById('loading__spinner').style.display = 'flex';
        });
        form2.addEventListener('submit', function() {
            document.getElementById('loading__spinner').style.display = 'flex';
        });

        window.onload = function() {
            document.getElementById('loading__spinner').style.display = 'none';
        };
    });
}
spinner()

function seleccionAstronauta() {
    astronauta.addEventListener("dragstart", e => {
        event.preventDefault(); // Previene el arrastre de la imagen
    });

}
seleccionAstronauta()

function menuInteractivo() {
    activado = false
    menu.addEventListener("click", e => { //abre y cierra el menu
        if (activado == false) {
            header__nav.classList.add("menu__abierto");
            activado = true
        } else {
            header__nav.classList.remove("menu__abierto");
            activado = false
        }
    });
}
menuInteractivo()


function desplazamientoBarra() {
    var ultimaPosicionDesplazamiento = window.pageYOffset;

    window.addEventListener("scroll", function () {
        var pulgar = document.querySelector("::-webkit-scrollbar-thumb"); // "selecciona" la barra de desplazamiento
        var posicionActualDesplazamiento = window.pageYOffset; // obtiene la posicion actual

        if (posicionActualDesplazamiento > ultimaPosicionDesplazamiento) {
            document.body.classList.add("scrolling"); //rota 180 grados la imagne
        } else {
            document.body.classList.remove("scrolling"); //vuelve a su posicion original
        }

        ultimaPosicionDesplazamiento = posicionActualDesplazamiento; //actualiza la posicion previa
    });
}
desplazamientoBarra()

function menuPerfil() {
    activado = false
    menu__perfil.addEventListener("click", e => {
        if (!activado) {
            activado = true
            header__fondo.classList.add("visible");
            header__caja__perfil.classList.add("visible");
        }
    })
    login__cerrar.addEventListener("click", e=>{
        if (activado) {
            activado = false
            header__fondo.classList.remove("visible");
            header__caja__perfil.classList.remove("visible");
        }
    })
}
menuPerfil()

document.addEventListener('DOMContentLoaded', (event) => {
    const cajaValores = document.getElementById('caja__valores');
    
    // Añadir un event listener a cada botón dentro del div
    cajaValores.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            // Al hacer clic en un botón, actualizamos el atributo 'value' del div
            cajaValores.setAttribute('value', button.value);
            
            // Si también quieres mostrar el valor dentro del div, puedes hacerlo de esta manera:
            cajaValores.textContent = `Valor seleccionado: ${button.value}`;
        });
    });
});

    //Se ejecuta en cuanto la página cargue.
    document.addEventListener("DOMContentLoaded", function(){
    const datoCard = [
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },

        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
        { imagen: "img/gato.png", titulo: "maw", descripcion: "sopaipilla" },
    ];
        //Divisor de caja.
    const cajaJS = document.getElementById("cajaDiv");
    datoCard.forEach(function(card){
        cajaJS.innerHTML +=
        `
            <div class = 'card'>
                <img src='${card.imagen}' alt='${card.titulo}'>
                <h3>${card.titulo}</h3>
                <p>${card.descripcion}</p>

                <button id="restaH" class="res_btn">-</button>
                <input type="number" value="0" id="inputH" class="inputCard" readonly> <!--Agregar max y min-->
                <button id="sumaH" class="sum_btn">+</button>
            </div>
        `;
    });
    //Declarar variables de uso
    const restaJS = document.getElementById("restaH");
    const inputJS = document.getElementById("inputH");
    const sumaJS = document.getElementById("sumaH");
        //Disminuir.
    restaJS.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS.value) || 0;
        inputJS.value = inputValor - 1;
    });
        //Aumentar.
    sumaJS.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS.value) || 0;
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS.value = inputValor + 1; //Incrementar
        }
    });
});
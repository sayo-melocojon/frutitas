
document.addEventListener("DOMContentLoaded", function(){
    const datoCard = [
        { imagen: "img/fUvas.png", titulo: "platano", descripcion: "sopaipilla", inputID:"inputH1", sumaID:"sumaH1",restaID:"restaH1"},
        { imagen: "img/fPlatano.png", titulo: "mango", descripcion: "sopaipilla", inputID:"inputH2", sumaID:"sumaH2",restaID:"restaH2"},
        { imagen: "img/fSandia.png", titulo: "manzana", descripcion: "sopaipilla", inputID:"inputH3", sumaID:"sumaH3",restaID:"restaH3"},
        { imagen: "img/vBrocoli.png", titulo: "sandia", descripcion: "sopaipilla", inputID:"inputH4", sumaID:"sumaH4",restaID:"restaH4"},
        { imagen: "img/vRabano.png", titulo: "lichi", descripcion: "sopaipilla", inputID:"inputH5", sumaID:"sumaH5",restaID:"restaH5"},
        
    ];
    const cajaJS = document.getElementById("cajaDiv");
    datoCard.forEach(function(card){
        cajaJS.innerHTML +=
        `
        <!--Card ${card.titulo}-->
            <div class = 'card'>
                <img src='${card.imagen}' alt='${card.titulo}'>
                <h3>${card.titulo}</h3>
                <p>${card.descripcion}</p>

                <button id="${card.restaID}" class="res_btn">-</button>
                <input type="number" value="0" id="${card.inputID}" class="inputCard" readonly> <!--Agregar max y min-->
                <button id="${card.sumaID}" class="sum_btn">+</button>
            </div>
                `;
    });
    const carJS = document.getElementById("carH");
    const restaJS1 = document.getElementById("restaH1");
    const inputJS1 = document.getElementById("inputH1");
    const sumaJS1 = document.getElementById("sumaH1");
    
        //Disminuir.
    restaJS1.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS1.value) || 0; //Valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //valor del carrito de compras.
        if(inputValor<=0){
            alert("no tienes nada que retirar.");
        }else{
            inputJS1.value = inputValor - 1; //Decrementar el valor.
            carJS.value = carValor - 1; //Decrementar el valor del carro.
        }
    });
        //Aumentar.
    sumaJS1.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS1.value) || 0; //Valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //valor del carrito de compras.
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS1.value = inputValor + 1; //Incrementar el valor.
            carJS.value = carValor + 1; //Incrementar el valor del carro.
        }
    }); 
//IDES 2        
    const restaJS2 = document.getElementById("restaH2");
    const inputJS2 = document.getElementById("inputH2");
    const sumaJS2 = document.getElementById("sumaH2");
    
        //Disminuir.
    restaJS2.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS2.value) || 0; //valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //valor del carrito de compras.
        if(inputValor<=0){
            alert("no tienes nada que retirar.");
        }else{
            inputJS2.value = inputValor - 1; //Decrementar el valor.
            carJS.value = carValor - 1; //Decrementar el valor del carro.
        }
    });
        //Aumentar.
    sumaJS2.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS2.value) || 0; //valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //valor del carrito de compras.
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS2.value = inputValor + 1; //Incrementar el valor.
            carJS.value = carValor + 1; //Incrementar el valor del carro.
        }
    });
});
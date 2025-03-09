let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim().toLowerCase(); //Se agregó toLowerCase para poner el nombre en minúsculas y así evitar que se puedan repetir

    //Evitar ingresas input vacio
    if (nombre === "") {
        alert("Ingrese un nombre");
        return;
    }

    //Evitar que nombres se repitan
    if (amigos.includes(nombre)){
        alert("Este nombre ya ha sido ingresado antes");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    actualizarLista();
}

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i <amigos.length; i++) { 
        const li = document.createElement('li'); 
        li.textContent = primeraMayuscula(amigos[i]);
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){

    //Mensaje de Error si no hay lista de amigos
    if (amigos.length === 0){
        alert("Ingrese nombres para poder realizar el sorteo");
        return;
    }

    //Sorteo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es ${primeraMayuscula(amigoSorteado)}`;
}

//Función para que el resultado sea escrito con la primera letra mayúscula
function primeraMayuscula(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}



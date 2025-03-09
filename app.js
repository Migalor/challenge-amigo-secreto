let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

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
        li.textContent = amigos[i]
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){

    //Mensaje de Error si no hay lista de amigos
    if (amigos.length = 0){
        alert("Ingrese nombres para poder realizar el sorteo");
        return;
    }

    //Sorteo
    const indiceAleatorio = Math.floor(Math.random() * amigos.lenght);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es ${amigoSorteado}`;
}



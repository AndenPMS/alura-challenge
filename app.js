// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() { 
    let input = document.getElementById('amigo'); 

    if(input.value === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(input.value);
    input.value = '';
    listaAmigos();
}

function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';

    for(let i=0;i<amigos.length;i++){
        lista.innerHTML +=`<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if(amigos.length < 1){
        alert('Aun no ingreso ningun nombre');
        return;
    }

    let valorRandom = Math.floor(Math.random()*amigos.length)
    let res = amigos[valorRandom];
    let resultado =document.getElementById('resultado')
    resultado.innerHTML =`<li>El amigo secreto es: ${res}</li>`

    console.log(valorRandom)
}

console.log(amigos)
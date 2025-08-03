// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';

    for(let i=0;i<amigos.length;i++){
        lista.innerHTML +=`<li>${amigos[i]}</li>`;
    }
}

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

console.log(amigos)
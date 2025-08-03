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
}

console.log(amigos)
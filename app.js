let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo === '') {
        mostrarMensaje('Por favor ingrese un nombre válido', 'error');
        return;
    }
    
    amigos.push(nombreAmigo)
    inputAmigo.value = '';
    actualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function mostrarMensaje(mensaje, tipo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const mensajeElement = document.createElement('li');
    mensajeElement.textContent = mensaje;
    mensajeElement.className = tipo === 'error' ? 'mensaje-error' : 'mensaje-exito';
    resultado.appendChild(mensajeElement);
    if (tipo === 'error') {
        setTimeout(() => {
            mensajeElement.remove();
        }, 3000);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje('Agregue al menos un amigo para realizar el sorteo', 'error');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('listaAmigos').innerHTML = '';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const resultadoElement = document.createElement('li');
    resultadoElement.className = 'resultado-sorteo';
    resultadoElement.innerHTML = `<span class="texto-verde">El amigo secreto sorteado es: ${amigoSorteado}</span>`;
    resultado.appendChild(resultadoElement);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

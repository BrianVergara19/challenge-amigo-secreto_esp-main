// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validamos que el nombre no esté vacío
    if (nombreAmigo === '') {
        // Mostramos mensaje de error
        mostrarMensaje('Por favor ingrese un nombre válido', 'error');
        return;
    }
    
    // Añadimos el amigo al array
    amigos.push(nombreAmigo);
    
    // Limpiamos el input
    inputAmigo.value = '';
    
    // Actualizamos la lista de amigos en el DOM
    actualizarListaAmigos();
    
    // Limpiamos cualquier mensaje de resultado anterior
    document.getElementById('resultado').innerHTML = '';
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiamos la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregamos cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para mostrar mensajes (error o éxito)
function mostrarMensaje(mensaje, tipo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const mensajeElement = document.createElement('li');
    mensajeElement.textContent = mensaje;
    mensajeElement.className = tipo === 'error' ? 'mensaje-error' : 'mensaje-exito';
    resultado.appendChild(mensajeElement);
    
    // Eliminamos el mensaje después de 3 segundos si es un error
    if (tipo === 'error') {
        setTimeout(() => {
            mensajeElement.remove();
        }, 3000);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        mostrarMensaje('Agregue al menos un amigo para realizar el sorteo', 'error');
        return;
    }
    
    // Obtenemos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtenemos el amigo seleccionado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Ocultamos la lista de amigos
    document.getElementById('listaAmigos').innerHTML = '';
    
    // Mostramos el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    const resultadoElement = document.createElement('li');
    resultadoElement.className = 'resultado-sorteo';
    resultadoElement.innerHTML = `<span class="texto-verde">El amigo secreto sorteado es: ${amigoSorteado}</span>`;
    resultado.appendChild(resultadoElement);
}

// También podemos permitir que el usuario presione Enter para agregar un amigo
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
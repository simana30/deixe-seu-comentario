const formulario = document.getElementById("formulario-de-comentarios");

let comentarios = document.getElementById("todos-os-comentarios")


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let inputUsuario = document.getElementById("input-de-formulario");
    let mensagem = inputUsuario.value;

    console.log(inputUsuario);
    console.log(mensagem);

    let mostraMensagem = document.createElement("p");
    mostraMensagem.textContent = mensagem;
    comentarios.appendChild(mostraMensagem);

    mostraMensagem.classList.add("comentario");
 
});





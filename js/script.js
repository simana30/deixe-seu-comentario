const formulario = document.getElementById("formulario-de-comentarios");

let comentarios = document.getElementById("todos-os-comentarios");

let validador = document.getElementById("validar")


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let inputUsuario = document.getElementById("input-de-formulario");
    let mensagem = inputUsuario.value;

    if (mensagem === "") {
        validador.textContent = "Epa, escreve esse comentário direito";
       
    } else {

    let mostraMensagem = document.createElement("p");
    mostraMensagem.textContent = mensagem;
    comentarios.appendChild(mostraMensagem);
    mensagemValidar = "";
    mostraMensagem.classList.add("comentario");
    formulario.reset();
    validador.textContent = "";
    }
    
});





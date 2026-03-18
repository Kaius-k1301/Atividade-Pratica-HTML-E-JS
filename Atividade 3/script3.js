 
const LIMITE_MAXIMO = 100;

 
let usuariosOnline = 0;

const displayContador = document.getElementById('contador');
const displayMensagem = document.getElementById('mensagem');

function atualizarPainel() {
    displayContador.innerText = usuariosOnline;
}

function adicionarUsuario() {
     
    if (usuariosOnline < LIMITE_MAXIMO) {
        usuariosOnline++;
        displayMensagem.innerText = "Usuário conectado com sucesso!";
        displayMensagem.className = "sucesso";
    } else {
        
        displayMensagem.innerText = "Erro: Limite de 100 usuários atingido!";
        displayMensagem.className = "alerta";
    }
    atualizarPainel();
}

function removerUsuario() {
     
    if (usuariosOnline > 0) {
        usuariosOnline--;
        displayMensagem.innerText = "Usuário desconectado.";
        displayMensagem.className = "";
    }
    atualizarPainel();
}
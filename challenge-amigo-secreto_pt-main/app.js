let amigos = []; // variável para armazenar os nomes dos amigos

// função para adicionar um amigo à lista
function adicionarAmigo() {
    let campoNome = document.querySelector("#amigo");
    let nomeAmigo = campoNome.value.trim(); // remove espaços extras

    if (nomeAmigo) { // verifica se o campo não está vazio
        amigos.push(nomeAmigo); // adiciona o nome ao array de amigos
        campoNome.value = ""; // limpa o campo de entrada
        atualizarLista(); // atualiza a lista
    } else {
        alert("Por favor, insira um nome.");
    }
}

// função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.querySelector("#listaAmigos"); // seleciona o <ul> da lista
    lista.innerHTML = ""; // limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) { // percorre o array amigos
        let item = document.createElement("li"); // cria um <li>
        item.textContent = amigos[i]; // define o texto como o nome do amigo
        lista.appendChild(item); // adiciona o <li> à <ul>
    }
}

// função para sortear um amigo secreto
function sortearAmigo() {
    // verifica se há amigos no array
    if (amigos.length === 0) {
        alert("Não há amigos cadastrados. Por favor, adicione amigos primeiro!");
        return; // se não houver amigos, sai da função
    }

    // gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // pega o nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // exibe o nome do amigo sorteado na tela
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

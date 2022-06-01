function openPlayerConfig(event){
    //Salva qual botão 'Editar' foi acionado
    editedPlayer = +event.target.dataset.playerid;
    //Mostra caixa de edição
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    //Esconde caixa de edição
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    //Desfaz eventual mensagem de erro na caixa de edição 
    formElement.firstElementChild.classList.remove('error');  
    errorOutputElement.textContent = '';
    //Deleta input do usuário
    userInputNameElement.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    //Salva o input do jogador
    const formData = new FormData(event.target);
    const enteredPlayerGame = formData.get('username').trim();

    //Verfica a validade do input
    if (!enteredPlayerGame){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = "Por favor, insira um nome válido.";
        return;
    }

    //Atualiza o nome do jogador
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerGame;

    //Guarda o nome do jogador
    players[editedPlayer - 1].name = enteredPlayerGame;

    //Fecha o campo de edição
    closePlayerConfig();
}
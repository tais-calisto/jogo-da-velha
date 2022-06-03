function resetGame(){
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = `
    Você venceu, <span id="winner-name">NOME DO JOGADOR</span>!`;
    gameOverElement.style.display = 'none';

    let gameBoardIndex=0;
    for(let i = 0; i < 3; i++){
        for(let j=0; j <3; j++){
            gameData[i][j] = 0;
            const gameBoardElementItem = gameBoardElement.children[gameBoardIndex];
            gameBoardElementItem.textContent = "";
            gameBoardElementItem.classList.remove('disable');
            gameBoardIndex++;
        }
    }
}

function startNewGame(){
    //Checa se os jogadores foram configurados
    if(players[0].name === '' || players[1].name === ''){
        starGameErrorElement.textContent = "Por favor, configure o nome dos jogadores"
        return;
    }

    //Mostra o tabuleiro
    starGameErrorElement.textContent = ""

    resetGame();

    playerNameElement.textContent = players[activePlayer].name;    
    gameAreaElement.style.display = 'block';
}


function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    playerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(e){
    const selectedField = e.target;
    //Pega o dado da localização do campo selecionado
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row -1;
    //Checa se o campo selecionado está livre
    if(gameData[selectedRow][selectedColumn] > 0){
        return;
    }
    //Marca o símbolo do jogador no campo escolhido
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disable');
    //Armazena os dados do jogo em gameData:
        //Grava o campo selecionado pelo primeiro jogador como 1 e pelo segundo jogador como 2
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    //Verifica o jogo
    const winnerId = checkForGameOver();
    //Se acabou o jogo, executa mensagem final
    if(winnerId !== 0){
        endGame(winnerId);
    }
    //Avança a rodada
    currentRound++;
    switchPlayer();
}


function checkForGameOver(){
    //Verificada o resultado do jogo
    //Linhas
    for(let i=0; i<3; i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
            ){
                return gameData[i][0];
            }
    }
    //Colunas
    for(let i=0; i<3; i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
            ){
                return gameData[0][i];
            }
    }
    //Diagonal 1
    if(
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[0][0] === gameData[2][2]
        ){
            return gameData[0][0];
        }
    //Diagonal 2
    if(
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[0][2] === gameData[2][0]
        ){
            return gameData[0][2];
        }
    //Acabou o jogo, empate
    if(currentRound ===9){
        return -1
    } 
    //Sem vencedores, com jogo pela frente
    return 0;
}

function endGame(winnerId){
    gameOverElement.style.display = 'block';
    
    if(winnerId > 0){
        gameOverElement.firstElementChild.textContent = `Você venceu, ${players[winnerId - 1].name}`;
    }else{
        gameOverElement.firstElementChild.textContent = 'Empate!'
    }
    startBtnElement.textContent = 'Reiniciar Partida';
}

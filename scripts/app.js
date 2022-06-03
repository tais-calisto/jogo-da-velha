//Variáveis
let editedPlayer;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const gameData = [
    [0 ,0 ,0],
    [0, 0, 0],
    [0, 0, 0],
];

//Acessando a DOM 
//Edição dos jogadores
const editPlayer1BtnElement = document.querySelector('#edit-player-1-btn');
const editPlayer2BtnElement = document.querySelector('#edit-player-2-btn');
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const editCancelBtnElement = document.getElementById('cancel-config-btn');
const editConfirmBtnElement = document.getElementById('confirm-config-btn');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const userInputNameElement = document.getElementById('nomedojogador');
//Iniciar o jogo
const startBtnElement = document.getElementById('start-btn');
const gameAreaElement = document.getElementById('active-game');
const starGameErrorElement = document.getElementById('start-game-error');
//Tabuleiro
const playerNameElement = document.getElementById('active-player-name');
const gameBoardElement = document.getElementById('game-board');
const gameFieldElements = document.querySelectorAll('#game-board li');
//Elementos do game over
const gameOverElement = document.getElementById('game-over')

//Definindo eventos
//Edição dos jogadores
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
editCancelBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
//Iniciar o jogo
startBtnElement.addEventListener('click', startNewGame);
//Tabuleiro
for (const gameField of gameFieldElements){
    gameField.addEventListener('click', selectGameField);
}



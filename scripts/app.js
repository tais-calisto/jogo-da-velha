//Variáveis
let editedPlayer;
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

//Definindo eventos
//Edição dos jogadores
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
editCancelBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);



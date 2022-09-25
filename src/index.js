import "./styles/style.css";

import { Gameboard,validPosition,autoPlaceShips,onlyShipList } from "./functions/board.js";
import { Player,makeRandomPlay, createPlayers } from "./functions/player.js";
import { Ship, basicUnits } from "./functions/ship.js";
import { generateGamePage, generateBoardHtml } from "./functions/DOMFunctions/Gameboard_UI.js";

import { generateMainPage } from "./functions/DOMFunctions/main_page.js";



document.addEventListener("DOMContentLoaded", () => {

    generateMainPage()

    let player1 = Player("",true,false);
    let player2 = Player("CPU", false, true)
    const start_button = document.getElementById("start-game")
    const test_button = document.getElementById("test-name")
    // Starting the game and setting the Player name
    start_button.addEventListener("click", function() {
        createPlayers(player1);
        generateGamePage();
            let player_board = new Gameboard();
    let cpu_board = new Gameboard();

    autoPlaceShips(player_board, basicUnits());
    autoPlaceShips(cpu_board, basicUnits());

    console.log(player_board)
    console.log(cpu_board)

    generateBoardHtml(player_board, player1);
    generateBoardHtml(cpu_board, player2)
        
    })
    test_button.addEventListener("click", function() {console.log(player1.name)})


    

    




})




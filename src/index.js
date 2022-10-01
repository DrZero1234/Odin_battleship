import "./styles/style.css";

import { Gameboard,validPosition,autoPlaceShips,onlyShipList } from "./functions/board.js";
import { Player,makeRandomPlay, createPlayers } from "./functions/player.js";
import { Ship, basicUnits } from "./functions/ship.js";
import { generateGamePage, generateBoardHtml,updateCell } from "./functions/DOMFunctions/Gameboard_UI.js";

import { generateMainPage } from "./functions/DOMFunctions/main_page.js";

let player1 = Player("",true,false);
let player2 = Player("CPU", false, true)

document.addEventListener("DOMContentLoaded", () => {

    generateMainPage()


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



        const cpu_board_html = document.getElementById("cpu-board");
        const cpu_board_cells = cpu_board_html.querySelectorAll(".cell");

        const player_board_html = document.getElementById("player-board")

        cpu_board_cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                if (cpu_board.receiveAttack(cell.dataset.row, cell.dataset.col)) {
                    updateCell(cell,cpu_board)
                    let enemyAttack = makeRandomPlay(player_board);
                    let player_cell = player_board_html.querySelector(`[data-row="${enemyAttack.row.toString()}"][data-col="${enemyAttack.col.toString()}"]`);
                    updateCell(player_cell, player_board)
                }

            })
        })
    })

})



// Making the player´s board clickable if it is the CPU´s turn



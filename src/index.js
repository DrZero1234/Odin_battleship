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

        cpu_board_cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                cpu_board.receiveAttack(cell.dataset.row, cell.dataset.col);
                updateCell(cell,cpu_board,cell.dataset.row,cell.dataset.col)
                switchTurn(player1,player2)
                console.log(player1)
                console.log(player2)
                cellClickable() 
            })
        })
    })

})



// Making the player´s board clickable if it is the CPU´s turn

function cellClickable() {
    const player_board_html = document.getElementById("player-board");
    const player_board_cells = player_board_html.querySelectorAll(".cell")
    if (player1.turn) {
        player_board_cells.forEach((cell) => {
            cell.style.pointerEvents = "none"
        })
    } else {
        player_board_cells.forEach((cell) => {
            cell.style.pointerEvents = "auto"
        })
    }
}

function switchTurn(p1,p2) {
    if (p1 instanceof Player && p2 instanceof Player) {
    if (p1.turn) {
        p1.turn = false;
        p2.turn = true
    } else {
        p1.turn = true
        p2.turn = false;
    }
    }

}
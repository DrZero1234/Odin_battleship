import { autoPlaceShips, Gameboard } from "./board.js"
import { basicUnits } from "./ship.js";
import { generateBoardHtml, updateCell } from "./DOMFunctions/Gameboard_UI.js";
import { makeRandomPlay } from "./player.js";


function restartGame(p1_board,p2_board)  {
    p1_board.resetBoard();
    p2_board.resetBoard();

    autoPlaceShips(p1_board,basicUnits());
    autoPlaceShips(p2_board,basicUnits());

    clearDiv(player_board_html);
    clearDiv(cpu_board_html)
    generateBoardHtml(player_board, player1);
    generateBoardHtml(cpu_board, player2)
}

function endGame() {
    const restart_btn = document.getElementById("restart-btn");
    const cpu_board = document.getElementById("cpu-board");
    const cpu_board_cells = cpu_board.querySelectorAll(".cell")
    cpu_board_cells.forEach((cell) => {
        cell.style.pointerEvents = "none";
    })
    restart_btn.className = "active";

}

function gameLogic(cpu_board,player_board) {
    const cpu_board_html = document.getElementById("cpu-board");
    const cpu_board_cells = cpu_board_html.querySelectorAll(".cell");
    const player_board_html = document.getElementById("player-board")
    cpu_board_cells.forEach((cell) => {
            if (cpu_board.receiveAttack(cell.dataset.row, cell.dataset.col)) {
        updateCell(EventTarget,cpu_board)
        let enemyAttack = makeRandomPlay(player_board);
        let player_cell = player_board_html.querySelector(`[data-row="${enemyAttack.row.toString()}"][data-col="${enemyAttack.col.toString()}"]`);
        updateCell(player_cell,player_board)
    }
    })


}

export {gameLogic,endGame,restartGame}


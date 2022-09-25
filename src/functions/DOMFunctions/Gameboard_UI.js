import { Gameboard } from "../board.js";
import { Player } from "../player.js";
import { clearDiv } from "./OtherDomFunctions.js";

const MAIN_CONTENT = document.querySelector(".main-content")

function generateBoardHtml(board_class, player_class) {

        let board_html;
        let board_id;
        switch (player_class.is_AI) {
            case false:
                board_html = document.getElementById("player-board")
                break;
            case true:
                board_html = document.getElementById("cpu-board")
                break;
        console.log(player_class.is_AI)
        }
        console.log(board_html)
        for (let i = 0; i < board_class.board.length; i++) {
            for (let j = 0; j < board_class.board[i].length; j++) {
                let cell_elem = document.createElement("div");
                cell_elem.className = "cell";
                cell_elem.dataset.row = i;
                cell_elem.dataset.col = j;
                cell_elem.dataset.was_hit = board_class.board[i][j].was_hit;
                cell_elem.dataset.ship_type = board_class.board[i][j].ship_type;
                console.log(cell_elem.dataset.ship_type)
                
                if (cell_elem.dataset.ship_type != "null" & !player_class.is_AI) {
                    cell_elem.style.backgroundColor = "Blue"
                }
                board_html.appendChild(cell_elem)
            }
        }   
   
}

function generateGamePage() {
    const game_container = document.createElement("div");
    game_container.className = "game-content";

    const player_information_div = document.createElement("div");
    player_information_div.class = "information";
    
    const player_board_title_div = document.createElement("h2");
    player_board_title_div.textContent = "Player´s Board";

    const player_board_div = document.createElement("div");
    player_board_div.className = "board";
    player_board_div.id = "player-board";

    const cpu_board_div = document.createElement("div");
    cpu_board_div.className = "board";
    cpu_board_div.id = "cpu-board";

    game_container.appendChild(player_board_div);
    game_container.appendChild(cpu_board_div)


    clearDiv(MAIN_CONTENT);
    MAIN_CONTENT.appendChild(game_container)




}

/*
 <div class="container">
        <div class="game-content">
            <div class="information" id="player infomation">
                <h2 class="board-id">Player´s board</h2>
                    <div class="board" id="player-board">

                    <div class = "cell" data-row = ? data-col = ?> * 100
                    
                    </div>
            </div>
        
            <div class="information" id="cpu infomation">
                        <h2 class="board-id">CPU board</h2>
                        <div class="board" id="cpu-board">
                            <div class = "cell" data-row = ? data-col = ?> * 100
                        </div>
                </div>
                
        </div>
*/

export {generateGamePage, generateBoardHtml}
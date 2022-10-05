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

                if (!player_class.is_AI) {
                    cell_elem.style.pointerEvents = "none";
                }
                if (board_class.board[i][j].ship_type != null &&  !player_class.is_AI) {
                    cell_elem.style.backgroundColor = "Blue"
                }

                board_html.appendChild(cell_elem)
            }
        }   
   
}

function generateGamePage() {
    const game_container = document.createElement("div");
    game_container.className = "game-content";


    /*
    const player_board_wrapper_div = document.createElement("div");
    player_board_wrapper_div.class = "board-wrapper";
    player_board_wrapper_div.id = "player-board-wrapper";

    const player_title = document.createElement("h2");
    player_title.textContent = "Player´s board";
    player_board_wrapper_div.appendChild(player_title)
    */


    
    const player_board_title_div = document.createElement("h2");
    player_board_title_div.textContent = "Player´s Board";

    const board_wrapper = document.createElement("div");
    board_wrapper.id = "board-wrapper";


    const player_board_div = document.createElement("div");
    player_board_div.className = "board";
    player_board_div.id = "player-board";

    const cpu_board_div = document.createElement("div");
    cpu_board_div.className = "board";
    cpu_board_div.id = "cpu-board";

    const color_info_wrapper = document.createElement("div");
    color_info_wrapper.className = "color-info-wrapper";

    const green_info = document.createElement("div");
    green_info.className = "color-information";
    green_info.id = "green-information";

    const green_block = document.createElement("div");
    green_block.className = "color-block";
    green_block.style.backgroundColor = "green";

    const green_text = document.createElement("p");
    green_text.className = "color-info-text";
    green_text.textContent = "Hit";

    green_info.appendChild(green_block);
    green_info.appendChild(green_text)

    const red_info = document.createElement("div");
    red_info.className = "color-information";
    red_info.id = "red-information";

    const red_block = document.createElement("div");
    red_block.className = "color-block";
    red_block.style.backgroundColor = "red";

    const red_text = document.createElement("p");
    red_text.className = "color-info-text";
    red_text.textContent = "Missed";

    red_info.appendChild(red_block);
    red_info.appendChild(red_text);

    const blue_info = document.createElement("div");
    blue_info.className = "color-information";
    blue_info.id = "blue-information";

    const blue_block = document.createElement("div");
    blue_block.className = "color-block";
    blue_block.style.backgroundColor = "blue";

    const blue_text = document.createElement("p");
    blue_text.className = "color-info-text";
    blue_text.textContent = "Alive board";

    blue_info.appendChild(blue_block);
    blue_info.appendChild(blue_text)

    const restart_btn = document.createElement("button");
    restart_btn.textContent = "Restart";
    restart_btn.className = "inactive";
    restart_btn.id = "restart-btn";




    color_info_wrapper.appendChild(blue_info);
    color_info_wrapper.appendChild(red_info);
    color_info_wrapper.appendChild(green_info);
    

    game_container.appendChild(board_wrapper)

    board_wrapper.appendChild(player_board_div);
    board_wrapper.appendChild(cpu_board_div)

    game_container.appendChild(color_info_wrapper)
    game_container.appendChild(restart_btn)


    clearDiv(MAIN_CONTENT);
    MAIN_CONTENT.appendChild(game_container)




}


// Updates the appearance of the cell you hit 

function updateCell(cell,board_class) {
    if (board_class instanceof Gameboard) {
        if (board_class.board[cell.dataset.row][cell.dataset.col].ship_type) {
            cell.style.backgroundColor = "green"
        } else {
            cell.style.backgroundColor = "red"
        }
    }
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

export {generateGamePage, generateBoardHtml, updateCell}
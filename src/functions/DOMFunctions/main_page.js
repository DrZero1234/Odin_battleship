import { Player } from "../player.js";

const MAIN_TITLE = document.querySelector(".main-title");
const MAIN_CONTENT = document.querySelector(".main-content");
const MAIN_CONTROL_PANEL = document.querySelector("control-panel")

// Generates the Start Game main menu HTML
function createPlayers() {
    const PLAYER_NAME_INPUT = document.querySelector(".p-name-input");
    console.log(PLAYER_NAME_INPUT)
    if (PLAYER_NAME_INPUT) {
        if (PLAYER_NAME_INPUT.value.length > 0) {
            const p1 = Player(PLAYER_NAME_INPUT.value);
            const p2 = Player("CPU",false,true);
            console.log(p1);
            console.log(p2);
            return {p1, p2};
        }
        return false;
    }
}

function generateMainPage() {


    const title = document.createElement("h1");
    title.textContent = "Battleship";
    title.className = "main-title active";

    const player_name_input = document.createElement("input");
    player_name_input.type = "text";
    player_name_input.placeholder = "Enter your name";
    player_name_input.className = "p-name-input";

    const start_button = document.createElement("input");
    start_button.type = "submit";
    start_button.value = "Start Game";
    start_button.id = "start-game";

    start_button.addEventListener("click",createPlayers)

    MAIN_TITLE.appendChild(title);
    MAIN_CONTENT.appendChild(player_name_input)
    MAIN_CONTENT.appendChild(start_button)




}

export {generateMainPage}









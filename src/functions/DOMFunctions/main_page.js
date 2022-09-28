import { Player } from "../player.js";

const MAIN_TITLE = document.querySelector(".main-title");
const MAIN_CONTENT = document.querySelector(".main-content");
const MAIN_CONTROL_PANEL = document.querySelector("control-panel")

// Generates the Start Game main menu HTML


function generateMainPage() {


    const title = document.createElement("h1");
    title.textContent = "Battleship";
    title.id = "game-title";

    const rules_link = document.createElement("a");
    rules_link.href = "https://www.hasbro.com/common/instruct/battleship.pdf";
    rules_link.textContent = "Rules"
    rules_link.id = "game-rules";


    const player_name_input = document.createElement("input");
    player_name_input.type = "text";
    player_name_input.placeholder = "Enter your name";
    player_name_input.id = "p-name-input";

    const start_button = document.createElement("input");
    start_button.type = "submit";
    start_button.value = "Start Game";
    start_button.id = "start-game";



    MAIN_TITLE.appendChild(title);
    MAIN_TITLE.appendChild(rules_link)
    MAIN_CONTENT.appendChild(player_name_input)
    MAIN_CONTENT.appendChild(start_button)

    
}

export {generateMainPage,}









import "./styles/style.css";

import { Gameboard,validPosition,autoPlaceShips,onlyShipList } from "./functions/board.js";
import { Player,makeRandomPlay, createPlayers } from "./functions/player.js";
import { Ship, basicUnits } from "./functions/ship.js";

import { generateMainPage } from "./functions/DOMFunctions/main_page.js";


const  player1 = "kek";

document.addEventListener("DOMContentLoaded", () => {

    generateMainPage()
        
    let player2;
    const start_button = document.getElementById("start-game")
    console.log(start_button)
    start_button.addEventListener("click",() => {
        if (createPlayers()) {
            player1 = createPlayers().p1;
            player2 = createPlayers().p2;
        }
    })
})






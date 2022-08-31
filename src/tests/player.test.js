import { Player } from "../functions/player.js";
import { Gameboard } from "../functions/board.js";
import { Ship } from "../functions/ship.js";



test("Testing basic player functions", () => {
    let p1 = Player("Player 1");    
    p1.setName("New Name");
    console.log(p1.name)
})
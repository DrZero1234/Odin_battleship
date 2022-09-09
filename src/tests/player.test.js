import { Player } from "../functions/player.js";
import { Gameboard } from "../functions/board.js";
import { Ship } from "../functions/ship.js";



// change player name by factory.name = new name

test("Testing basic player functions", () => {
    let p1 = Player("Player 1");
    let p2 = Player("Player 2")
    p1.name = "New name"
    p1.setName("New Name");   
    p1.endTurn(p2)
    console.log(p1.getTurn())
})
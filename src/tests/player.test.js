import { Player } from "../functions/player.js";
import { Gameboard } from "../functions/board.js";
import { Ship } from "../functions/ship.js";



test("Testing basic player functions", () => {
    const p1 = Player("Player1");
    const p2 = Player("CPU")
    p1.endTurn(p2);
    console.log(p1)
    expect(p1.turn).toBeFalsy()
})
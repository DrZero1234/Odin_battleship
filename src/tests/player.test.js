import { Player, makeRandomPlay } from "../functions/player.js";
import { Gameboard } from "../functions/board.js";
import { Ship } from "../functions/ship.js";



// The updated name and turn values are in the getName(), getTurn() functions

test("Testing basic player functions", () => {
    let p1 = Player("Player 1");
    let p2 = Player("Player 2")
    p1.setName("New name");   
    p1.endTurn(p2)
    console.log(p1.getTurn())
    expect(p1.getName()).toBe("New name")
    expect(p1.getTurn()).toBeFalsy()
})


test("Testing the random attacking function", () => {
    const b = new Gameboard();
    const ship = Ship(5);
    b.placeShip(ship,4,2)
    for (let i = 0;i < 99;i++) {
        makeRandomPlay(b)
    }

    //expect(b.shot_spots().length).toBe(98)
    expect(b.allShipSunk()).toBeTruthy()
})

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

test ("Ending player turn", () => {
    const p1 = Player("Player1",true,false);
    const p2 = Player("Player2",false,false)
    p1.endTurn(p2);
    console.log(p1.turn)
}) 

test("Testing the makeRandomPlay() function", () => {
    for (let i = 0; i < 1000; i++) {
            let enemy_board = new Gameboard();
    for (let i = 0;i < 50;i++) {
        makeRandomPlay(enemy_board);
    }
    const falttened_board = enemy_board.board.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
    const attacked_spots = falttened_board.filter(({was_hit}) => was_hit);
    expect(attacked_spots.length).toBe(50)

    }

})

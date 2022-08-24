import Ship from "../functions/ship";
import Board from "../functions/board.js";
import {allShipsPlaced, autoPlaceShips} from "../functions/board.js";


test("Initiating Board", () => {
    expect(Board().board[0][9]).toEqual({ship_length: null,ship_type: null, was_hit: false})
})

test("Integrationg Boards work with Ship", () => {
    const board = Board();
    const ship = Ship(3);
    board.placeShip(ship,2,3);
    expect(board.board[2][3]).toEqual({ship_length: 3,ship_type: "Submarine", was_hit: false})
})

test("Placing Two Ship", () => {
    const board = Board();
    const ship = Ship(3);
    const ship2 = Ship(5)

    board.placeShip(ship,2,3);
    board.placeShip(ship2,5,1);
    board.receiveHit(2,3)
    board.receiveHit(2,4)
    board.receiveHit(2,5)
    board.receiveHit(5,6)
    //expect(board.board[5]).toEqual([])
    expect(ship.isSunk()).toBeTruthy()
    board.receiveHit(5,8)
    expect(board.board[5][8].was_hit).toBeTruthy()
    //expect(board.MISSED_SHOTS).toEqual("lel")
})

test("Testing auto placement and Ship placement check", () => {
    const b = Board();
    autoPlaceShips(b);
    console.log(b.board)
    expect(allShipsPlaced(b.board)).toBeTruthy();

    
})

import Ship from "../functions/ship";
import Board from "../functions/board";

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
    board.placeShip(ship2,5,1)
    board.receiveHit(5,2)
    
    expect(board.board[2][3]).toEqual({ship_length: 3,ship_type: "Submarine", was_hit: false});
    expect(board.board[5][2].was_hit).toBeTruthy()
    expect(board.getFirstDeck("Submarine")).toEqual({row: 2, col: 3})
})

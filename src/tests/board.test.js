import { Gameboard, validPosition } from "../functions/board.js";
import {Ship} from "../functions/ship.js";


test("Valid position test", () => {
    const row = 9;
    const col = 0;

    const inv_row = -2;
    const inv_col = 5
    expect(validPosition(row,col)).toBeTruthy();
    expect(validPosition(inv_row,inv_col)).toBeFalsy();  
})


test("Placing ship to board", () => {
    const ship = Ship(2);
    const b = new Gameboard();

    b.placeShip(ship,2,5)

    b.receiveAttack(2,5);
    b.receiveAttack(2,6);

    expect(b.allShipSunk()).toBeTruthy()

})
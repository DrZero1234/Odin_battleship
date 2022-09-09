import { autoPlaceShips, Gameboard, onlyShipList, validPosition } from "../functions/board.js";
import { basicUnits, Ship } from "../functions/ship.js";


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

    b.receiveAttack(5,1);
    b.receiveAttack(7,5);


    expect(b.missed_shots).toEqual([{row:5, col: 1}, {row: 7, col: 5}])

})

test("Placing ships on top of each other", () => {
    const b = new Gameboard();
    const s1 = Ship(3);
    const s2 = Ship(4);

    b.placeShip(s1,1,5);
    //expect(() => b.placeShip(s2,1,2)).toThrow("Cant place ships on top of each other")
})




test("Autoplacing Ships to board", () => {
    const b = new Gameboard();
    const units = basicUnits();
    autoPlaceShips(b,units);
    expect(onlyShipList(b).length).toEqual(20);
})


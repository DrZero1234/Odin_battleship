import {Ship} from "../functions/ship.js";


test("Ship with every deck sunk", () => {
    const ship2 = Ship(2);
    ship2.hit(0);
    console.log(ship2)
    ship2.hit(1);
    expect(ship2.isSunk()).toBeTruthy()
})



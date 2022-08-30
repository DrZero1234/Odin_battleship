import {Ship, basicUnits, unitsLength} from "../functions/ship.js";





test("Ship with every deck sunk", () => {
    const ship2 = Ship(2);
    ship2.hit(0);
    ship2.hit(1);
    
    expect(ship2.isSunk()).toBeTruthy()
})

test("Basic units and its length", () => {
    const units = basicUnits();
    expect(unitsLength(units)).toEqual(20)
})
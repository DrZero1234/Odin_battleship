import Ship from "../functions/ship";


test("Ship with every deck sunk", () => {
    const ship2 = Ship(2);
    ship2.hit(0)
    ship2.hit(1)
    expect(ship2.isSunk()).toBeTruthy()

})



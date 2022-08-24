import Ship from "./ship.js"
import { createShips } from "./ship.js"
import Board from "./board.js";

const ships = createShips();
const board_obj = Board();
const board = board_obj.board

//console.log(b)

// Randomly palces ships (Good for AI)

ships.forEach((ship) => {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    console.log(row, col)
    while(board_obj.placeShip(ship,row,col)){
        board_obj.placeShip(ship,row,col)
    }
})

console.log(board)


import {Gameboard} from "./board.js";
import { basicUnits } from "./ship.js";
import { Ship } from "./ship.js";
import { makeRandomPlay } from "./player.js";


const b = new Gameboard();

b.receiveAttack(0,5);
b.receiveAttack(0,6);
console.log(b instanceof Gameboard)
console.log(b.board[0])
console.log(b.shot_spots())

console.log(makeRandomPlay(b))
 
//console.log(b.board)
//console.log(basicUnits())

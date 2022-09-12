import {Gameboard} from "./board.js";
import { basicUnits } from "./ship.js";
import { Ship } from "./ship.js";
import { makeRandomPlay } from "./player.js";


const b = new Gameboard();

console.log(b instanceof Gameboard)

for (let i = 0;i < 80;i++) {
    console.log(`${i}: `)
    makeRandomPlay(b)

}

 
//console.log(b.board)
//console.log(basicUnits())

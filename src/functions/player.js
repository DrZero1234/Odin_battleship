import { Gameboard } from "./board.js";
import { Ship } from "./ship.js";

function Player(player_name,player_turn = true,AI = false) {
    return {
        name: player_name,
        turn: player_turn,
        is_AI: AI,
        setName: (new_name) => {
            if (new_name) {
                player_name = new_name
            }
        },
        startTurn: () => {
            if (!player_turn) {
                player_turn = true
            }
        },
        endTurn: (player2) => {
            if (player_turn) {
                player_turn = false;
                player2.startTurn();
            }
        },
        getTurn: ()=>  {
            return player_turn;
        },
        getName: () => {
            return player_name
        }

    }
}
 
function makeRandomPlay(b) {
    let col = Math.floor(Math.random() * 10);
    let row = Math.floor(Math.random() * 10);
    if (!(b instanceof Gameboard)) {
        return false
    }
    console.log("Shot spots: ")
    console.log(b.shot_spots())
    let next_attack = b.receiveAttack(row,col) 
    while (!next_attack) {
        let col = Math.floor(Math.random() * 10);
        let row = Math.floor(Math.random() * 10);
        console.log(`New coordinates generated: ${row}, ${col}`)
        next_attack = b.receiveAttack(row,col)
    }
    console.log(`Row: ${row},\n Col: ${col}`)
    console.log(b.board[row][col])
}

function createPlayers(p) {
    const PLAYER_NAME_INPUT = document.getElementById("p-name-input")
    if (PLAYER_NAME_INPUT) {
            if (PLAYER_NAME_INPUT.value.length > 0) {
        p.name = PLAYER_NAME_INPUT.value
        console.log(p)
        return p
    } else {
        return false;
    }
    }

}



export {Player, makeRandomPlay, createPlayers}
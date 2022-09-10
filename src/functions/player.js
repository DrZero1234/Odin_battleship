import { Gameboard } from "./board.js";
import { Ship } from "./ship.js";

function Player(player_name,player_turn = true,AI = false) {
    return {
        name: player_name,
        turn: player_turn,
        is_AI: AI,
        setName: (new_name) => {
            if (player_name) {
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
        }

    }
}
 
function makeRandomPlay(board) {
    let col = Math.floor(Math.random() * 10);
    let row = Math.floor(Math.random() * 10);
    if (!(board instanceof Gameboard)) {
        return false
    }
    console.log(board.shot_spots())
}



export {Player, makeRandomPlay}
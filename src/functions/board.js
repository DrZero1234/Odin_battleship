import Ship from "./ship.js";
import { createShips } from "./ship.js";
 

const ship_types = ["Destroyer","Submarine","Battleship","Carrier"]
const board_size = 10;

// Works only for horizontal ships
function getFirstDeck(board,ship_name){
        if (!ship_types.includes(ship_name)) {
            throw new Error("Invalid ship type")
        }
        for (let row = 0;row < board_size;row++) {
            for (let col = 0;col < board_size;col++) {
                if (board[row][col].ship_type) {
                    if (board[row][col].ship_type.toLowerCase() === ship_name.toLowerCase()) {
                        return {row, col}
                    }
                }
            }
        }
    }

function autoPlaceShips(board) {
    const ships = createShips();
    ships.forEach((ship) => {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        console.log(row, col)
         do {
            board.placeShip(ship,row,col)
        }while(board.placeShip(ship,row,col))
    })
}

function allShipsPlaced(board) {
    const falttened_board = board.reduce((previousValue, currentValue) =>previousValue.concat(currentValue))    
    const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
    return only_ship_list.length === 17;
}

 const Board = (board = [],MISSED_SHOTS = [],) => {

    for (let i = 0; i < board_size;i++) {
        const row = [];
        for (let j = 0; j < board_size;j++) {
            row.push({ship_length: null, ship_type: null, was_hit: false})
        }
        board.push(row);
    }

    function placeShip(ship,row,col,) {
        if ((row < 0 || row > 9)  || (col < 0 || col > 9)) {
            console.log("Invalid position");
            return false;
        }

        // Adjusting the col if the Ship length goes overboard
        while ((col + ship.length) > board_size) {
            col --;
        };

        // Not allowing the ship to place 2 boats on eachother
        const ship_placement = board[row].slice(col,(col+ship.length));
        if (ship_placement.filter(e => e.ship_type !== null).length > 0) {
            console.log("Cant place ship there")
            return false
        }

        for (let deck of ship.decks) {
            board[row][col] = deck;
            col++;
        }
        return true
    }


    function receiveHit(row,col) {
        if (board[row][col].was_hit) {
            throw new Error("This was already hit")
        }
        if (!board[row][col].ship_type) {
            MISSED_SHOTS.push({row,col})

        }
        this.board[row][col].was_hit = true;
        return board
    }

    function allShipSunk(board) {
        const falttened_board = board.reduce((previousValue, currentValue) =>previousValue.concat(currentValue))    
        const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
        return only_ship_list.every(({was_hit}) => was_hit)
}  

    return {
        MISSED_SHOTS,
        board,
        placeShip,
        getFirstDeck,
        receiveHit,
        allShipSunk
    }

}


export default Board
export {autoPlaceShips, allShipsPlaced}


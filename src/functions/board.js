import {Ship} from "./ship.js";

const BOARD_SIZE = 10;

function validPosition(row,col) {
    return ((row >= 0 && row < BOARD_SIZE) && (col >= 0 && col < BOARD_SIZE))
}


class Gameboard {
    constructor() {
        this.missed_shots = [];

        this.board = [];
        for (let i = 0;i < BOARD_SIZE;i++) {
            let row = [];
            for (let j = 0; j < BOARD_SIZE;j++) {
                row.push({ship_type: null, was_hit: null})
            }
            this.board.push(row);
        }
    }

    placeShip(ship,row,col) {
        // Adjusting the col if the Ship length goes overboard
        while ((col + ship.length) > BOARD_SIZE) {
            col --;
        };

        if (!validPosition(row,col)) {
            throw new Error("Cant place ship there")
        }

        // Getting the ship "slice"
        const ship_placement = this.board[row].slice(col,(col+ship.length));
        if (!ship_placement.every(({ship_type}) => ship_type === null)){
            throw new Error("Cant place ships on top of each other");
        }


        for (let deck of ship.decks) {
            this.board[row][col] = deck;
            col++;
        }
        return true

    }

    receiveAttack(row,col) {
        if (!validPosition(row,col) || this.board[row][col].was_hit) {
            throw new Error("You are unable to attack this position")
        }
        if (!this.missed_shots.find((obj) => obj.row === row && obj.col === col)) {
            this.missed_shots.push({row, col});
            this.board[row][col].was_hit = true;
        }
    }

    allShipSunk() {
        const falttened_board = this.board.reduce((previousValue, currentValue) => previousValue.concat(currentValue))    
        const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
        return only_ship_list.every(({was_hit}) => was_hit)
    }

}






/*

const Board = () => {

    for (let i = 0; i < board_size;i++) {
        const row = Array(board_size).fill("O")
        board.push(row);
    }

    function placeShip(ship,row,col,) {
        if ((row < 0 || row > 9)  || (col < 0 || col > 9)) {
            throw new Error("Invalid position")
        }

        // Adjusting the col if the Ship length goes overboard
        while ((col + ship.length) > board_size) {
            col --;
        };

        // Not allowing the ship to place 2 boats on eachother
        const ship_placement = board[row].slice(col,(col+ship.length));
        if (ship_placement.includes(" ") || ship_placement.includes("hit")) {
            throw new Error("Cant place ship there")
        }

        for (let deck of ship.decks) {
            board[row][col] = deck;
            col++;
        }




    }

    return {
        board,
        placeShip
    }

}

*/
export {Gameboard, validPosition}
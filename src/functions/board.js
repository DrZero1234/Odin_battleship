import {Ship, basicUnits} from "./ship.js";

const BOARD_SIZE = 10;



class Gameboard {
    constructor() {
        this.missed_shots = [];

        this.board = [];
        for (let i = 0;i < BOARD_SIZE;i++) {
            let row = [];
            for (let j = 0; j < BOARD_SIZE;j++) {
                row.push({ship_type: null, was_hit: null, row: i, col: j})
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
            console.log("Cant place ships on top of each other");
            return false
        }


        for (let deck of ship.decks) {
            this.board[row][col] = deck;
            col++;
        }
        return true

    }

    receiveAttack(row,col) {
        if (!validPosition(row,col) || this.board[row][col].was_hit) {
            console.log("You are unable to attack this position")
            return false
        }
        if (!this.missed_shots.find((obj) => obj.row === row && obj.col === col) && !this.board[row][col].ship_type) {
            this.missed_shots.push({row, col});

        }
        this.board[row][col].was_hit = true;
        return true
    }

    allShipSunk() {
        const falttened_board = this.board.reduce((previousValue, currentValue) => previousValue.concat(currentValue))    
        const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
        return only_ship_list.every(({was_hit}) => was_hit)
    }


    // Gets every shot spots
    shot_spots() {
        const falttened_board = this.board.reduce((previousValue, currentValue) => previousValue.concat(currentValue))    
        return falttened_board.filter(({was_hit}) => was_hit === true);
    }
    was_hit(cell) {
        if (cell.was_hit) {
            return true
        }
        return false
    } 

}


function validPosition(row,col) {
    return ((row >= 0 && row < BOARD_SIZE) && (col >= 0 && col < BOARD_SIZE))
}

function autoPlaceShips(board, units) {
    units.forEach((ship) => {
        let isFree;
        do {
            isFree = findFreePosition(board,ship)
        } while (!isFree)
        console.log(isFree)
        board.placeShip(ship,isFree.row,isFree.col)
        
    })
}

function onlyShipList(b) {
      const falttened_board = b.board.reduce((previousValue, currentValue) => previousValue.concat(currentValue))    
      const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
      return only_ship_list
}


// Helps finding free positions for the AI when autoplacing the ships
// TODO Make it work for vertical ships aswell

function findFreePosition(board,ship) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    const ship_placement = board.board[row].slice(col,(col+ship.length));
    if (ship_placement.every(({ship_type}) => ship_type === null)) {
        return {row,col}
    }
    return false;
}


export {Gameboard, validPosition, autoPlaceShips, onlyShipList}
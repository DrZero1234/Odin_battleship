import Ship from "./ship";

const Board = (board = [],MISSED_SHOTS = [],) => {
    const ship_types = ["Destroyer","Submarine","Battleship","Carrier"]
    const board_size = 10;
    for (let i = 0; i < board_size;i++) {
        const row = [];
        for (let j = 0; j < board_size;j++) {
            row.push({ship_length: null, ship_type: null, was_hit: false})
        }
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
        if (ship_placement.filter(e => e.ship_type !== null).length > 0) {
            throw new Error("Cant place ship there")
        }

        for (let deck of ship.decks) {
            board[row][col] = deck;
            col++;
        }
    }

    
    // Works only for horizontal ships
    function getFirstDeck(ship_name){
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

    function allShipSunk() {
        // Getting all the ship fields
        //main_arr.map((subarr) => subarr.filter((obj) => obj.ship_type != null))
    }




  

    return {
        MISSED_SHOTS,
        board,
        placeShip,
        getFirstDeck,
        receiveHit,
    }

}


module.exports = Board;
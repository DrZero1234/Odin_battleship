import Ship from "./ship";

const Board = () => {
    const board_size = 10;
    const board = [];
    for (let i = 0; i < board_size;i++) {
        const row = Array(board_size).fill({ship_length: null, ship_type: null, was_hit: false})
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

    return {
        board,
        placeShip
    }

}

module.exports = Board;
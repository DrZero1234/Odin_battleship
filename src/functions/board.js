import Ship from "./ship";

const Board = () => {
    const ship_types = ["Destroyer","Submarine","Battleship","Carrier"]
    const board_size = 10;
    const board = [];
    const MISSED_SHOTS = [];
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
        if (!board[row][col].ship_type) {
            MISSED_SHOTS.append([row][col])

        } else {
            const first_deck = getFirstDeck(board[row][col].ship_type)
            board[row][col].hit(col - first_deck)
        }
        board[row][col].was_hit = true;

    }




  

    return {
        board,
        placeShip,
        getFirstDeck,
        receiveHit,
    }

}


module.exports = Board;
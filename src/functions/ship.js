function Ship(length,ship_decks = Array(length).fill(" "),sunk=false) {

     const hit = (position) => {
        if (ship_decks[position] === " ") {
            ship_decks[position] = "hit"
        }
    }

    const isSunk = () => {
        return ship_decks.every((deck_status) => {
            deck_status === "hit"
        })
    }

    return {
            length,
            ship_decks,
            sunk,
            hit,
            isSunk
        }
}

module.exports = Ship
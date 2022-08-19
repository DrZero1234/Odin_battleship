function Ship(length,decks = Array(length).fill(" "),sunk=false) {
    if (length > 5 || length < 2) {
        throw new Error("The ship length is between 3-5")
    }

     const hit = (position) => {
        if (decks[position] === " ") {
            decks[position] = "hit"
            return
        }
        throw new Error("This place was already hit")
    }

    const isSunk = () => {
        return decks.every((deck_status) => {
            deck_status === "hit"
        })
    }

    return {
            length,
            decks,
            sunk,
            hit,
            isSunk
        }
}

module.exports = Ship
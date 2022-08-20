function Ship(length,sunk=false) {
    let ship_type;
    if (length > 5 || length < 2) {
        throw new Error("The ship length is between 3-5")
    }
    if (length === 2) {
        ship_type = "Destroyer";
    } else if (length === 3) {
        ship_type = "Submarine"
    } else if (length === 4) {
        ship_type = "Battleship"
    } else if (length === 5) {
        ship_type = "Carrier"
    }



    const  decks = []
    for (let i = 0;i < length;i++) {
        decks.push({ship_type: ship_type, ship_length: length, was_hit: false, hit})
    }

     const hit = (position) => {
        if (position > decks.length-1) {
            throw new Error("The ship does not have that much decks.")
        }

        else if (decks[position].ship_type != null && decks[position].was_hit === false) {
            decks[position].was_hit = true
        } else {
            throw new Error("This place was already hit")
        }
        return decks
        
    }

    const isSunk = () => {
        return decks.every((deck_status) => {
           return deck_status.was_hit === true
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
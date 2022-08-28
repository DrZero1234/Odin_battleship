function Ship(length) {
    let ship_type;

    switch(length){
        case 2:
            ship_type = "Destroyer";
            break;
        case 3:
            ship_type = "Submarine";
            break;
        case 4:
            ship_type = "Battleship";
            break;
        case 5:
            ship_type = "Carrier";
            break;

    }


    const decks = [];

    for (let i = 0;i < length;i++) {
        decks.push({ship_type,was_hit: null})
    }

    if (length > 5 || length < 2) {
        throw new Error("The ship length is between 3-5")
    }

     const hit = (position) => {
        if (!decks[position].was_hit) {
            decks[position].was_hit = true;
            return
        }
        throw new Error("This place was already hit")
    }

    const isSunk = () => {
        return decks.every((deck_status) => {
           return deck_status.was_hit === true
        })
    }

    return {
            length,
            decks,
            hit,
            isSunk
        }
}

export {Ship}
function Player(name) {
    let turn = true;
    function setName(n) {
        name = n;
    }

    function endTurn(player2) {
        if (turn) {
            turn = false;
            player2.startTurn();
        }
    }

    function startTurn() {
        if (!turn) {
            turn = true
        };
    }

    function checkTurn() {
        return turn;
    }

    return {
        name,
        turn,
        setName,
        startTurn,
        endTurn,
        checkTurn,
    }
}

export {Player}
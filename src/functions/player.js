function Player(player_name,player_turn = true) {
    return {
        name: player_name,
        turn: player_turn,
        setName: (new_name) => {
            if (player_name) {
                player_name = new_name
            }
            
        },
        startTurn: () => {
            if (!player_turn) {
                player_turn = true
            }
        },
        endTurn: (player2) => {
            if (player_turn) {
                player_turn = false;
                player2.startTurn();
            }
        },
        getTurn: ()=>  {
            return player_turn;
        }

    }
}

export {Player}
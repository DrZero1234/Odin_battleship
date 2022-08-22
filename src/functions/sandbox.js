let test_board = [
    [
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},

    ],
    [
        {ship_length: 3, ship_type: null, was_hit: false},
        {ship_length: 3, ship_type: null, was_hit: false},
        {ship_length: 3, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
    ],
    [
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: "Test", was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
        {ship_length: null, ship_type: null, was_hit: false},
    ]
]


function isAllSunk(board) {
    const falttened_board = board.reduce((previousValue, currentValue) =>previousValue.concat(currentValue))    
    const only_ship_list = falttened_board.filter(({ship_type}) => ship_type != null);
    return only_ship_list.every(({was_hit}) => was_hit)
}


const test_board_sunk = isAllSunk(test_board);

console.log(test_board_sunk)


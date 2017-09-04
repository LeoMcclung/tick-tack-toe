var arr = [ 'a', 'b', 'c' ];

// arr[0] = 'a'
// arr[1] = 'b'
// arr[2] = 'c'

var boardData = [
    [ 'A', 'B', 'C' ],
    [ 'D', 'E', 'F' ],
    [ 'G', 'H', 'I' ]
];

var row1  = boardData[0]     // this row is [ 'A', 'B', 'C' ]
var cell1 = boardData[0][0]; // This cell is 'A'
var cell2 = boardData[0][2]; // This cell is 'C'
var cell3 = boardData[1][1]; // This cell is 'E'
 
console.log(JSON.stringify(boardData, null, 2));

function clickCell(e) {
    var cellClicked = e.target;

    var x = cellClicked.getAttribute('x');
    var y = cellClicked.getAttribute('y');

    switch(boardData[x][y]){
        case 'x':
            boardData[x][y] = 'o';
            break;
        case 'o':
            boardData[x][y] = ' ';
            break;
        default:
            boardData[x][y] = 'x';
            break;
    }

    render()

    console.log('clicked', x, y);
}

function render() {
    var boardTable = document.getElementById('board');

    boardTable.innerHTML = '';

    for (var x = 0; x < 3; x++) {
        var row = document.createElement('tr');

        for (var y = 0; y < 3; y++) {
            var cell  = document.createElement('td');

            cell.innerText = boardData[x][y];

            cell.setAttribute('x', x);
            cell.setAttribute('y', y);

            row.appendChild(cell);

            cell.addEventListener('click', clickCell);
        }

        boardTable.appendChild(row);
    }
}

render();
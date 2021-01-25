let cells = document.querySelectorAll('.row > div');


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

// to alternate between x's and o's when clicked 
function cellClicked () {
    if (countCellClicks  % 2 == 0 ) {
        event.target.textContent = 'X'
    } else {
        event.target.textContent = "O"
    }
}
let cellsClicked = document.querySelector('#board');
let countCellClicks = 0;

cellsClicked.addEventListener("click", function() {
  countCellClicks += 1;
  console.log(countCellClicks);
});

//to refresh the page
if (countCellClicks > 9 ) {
    location.reload(true);
}



//Win Conditions
//top row win
if (cells[2].textContent == cells[0].textContent &&
cells[0].textContent == cells[1].textContent ) {
    alert(cells[1].textContent + "has won!")
}
//left diagonal win
if (cells[0].textContent == cells[4].textContent &&
    cells[4].textContent == cells[8].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//right diagonal win
if (cells[4].textContent == cells[4].textContent &&
    cells[4].textContent == cells[6].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//left row win
if (cells[0].textContent == cells[3].textContent &&
    cells[3].textContent == cells[6].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//bottom row win
if (cells[6].textContent == cells[7].textContent &&
    cells[7].textContent == cells[8].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//middle row win
if (cells[1].textContent == cells[4].textContent &&
    cells[4].textContent == cells[7].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//right row win
if (cells[2].textContent == cells[5].textContent &&
    cells[5].textContent == cells[8].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }
//center win
if (cells[3].textContent == cells[4].textContent &&
    cells[4].textContent == cells[5].textContent !== '') {
        alert(cells[1].textContent + "has won!")
    }

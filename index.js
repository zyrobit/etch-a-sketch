const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
    }
}

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = getRandomColor(); // Change color on hover
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
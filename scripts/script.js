function populateGrid(dimensions=16) {
  const gridContainer = document.querySelector(`.grid-container`);
  for(let i = 0; i < dimensions; i++) {
    let gridRow = document.createElement(`div`);
    gridRow.classList.add(`grid-row`);
    gridContainer.appendChild(gridRow);
    for( let j = 0; j < dimensions; j++) {
      let gridSquare = document.createElement(`div`);
      gridSquare.classList.add(`grid-square`);
      gridRow.appendChild(gridSquare);
    }
  }
  applyGridSquareListeners();
}

function changeGridDimensions(newDimensions){
  const gridContainer = document.querySelectorAll(`.grid-container > *`);
  gridContainer.forEach((Node) => {
    Node.remove();
  });
  populateGrid(newDimensions);
}

function applyGridSquareListeners() {
  const gridSquare = document.querySelectorAll(`.grid-square`);
  gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener(`mouseover`, () => {
      gridSquare.classList.add(`colored-grid-square`);
    });
  });
}

(function () {
  const changeDimensionsButton = document.querySelector(`.change-dimensions-button`);
  changeDimensionsButton.addEventListener(`click`, () => {
    let newDimensions = prompt(`Enter a number less than 100 to change the grid dimensions.`);
    changeGridDimensions(newDimensions);
  });
})();

populateGrid();
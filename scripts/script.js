( function () {
  const gridContainer = document.querySelector(`.grid-container`);
  for(let i = 0; i < 16; i++) {
    let gridRow = document.createElement(`div`);
    gridRow.classList.toggle(`grid-row`);
    gridContainer.appendChild(gridRow);
    for( let j = 0; j < 16; j++){
      let gridSquare = document.createElement(`div`);
      gridSquare.classList.toggle(`grid-square`);
      gridRow.appendChild(gridSquare)
    }
}
})();
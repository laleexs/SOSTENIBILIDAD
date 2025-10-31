const canvas2 = document.getElementById("canvas2"); //ejercicio 5
const ctx2 = canvas2.getContext("2d"); // ejercicio5

const CELL_SIZE2 = 8;
const COLS2 = Math.floor(canvas2.width / CELL_SIZE2);
const ROWS2 = Math.floor(canvas2.height / CELL_SIZE2);

// Crea una cuadrícula vacía (0 = muerta, 1 = viva)
function createGrid2(rows2, cols2, fill = false) {
  const g = new Array(rows2);
  for (let r = 0; r < rows2; r++) {
    g[r] = new Array(cols2).fill(fill ? 1 : 0);
  }
  return g;
}

let grid2 = createGrid2(ROWS2, COLS2, false);


function draw2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  // Celdas vivas
  for (let r = 0; r < ROWS2; r++) {
    for (let c = 0; c < COLS2; c++) {
      if (grid2[r][c]) {
        ctx2.fillRect(c * CELL_SIZE2, r * CELL_SIZE2, CELL_SIZE2, CELL_SIZE2);
      }
    }
  }
}
draw2();

// Insertar un blinker 
function setBlinker(r, c) {
  grid2[r][c - 1] = 1;
  grid2[r][c] = 1;
  grid2[r][c + 1] = 1;
}
setBlinker(Math.floor(ROWS2 / 2), Math.floor(COLS2 / 2));

setBlinker(10, 10);


//  Toad (6 celdas)
function setToad(r, c) {
  grid2[r][c - 1] = 1;
  grid2[r][c] = 1;
  grid2[r][c + 1] = 1;
  grid2[r - 1][c] = 1;
  grid2[r - 1][c + 1] = 1;
  grid2[r - 1][c + 2] = 1;
}

setToad(40,40);


 // Insertar un glider
 function setGlider(r, c) {
 grid2[r][c] = 1;
 grid2[r][c+1] = 1;
 grid2[r][c+2] = 1;
 grid2[r-1][c+2] = 1;
 grid2[r-2][c+1] = 1;
 }
 setGlider(60,50);

 draw2();


 

 
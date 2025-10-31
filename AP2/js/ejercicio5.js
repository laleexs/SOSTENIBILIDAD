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

function randomize2(p = 0.2) {
  for (let r = 0; r < ROWS2; r++) {
    for (let c = 0; c < COLS2; c++) {
      grid2[r][c] = Math.random() < p ? 1 : 0;
    }
  }
}
randomize2(0.1); // 20% vivas

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

function neighbors2(r, c) {
  let n = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const rr = (r + dr + ROWS2) % ROWS2;
      const cc = (c + dc + COLS2) % COLS2;
      n += grid2[rr][cc];
    }
  }
  return n;
}
function step2() {
  const next = createGrid2(ROWS2, COLS2, false);
  for (let r = 0; r < ROWS2; r++) {
    for (let c = 0; c < COLS2; c++) {
      const alive = grid2[r][c] === 1;
      const n = neighbors2(r, c);
      next[r][c] =
        (alive && (n === 2 || n === 3)) || (!alive && n === 3) ? 1 : 0;
    }
  }
  grid2 = next;
  draw2();
}

step2(); // prueba una generación

let running2 = true;
function loop2() {
  if (running2) {
    step2();
  }
  requestAnimationFrame(loop2);
}
loop2();
// (Espacio) para pausar/reanudar
/*
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    running2 = !running2;
    e.preventDefault();
  }
});
*/


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
draw2();

 // Insertar un glider
 function setGlider(r, c) {
 grid2[r][c] = 1;
 grid2[r][c+1] = 1;
 grid2[r][c+2] = 1;
 grid2[r-1][c+2] = 1;
 grid2[r-2][c+1] = 1;
 }
 setGlider(60,50);

 

 
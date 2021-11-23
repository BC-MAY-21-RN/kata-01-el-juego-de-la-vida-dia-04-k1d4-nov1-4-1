class Celula {
  constructor(life, neighbors) {
      this.life = life;
      this.neighbors = neighbors;
  }
  // CONDICIONES PARA LA CELULA
  // 1 = VIVO    0 = MUERTO
  getLife() {
      return this.life;
  }

  setLife(life){
      this.life=life;
  }

  setNeighbors(Neighbors) {
      this.neighbors = Neighbors;
  }

  toString() {
      if (this.life == 0) {
          return '.';
      } else {
          return '*';
      }
  }

  getNeighbors() {
      return this.neighbors;
  }

};


let rows = 4, columns = 8;
var resultArrayCell = '';
// var resutNewArray = '';
var newArray;
var cell;
let arrayCells;
// let loopControler=0;

 function getRows(){
    return rows;
}

function getColumns(){
    return columns;
}

function getArrayCell(){
    return resultArrayCell;
}
function getNewArray(){
    return newArray;
}

function play(){
    var resultGame = playGame();
    let numberOfGenerations = 5;
    for(let i = 0; i < numberOfGenerations; i++ ){
        console.log("generacion:" + (i+1));
        iteration(arrayCells)
        let showRes = showResult(newArray);
        console.log(showRes);
        arrayCells = newArray;
    }
}

function playGame(){
    resultArrayCell = '';
    createArrayCell();
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            var ramdomGame = Math.random();
            arrayCells[x][y] = checkramdomGame( ramdomGame, arrayCells[x][y]);
            resultArrayCell+= arrayCells[x][y].toString();
        }
        resultArrayCell += '\n';
    }
    newArray=arrayCells;
    return resultArrayCell;
}

function createArrayCell(){
    arrayCells = new Array(rows);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(columns);
    }
} 

function checkramdomGame(ramdomGame, arrayCells){
    if (ramdomGame >= 0.5) { 
        arrayCells = new Celula(0, 0);
    } 
    else { 
        arrayCells =  new Celula(1, 0);   
    }
    return arrayCells;
}

function iteration(EstatusCells){
    for (var x = 0; x < EstatusCells.length; x++) {
        for (var y = 0; y < EstatusCells[x].length; y++) {
            let neighbors = 0;
            neighbors = countNeighborsAround(EstatusCells, neighbors, x, y)            
            EstatusCells[x][y].setNeighbors(neighbors);
            rulesCell(EstatusCells[x][y],x,y);
        }
    }
}

function countNeighborsAround(EstatusCells, neighbors, x, y){
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            try { 
                neighbors = cheackIfNeighborIsLife(EstatusCells[x + i][y + j], EstatusCells[x][y], neighbors)                   
            } catch (e) {
                
            }
        }
    }
    return neighbors;
}

function cheackIfNeighborIsLife(EstatusCellsAround, EstatusCellsSimple, neighbors){
    if (EstatusCellsAround.getLife() == 1) {
        if(EstatusCellsSimple.getLife() == 1 && i==0 && j==0){
            console.log('se conto solo');
        }else{
            neighbors++;
        }
    }
    return neighbors;
} 

function rulesCell(cell,rows,columns) {    
    if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
        newArray[rows][columns].setLife(0);         // Soledad
    } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
        newArray[rows][columns].setLife(0);         // Sobrepoblación
    } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
        newArray[rows][columns].setLife(1);         // d
    } else {
        newArray[rows][columns] = cell;
    }
}

function showResult(array){
    resultNewArray = '';
    for ( i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length;  j++) {
            resultNewArray += arrayCells[i][j].toString();
        }
        resultNewArray += '\n';
    }
    return resultNewArray;
}


play();
let newcell = new Celula(0, 4);


module.exports = {
    newcell,
    playGame,
    iteration,
    rulesCell,
    showResult,
    getRows,
    getColumns,
    getArrayCell,
    getNewArray,
    checkramdomGame,
}
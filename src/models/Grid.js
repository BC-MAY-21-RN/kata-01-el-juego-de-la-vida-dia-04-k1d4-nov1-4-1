"use strict";
const Cell = require("./Cell");

module.exports = class Grid {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    this.celula = new Cell();
    this.vivas = 0;
  }

  createArray() {
    for (let fila = 0; fila < this.rows; fila++) {
      this.grid.push([]);
      for (let col = 0; col < this.columns; col++) {
        this.grid[fila][col] = this.celula.createCells();
      }
    }
  }

  newGrid() {//Genera nuevo grid donde compara celulas y genera la nueva generación
    for (let fila = 0; fila < this.rows; fila++) {
      for (let col = 0; col < this.columns; col++) {
        
        if (fila == 0) {
          //Primera fila
          if (col == 0) {
            //Primera ESQUINA SUPERIOR izquierda LISTO
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;
          } else if (
            col >= this.columns - (this.columns-1) &&
            col < (this.columns - 1)
          ) {
            //(VERTICALES DEL MEDIO))
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;
          } //ESQUINA SUPERIOR DERECHA LISTO
          else {
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;
          }
        } 
        
        
        else if (
          fila >= this.rows - (this.rows - 1) &&
          fila < (this.rows - 1)
        ) {
          if (col == 0) {
            //Primera columna (VERTICAL 0)
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
            this.grid[fila - 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;

          } else if (col >= this.columns - (this.columns-1) && col <= (this.columns - 2)
          ) {
            //(VERTICALES DEL MEDIO))
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
            this.grid[fila - 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;
            this.grid[fila + 1][col + 1] == "." ? null : this.vivas++;
          } //ultima columnna (VERTICAL 7)
          else {
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
            this.grid[fila - 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila + 1][col] == "." ? null : this.vivas++;
          }
        }

        //Ultima fila del array (ESQUINA INFERIOR IZQUIERDA)
        else {
          if (col == 0) {
            //Primera ESQUINA INFERIOR IZQUIERDA LISTO
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
          } else if (
            col >= this.columns - (this.columns - 1) &&
            col < this.columns - 1
          ) {
            //(VERTICALES DEL MEDIO))
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila][col + 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col + 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
          } //ESQUINA INFERIOR DERECHA LISTO
          else {
            this.grid[fila][col - 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col - 1] == "." ? null : this.vivas++;
            this.grid[fila - 1][col] == "." ? null : this.vivas++;
          }
        }
        this.grid[fila][col] = this.celula.newGeneration(
          this.vivas,
          this.grid[fila][col]
        );
        this.vivas=0;
      }
      
    }

    return this.grid;
  }

  printGrid() {
    console.table(this.grid);
  }
};

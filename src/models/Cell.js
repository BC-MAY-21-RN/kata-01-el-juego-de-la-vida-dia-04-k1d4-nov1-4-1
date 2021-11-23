"use strict";

const object = require("../states");
const { ALIVE, DEAD } = object;

module.exports = class Cell {
  constructor() {
    this.ALIVE = ALIVE;
    this.DEAD = DEAD;
    this.NumLifeCells = 0;
  }

  createCells() {
    //Randomizamos las celulas vivas y muertas
    let porcentaje = Math.floor(Math.random() * 10) + 1;
    //Si el porcentaje es de 1 a 6 la celula estara muerta ".", si es de 7 a 10 estara viva "O"
    if (porcentaje >= 1 && porcentaje <= 6) {
      // "." -> muertos 60%
      // "O" -> vivos   40%
      return this.DEAD;
    } else {
      return this.ALIVE;
    }
  }

  newGeneration(NumLifeCells, celula) {
    if(celula == "O" && NumLifeCells < 2 ){
      return DEAD
    }else if(celula == "O" && NumLifeCells > 3){
      return DEAD
    }else if(celula == "O" && (NumLifeCells == 2 || NumLifeCells == 3)){
      return ALIVE
    }else if(celula == "." && NumLifeCells == 3){
      return ALIVE
    }else if(celula == "." && NumLifeCells != 3){
      return DEAD
    }
  }
};
//CICLO INFINITO
//for (var i = 0; i < Infinity; i++) {}
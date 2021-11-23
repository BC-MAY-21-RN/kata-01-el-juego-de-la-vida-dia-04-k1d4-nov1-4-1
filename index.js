'use strict';
/*
  Co-authored-by: HugoCamposLopez <hugo.antonio.campos@gmail.com>
  Co-authored-by: Javier-Barreto <javierbarretocp@gmail.com>
  Co-authored-by: dylanson25 <dvillarreal0@ucol.mx>
  Co-authored-by: AangelF <Aangel.Flores.R@gmail.com>
*/

const Grid = require("./src/models/Grid");

const grid = new Grid(4, 8);//Filas, columnas

grid.createArray();
grid.printGrid();
grid.newGrid();
grid.printGrid();

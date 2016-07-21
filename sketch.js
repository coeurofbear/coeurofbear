//2016 07 20 wednesday
//variables
//debemos declararlas
//DECLARAR
var diametro;
//ASIGNAR
diametro = 50;
//variables locales y globales
//GLOBALES: fuera de una funcion
//LOCALES: dentro de una funcion

function nombreFuncion(){
  
}

function setup() {
  createCanvas(800,600);
  background(200,200,200);
}

function draw() {
  estiloE1();
  //posX posY width height 
  ellipse(mouseX,mouseY,diametro,diametro);
  
  diametro = diametro + 1;
}

//Declaracion de funcion de estilo de elipse
function estiloE1(){
    //var local
  var anchoBorde = 10;
  //background
  //background(0,255,0);
  //tamaño borde
  strokeWeight(anchoBorde);
  //color stroke
  stroke(210,0,100);
  //relleno
  fill(0,68,42);
}

//Declaracion de funcion de estilo de elipse
function estiloE1(){
    //var local
  var anchoBorde = 1;
  //background
  //background(0,255,0);
  //tamaño borde
  strokeWeight(anchoBorde);
  //color stroke
  stroke(20,200,160);
  //relleno
  fill(0,68,42);
}














var vp=document.getElementById("villaplatzi");
var papel=vp.getContext("2d");

var vaca=
{
url:"vaca.png",
cargaOK: false
};
var fondo=
{
url:"tile.png",
cargaOK: false
};
var pollo=
{
url:"pollo.png",
cargaOK: false
};

fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

function cargarFondo(){
  fondo.cargaOK=true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOK=true;
  dibujar();
}
function cargarPollos(){
  pollo.cargaOK=true;
  dibujar();
}
function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen,0,0);
   }
if(vaca.cargaOK){
for(var v=0;v<10;v++){
  var x=aleatorio(0,420);
  var y=aleatorio(0,420);
  papel.drawImage(vaca.imagen,x,y);
}
}
if(pollo.cargaOK){
  papel.drawImage(pollo.imagen,0,0);
}



}


function aleatorio(min,maxi)
{
  var resultado;
  resultado=Math.floor(Math.random()*(maxi-min+1))+min;
  return resultado;
}

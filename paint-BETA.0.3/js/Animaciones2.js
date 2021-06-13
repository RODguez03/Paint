
 let select = document.getElementById('select'),
    posx= document.getElementById('ValorX'),
    posy= document.getElementById('ValorY'),
    figura=document.getElementById('figura')
let posIniyX=(canvas.width/5);
let posIniyY= (canvas.height/5);

btnAnimacion.addEventListener('click',slowMotion)
//Animaciones 

function seleccion(){
    let select = document.getElementById('select');
    let valor = select.value;

    if (valor == 'value 1'){
        document.getElementById("ValorX").style.backgroundColor = 'rgb(116, 139, 141)';
        document.getElementById("ValorY").style.backgroundColor = 'rgb(116, 139, 141)';
        }

    if (valor == 'value 2'){
        alert ("Traslacion X: esta animacion activa la casilla de texto de X, y mueve la figura horizontalmente segun el valor escrito");
        document.getElementById("ValorX").style.backgroundColor = 'white';
        document.getElementById("ValorY").style.backgroundColor = 'rgb(116, 139, 141)';
        }

    if (valor == 'value 5'){
        alert ("Traslacion Y: esta animacion activa la casilla de texto de Y, y mueve la figura verticalmente segun el valor escrito");
        document.getElementById("ValorX").style.backgroundColor = 'rgb(116, 139, 141)';
        document.getElementById("ValorY").style.backgroundColor = 'white';
        }

    if (valor == 'value 3'){
        alert ("Escalamiento Uniforme: esta animacion activa la casilla de texto de X"+ 
        ", y redimensiona uniformemente el tamaño de la figura respecto al valor escrito de X");
        document.getElementById("ValorX").style.backgroundColor = 'white';
        document.getElementById("ValorY").style.backgroundColor = 'rgb(116, 139, 141)';
        }

    if (valor == 'value 4'){
        alert ("Escalamiento Diferencial: esta animacion activa ambas casillas de texto "+ 
        ", y redimensiona el tamaño de la figura respecto a los valores escritos de X y Y ");
        document.getElementById("ValorX").style.backgroundColor = 'white';
        document.getElementById("ValorY").style.backgroundColor = 'white';
    }
}


function slowMotion(){
    //traslacion
    
    if (select.value=='value 2'){
    setTimeout(function(){
        cxt.translate(0, 0);
        posIniyX+=1
        cleanCanvas()
        //dubujando figura
        //rectangulo
        if (figura.value=='value 2'){
        poligono(10,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        //circulo
        if (figura.value=='value 3'){
            poligono(11,posIniyX,posIniyY,posIniyX+30,posIniyY+30) }
        if (figura.value=='value 4'){
            poligono(13,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 5'){
            poligono(14,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 6'){
            poligono(4,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 7'){
            poligono(5,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 8'){
                poligono(6,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (posIniyX <= posx.value) {
        slowMotion();}else {
            posIniyX=30
        }
    }, 1)
    }
    //escalamiento uniforme
    if (select.value=='value 3'){
        cleanCanvas()
        if (figura.value=='value 2'){
            ancho=80*posx.value,alto=80*posx.value;
        poligono(10,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)} 
        if (figura.value=='value 3'){
            ancho=30*posx.value, alto=30*posx.value;
            poligono(11,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)}
        if (figura.value=='value 4'){
            ancho=80*posx.value,alto=80*posx.value;
            poligono(13,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)}  
        if (figura.value=='value 5'){
            ancho=80*posx.value,alto=80*posx.value;
            poligono(14,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto) }
        if (figura.value=='value 6'){
            ancho=80*posx.value,alto=80*posx.value;
            poligono(4,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto) }
        if (figura.value=='value 7'){
            ancho=80*posx.value,alto=80*posx.value;
            poligono(5,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto) } 
        if (figura.value=='value 8'){
            ancho=80*posx.value,alto=80*posx.value;
            poligono(6,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto) }
    }
    //escalamiento diferencial
    if (select.value=='value 4'){
        //formula 
        ancho=80*posx.value,alto=80*posy.value;
        cleanCanvas()
        if (figura.value=='value 2'){
        poligono(10,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto) } 
        if (figura.value=='value 3'){
            ancho=30*posx.value,alto=30*posy.value;
            poligono(11,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)} 
        if (figura.value=='value 4'){
            ancho=80*posx.value, alto=80*posy.value;
            poligono(13,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)} 
        if (figura.value=='value 5'){
            ancho=80*posx.value, alto=80*posy.value;
            poligono(14,posIniyX,posIniyY,posIniyX+ancho,posIniyY+alto)}
        if (figura.value=='value 6'){
            ancho=80*posx.value, alto=80*posy.value;
            poligono(4,posIniyX,posIniyY,ancho,alto)} 
        if (figura.value=='value 7'){
            ancho=80*posx.value, alto=80*posy.value;
            poligono(5,posIniyX,posIniyY,ancho,alto)} 
        if (figura.value=='value 8'){
            ancho=80*posx.value, alto=80*posy.value;
            poligono(6,posIniyX,posIniyY,ancho,alto)} 
    }
    //Traslacion en Y
    if (select.value=='value 5'){
    setTimeout(function(){
        cxt.translate(0, 0);
        posIniyY+=1
        cleanCanvas()
        //dubujando figura
        //rectangulo
        if (figura.value=='value 2'){
        poligono(10,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        //circulo
        if (figura.value=='value 3'){
            poligono(11,posIniyX,posIniyY,posIniyX+30,posIniyY+30) }
        if (figura.value=='value 4'){
            poligono(13,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 5'){
            poligono(14,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 6'){
            poligono(4,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 7'){
            poligono(5,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (figura.value=='value 8'){
            poligono(6,posIniyX,posIniyY,posIniyX+80,posIniyY+80) }
        if (posIniyY <= posy.value) {
        slowMotion();}else {
            posIniyY=30
        }
    }, 1)
    }
    }



function cleanCanvas(){
    cxt.clearRect(0,0,canvas.width,canvas.height)
}


// Dibujo de figuras
function myFunction2(opcion){
    if (figura.value=="value 1"){
        cleanCanvas() 
    }
    if (figura.value=="value 2"){
        cleanCanvas()
    poligono(10,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
    if (figura.value=="value 3"){
        cleanCanvas()
    poligono(11,posIniyX,posIniyY,posIniyX+30,posIniyY+30) 
    }
    if (figura.value=="value 4"){
        cleanCanvas()
    poligono(13,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
    if(figura.value=="value 5"){
        cleanCanvas()
        poligono(14,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
    if(figura.value=="value 6"){
        cleanCanvas()
        poligono(4,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
    if(figura.value=="value 7"){
        cleanCanvas()
        poligono(5,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
    if(figura.value=="value 8"){
        cleanCanvas()
        poligono(6,posIniyX,posIniyY,posIniyX+80,posIniyY+80) 
    }
}


//muestra de incercion de valores
function myFunction(opcion){
    cleanCanvas()
    opc=opcion.value
if (opcion.value == "value 2"||opcion.value == "value 3"){
    var e = document.getElementById("ValorY")
    e.disabled = "TRUE"
    var d = document.getElementById("ValorX")
    d.disabled = ""
    d.placeholder= "ej. 1 - 600" 
    if (opcion.value == "value 3"){
        d.placeholder= "ej. 1 - 5"  
    }
    var e = document.getElementById("ValorY")
    e.placeholder= ""
}
if (opcion.value == "value 4"){
    var d = document.getElementById("ValorX")
    d.disabled = ""
    d.placeholder= "ej. 1 - 5"
    var e = document.getElementById("ValorY")
    e.disabled = ""
    e.placeholder= "ej. 1 - 5"
} 
if (opcion.value == "Value 1"){
    var d = document.getElementById("ValorX")
    d.placeholder= ""
    d.disabled = "true"
    var e = document.getElementById("ValorY")
    e.disabled = "true"
    e.placeholder= ""
}
if (opcion.value == "value 5"){
    var d = document.getElementById("ValorX")
    d.disabled = "TRUE"
    d.placeholder= ""
    var e = document.getElementById("ValorY")
    e.disabled = ""
    e.placeholder=  "ej. 1 - 600" 
} 
 }
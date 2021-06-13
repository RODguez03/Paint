let canvas = document.getElementById('canvas'),
    cxt=canvas.getContext('2d'),
    checkBox= document.getElementById("Relleno"),
    rect=canvas.getBoundingClientRect();

 let dibujando=false,color='black', grosor=1;
    //validacion del color
    function defcolor(c){
        color=c;}
    //validacion del grosor 
    function defgrosor(g){
        grosor=g;}

    //botones 

    (function(){
        var contador = 0;
        var conteo = function(){
            contador++;
            console.log(contador);
            if (contador===70){
                clearInterval(intervalo);
            }
            if(contador===1){
                alert ("Bienvenido al tutorial de DRAWING CANVAS, aqui se te explicaran las funcionalidades del juego, diviertete!");
            }

            //paleta de colores
            if(contador===2){
                document.getElementById("colorsito").style.width = "62%";
                document.getElementById("colorsito").style.height = "38px";
                document.getElementById("colorsito").style.backgroundColor = "dimgray";
            }
            if(contador===3){
                alert ("PALETA DE COLORES, en este apartado puedes elegir el color que usaras para dibujar, solo presiona y elige un color");
                document.getElementById("colorsito").style.width = "60%";
                document.getElementById("colorsito").style.height = "35px";
                document.getElementById("colorsito").style.backgroundColor = "rgb(127, 180, 241)";
            }

            //grosor
            if(contador===4){
                document.getElementById("grosor").style.width = "80%";
            }
            if(contador===5){
                alert ("GROSOR, con este deslizador selecciona el grosor de tu linea de dibujo");
                document.getElementById("grosor").style.width = "60%";
            }
            

            //dibujo a mano alzada
            if(contador===6){
                document.getElementById("btnDibujo").style.width = "40px";
                document.getElementById("btnDibujo").style.height = "40px";
                document.getElementById("btnDibujo").style.backgroundColor = "dimgray";
            }
            if(contador===7){
                alert ("HERRAMIENTAS, DIBUJO A MANO ALZADA o LAPIZ, haz click arrastra y sueltal ");
                dibujar();
            }
            if(contador===12){
                document.getElementById("btnDibujo").style.width = "35px";
                document.getElementById("btnDibujo").style.height = "35px";
                document.getElementById("btnDibujo").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de lineas
            if(contador===13){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnLinea").style.width = "40px";
                document.getElementById("btnLinea").style.height = "40px";
                document.getElementById("btnLinea").style.backgroundColor = "dimgray";
            }
            if(contador===14){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, LINEAS, haz click arrastra y suelta, se dibujara una linea de inicio a fin ");
                Linea();
            }
            if(contador===19){
                document.getElementById("btnLinea").style.width = "35px";
                document.getElementById("btnLinea").style.height = "35px";
                document.getElementById("btnLinea").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de rectangulos
            if(contador===20){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnRectangulo").style.width = "40px";
                document.getElementById("btnRectangulo").style.height = "40px";
                document.getElementById("btnRectangulo").style.backgroundColor = "dimgray";
            }
            if(contador===21){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, RECTANGULOS Y CUADRADOS, haz click arrastra en diagonal hacia abajo y suelta ");
                rectangulo(); 
            }
            if(contador===26){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnRectangulo").style.width = "35px";
                document.getElementById("btnRectangulo").style.height = "35px";
                document.getElementById("btnRectangulo").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de circulos
            if(contador===27){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnCirculo").style.width = "40px";
                document.getElementById("btnCirculo").style.height = "40px";
                document.getElementById("btnCirculo").style.backgroundColor = "dimgray";
            }
            if(contador===28){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, CIRCULOS, haz click arrasta en horizontal y suelta ");
                circulo();
            }  
            if(contador===33){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnCirculo").style.width = "35px";
                document.getElementById("btnCirculo").style.height = "35px";
                document.getElementById("btnCirculo").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de triangulo equilatero
            if(contador===34){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnTrianguloEqulilatero").style.width = "40px";
                document.getElementById("btnTrianguloEqulilatero").style.height = "40px";
                document.getElementById("btnTrianguloEqulilatero").style.backgroundColor = "dimgray";
            }
            if(contador===35){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, TRIANGULOS EQUILATEROS, haz click arrastra en diagonal hacia abajo y suelta ");
                TrianguloEqulilatero(); 
            }
            if(contador===40){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnTrianguloEqulilatero").style.width = "35px";
                document.getElementById("btnTrianguloEqulilatero").style.height = "35px";
                document.getElementById("btnTrianguloEqulilatero").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de triangulo rectangulo
            if(contador===41){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnTrianguloRectangulo").style.width = "40px";
                document.getElementById("btnTrianguloRectangulo").style.height = "40px";
                document.getElementById("btnTrianguloRectangulo").style.backgroundColor = "dimgray";
            }
            if(contador===42){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, TRIANGULOS RECTANGULOS, haz click arrastra en diagonal hacia abajo y suelta ");
                TrianguloRectangulo();
            }
            if(contador===47){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnTrianguloRectangulo").style.width = "35px";
                document.getElementById("btnTrianguloRectangulo").style.height = "35px";
                document.getElementById("btnTrianguloRectangulo").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de rombos
            if(contador===48){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnRombo").style.width = "40px";
                document.getElementById("btnRombo").style.height = "40px";
                document.getElementById("btnRombo").style.backgroundColor = "dimgray";
            }
            if(contador===49){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, ROMBOS, haz click arrasta en horizontal y suelta ");
                Rombo();
            }
            if(contador===54){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnRombo").style.width = "35px";
                document.getElementById("btnRombo").style.height = "35px";
                document.getElementById("btnRombo").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de pentangono
            if(contador===55){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnPentagono").style.width = "40px";
                document.getElementById("btnPentagono").style.height = "40px";
                document.getElementById("btnPentagono").style.backgroundColor = "dimgray";
            }
            if(contador===56){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, PENTAGONOS, haz click arrasta en horizontal y suelta ");
                Pentagono();
            }
            if(contador===61){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnPentagono").style.width = "35px";
                document.getElementById("btnPentagono").style.height = "35px";
                document.getElementById("btnPentagono").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }


            //dibujo de hexangono
            if(contador===62){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnHexagono").style.width = "40px";
                document.getElementById("btnHexagono").style.height = "40px";
                document.getElementById("btnHexagono").style.backgroundColor = "dimgray";
            }
            if(contador===63){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("HERRAMIENTAS, HEXAGONOS, haz click arrasta en horizontal y suelta ");
                Hexagono();
            }
            if(contador===68){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                document.getElementById("btnHexagono").style.width = "35px";
                document.getElementById("btnHexagono").style.height = "35px";
                document.getElementById("btnHexagono").style.backgroundColor = '#59B0E5';
                cxt.clearRect(0,0,canvas.width,canvas.height)
            }
            if(contador===69){
                cxt.clearRect(0,0,canvas.width,canvas.height)
                alert ("ANIMACIONES, este apartado cuenta con dos listas, " 
                +"animacion: en esta lista seleccionas la animacion que deseas realizar a una figura, "
                +"figura: en esta lista seleccionas la figura que animaras");
            }
            


        };
        var intervalo = setInterval(conteo,2000);
        
        

        
    }())

    

        //boton limpiar 
    btnLimpiar.addEventListener('click', function(){
        cxt.clearRect(0,0,canvas.width,canvas.height)
        }) 
    
  


         

       //metodos
    
    // bubujo a mano alzada 
    function dibujar(){
        
        n=16
        //punto de inicio
        canvas.addEventListener('mousedown', function(e){
            x=e.clientX - rect.left;
            y=e.clientY - rect.top;
            dibujando=true;
        });
        // movimiento 
        canvas.addEventListener('mousemove',function(e){
        if(dibujando===true){
            if(n==16){
            poligono(15,x,y,e.clientX - rect.left,e.clientY - rect.top)
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;}
        }
        });
        //punto final
        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            if(n==16){
            poligono(15,x,y,e.clientX - rect.left,e.clientY - rect.top)
            dibujando=false;}
        }
        })

        }

     // bubujo de rectangulo 
    function rectangulo(){
        // numero figura
        n = 10;
        dibujando=false;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        });
    
        canvas.addEventListener('mouseup',function(e){
        //if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
        }) 
        }

    // bidujo circulo 
    function circulo(){
        n = 11;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }})
        }
        
    // bidujo Linea 
    function Linea(){
        n = 12;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }})
        }

    // bidujo Triangulo Equlilatero
    function TrianguloEqulilatero(){
        n = 13;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }}) 
        }

    // bidujo Triangulo 
    function TrianguloRectangulo(){
        n = 14;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }}) 
        }
        
    // bidujo rombo 
    function Rombo(){
        // numero de lados
        n = 4;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }})
        }
            
    // bidujo Pentagono 
    function Pentagono(){
        // numero de lados
        n = 5;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });

        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }})
        }

    // bidujo Hexagono 
    function Hexagono(){
        // numero de lados
        n = 6;
        canvas.addEventListener('mousedown', function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        dibujando=true;
        });
    
        canvas.addEventListener('mouseup',function(e){
        if(dibujando===true){
            x1=e.clientX-rect.left;
            y1=e.clientY-rect.top;
            poligono(n,x,y,x1,y1)
            dibujando=false;
        }}) 
        }
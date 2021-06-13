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

    //boton limpiar 
    btnLimpiar.addEventListener('click', function(){
        cxt.clearRect(0,0,canvas.width,canvas.height)
        }) 
    
        //boton de rectangulo
    btnRectangulo.addEventListener('click', function(){
        rectangulo();  
        })
            
    //boton de Circulo
    btnCirculo.addEventListener('click', function(){
        circulo();  
        })
    //boton de Linea
    btnLinea.addEventListener('click', function(){
        Linea();  
        })

    //boton de Triangulo Equlilatero
    btnTrianguloEqulilatero.addEventListener('click', function(){
        TrianguloEqulilatero();  
        })

    //boton de Triangulo 
    btnTrianguloRectangulo.addEventListener('click', function(){
        TrianguloRectangulo();  
        })  

    //boton de rombo
    btnRombo.addEventListener('click', function(){
        Rombo();  
        })

    //boton de Pentagono
    btnPentagono.addEventListener('click', function(){
        Pentagono();  
        })

    //boton de hexagono
    btnHexagono.addEventListener('click', function(){
        Hexagono();  
        })


         //boton de mano alzada
    btnDibujo.addEventListener('click', function(){
        dibujar();  
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
var canvas = document.getElementById('canvas');
var cxt=canvas.getContext('2d');
var checkBox= document.getElementById("Relleno")
 rect=canvas.getBoundingClientRect();


  var// 
  dibujando=false,color='black', grosor=1;
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
            
            //boton de mano alzada
            btnDibujo.addEventListener('click', function(){
                dibujar() 
            })   
            
            //boton de Linea
            btnLinea.addEventListener('click', function(){
                lineas(); 
            })
            

               //boton de rectangulo
            btnRectangulo.addEventListener('click', function(){
                rectangulo();  
                })
                    
  
            //boton de Circulo
            btnCirculo.addEventListener('click', function(){
                circulo();  
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

            //boton de Heptagono
            btnHeptagono.addEventListener('click', function(){
                Heptagono();  
                })
      


    //metodos
        // bubujo a mano alzada 
        function dibujar(){
            //punto de inicio
            canvas.addEventListener('mousedown', function(e){
                x=e.clientX - rect.left;
                y=e.clientY - rect.top;
                dibujando=true;
                console.log("click"+dibujando);

                
            });
            // movimiento 
            canvas.addEventListener('mousemove',function(e){
                if(dibujando===true){
                    dibujar(x , y,e.clientX - rect.left,e.clientY - rect.top);
                    //marca1
                    x = e.clientX - rect.left;
                    y = e.clientY - rect.top;
                    console.log("mueve"+dibujando);

                }
            });
            //punto final
            canvas.addEventListener('mouseup',function(e){
                //marca2
                if(dibujando===true){
                    dibujar(x , y,e.clientX - rect.left,e.clientY - rect.top);
                    x = 0;
                    y = 0;
                    dibujando=false;
                    console.log("suelta"+dibujando);

                }
        })
            //funcion dibujo
            function dibujar(x1,y1,x2,y2){
                cxt.beginPath();
                cxt.strokeStyle=color;
                cxt.lineWidth=grosor;
                cxt.moveTo(x1,y1);
                cxt.lineTo(x2,y2);
                cxt.stroke();
                cxt.closePath();
                }

        }


      
            
        // dibujo Linea 
        function lineas(){
            console.log("linea");
           canvas.addEventListener('mousedown', function(e){
               x=e.clientX-rect.left;
               y=e.clientY-rect.top;
               console.log(x,y)
               dibujando=true;
               console.log("click2"+dibujando);

           });
           
           canvas.addEventListener('mouseup',function(e){
               if(dibujando===true){
                   //final
                   x1=e.clientX-rect.left;
                   y1=e.clientY-rect.top;
                   console.log(x1,y1)
                   lineas(x,y,x1,y1)
            
                   dibujando=false;
                   console.log("suelta2"+dibujando);

               }})
           
           function lineas(x,y,x1,y1){
               cxt.beginPath();
               cxt.strokeStyle = color;
               cxt.lineWidth = grosor;

               //inicio
               cxt.moveTo(x,y);
               //final
               cxt.lineTo(x1,y1);
               cxt.stroke();
               cxt.closePath();
           }
        }

         

         // bubujo de rectangulo 
    function rectangulo(){

        canvas.addEventListener('mousedown', function(e){
            x=e.clientX-rect.left;
            y=e.clientY-rect.top;
            console.log(x,y)
            dibujando=true;
        });
        
        canvas.addEventListener('mouseup',function(e){
            if(dibujando===true){
                x1=e.clientX- rect.left
                y1=e.clientY-rect.top;
                console.log(x1, y1)
                rectangulo1(x,y,x1-x,y1-y);
                x = 0;
                y = 0;
                dibujando=false;
            }
        })}

        function rectangulo1(x1,y1,x2,y2){
            cxt.lineWidth = grosor
            cxt.strokeStyle= color
            if(checkBox.checked == true){
                cxt.fillStyle= color
                cxt.fillRect(x1,y1,x2,y2)  
            }
            cxt.strokeRect (x1,y1,x2,y2)
        }
        // bidujo circulo 
        function circulo(){

            canvas.addEventListener('mousedown', function(e){
                x=e.clientX-rect.left;
                y=e.clientY-rect.top;
                console.log(x,y)
                dibujando=true;
            });
            
            canvas.addEventListener('mouseup',function(e){
                if(dibujando===true){
                    x1=e.clientX-rect.left;
                    r1= x1-x
                    y1=e.clientY-rect.top;
                    r2= y1-y
                    r=(r1+r2)
                    if(r<0){
                        console.log('entro')
                        r=r*-1
                        console.log(r)}
                    console.log(x,y,r)
                    circulo(x,y, r)
                    x = 0;
                    y = 0;
                    r=0
                    dibujando===false;
                }})

            
            function circulo(x1,y1,r){

                cxt.beginPath();
                cxt.arc( x1,y1,r, Math.PI*0,Math.PI*2,false)
                if(checkBox.checked == true){
                    cxt.fillStyle= color
                    cxt.fill()
                }
                cxt.lineWidth = grosor
                cxt.strokeStyle= color
                cxt.stroke()
                cxt.closePath();

                 }}
    
       

        // bidujo Triangulo Equlilatero
        function TrianguloEqulilatero(){
            canvas.addEventListener('mousedown', function(e){
                x=e.clientX-rect.left;
                y=e.clientY-rect.top;
                console.log(x,y)
                dibujando=true;
            });
            
            canvas.addEventListener('mouseup',function(e){
                if(dibujando===true){
                    x1=e.clientX-rect.left;
                    y1=e.clientY-rect.top;
                    console.log(x1,y1)
                    Triangulo(x,y,x1,y1)
                    x = 0;
                    y = 0;
                    dibujando=false;
                }})
            
            function Triangulo(x,y,x1,y1){
            
                cxt.beginPath();
                cxt.strokeStyle = color;
                if(checkBox.checked == true){
                    cxt.fillStyle = color;
                    //punto abajo izq
                    cxt.moveTo(x,y1)
                    //punto medio
                    n=(x1-x)/2;
                    cxt.lineTo(n+x,y)
                    //punto abajo derch
                    cxt.lineTo(x1,y1)
                    cxt.fill()
                    cxt.closePath();
                } else{
                cxt.moveTo(x,y1);
                //punto abajo derch
                cxt.lineTo(x1,y1);
                cxt.moveTo(x1,y1);
                //medio
                n=(x1-x)/2;
                cxt.lineTo(n+x,y);
                cxt.moveTo(n+x,y);
                cxt.lineTo(x,y1);
                cxt.lineWidth = grosor;
                cxt.stroke();
                cxt.closePath();
                }
            }
                }

        // bidujo Triangulo 
        function TrianguloRectangulo(){
            canvas.addEventListener('mousedown', function(e){
                x=e.clientX-rect.left;
                y=e.clientY-rect.top;
                console.log(x,y)
                dibujando=true;
            });
            
            canvas.addEventListener('mouseup',function(e){
                if(dibujando===true){
                    x1=e.clientX-rect.left;
                    y1=e.clientY-rect.top;
                    console.log(x1,y1)
                    Triangulo(x,y,x1,y1)
                    x = 0;
                    y = 0;
                    dibujando=false;
                }})
            
            function Triangulo(x,y,x1,y1){
            
                cxt.beginPath();
                cxt.strokeStyle = color;
                if(checkBox.checked == true){
                    cxt.fillStyle = color;
                    //punto abajo izq
                    cxt.moveTo(x,y1)
                    //punto medio
                    cxt.lineTo(x,y)
                    //punto abajo derch
                    cxt.lineTo(x1,y1)
                    cxt.fill()
                    cxt.closePath();
                } else{
                cxt.moveTo(x,y1);
                //punto abajo derch
                cxt.lineTo(x1,y1);
                cxt.moveTo(x1,y1);
                //medio
                cxt.lineTo(x,y);
                cxt.moveTo(x,y);
                cxt.lineTo(x,y1);
                cxt.lineWidth = grosor;
                cxt.stroke();
                cxt.closePath();
                }
            }
                }

        // bidujo rombo 
        function Rombo(){
            // numero de lados
            n = 4;
            canvas.addEventListener('mousedown', function(e){
            x=e.clientX-rect.left;
            y=e.clientY-rect.top;
            console.log(x,y)
            dibujando=true;
            });

            canvas.addEventListener('mouseup',function(e){
                if(dibujando===true){
                    x1=e.clientX-rect.left;
                    y1=e.clientY-rect.top;
                    console.log(x1,y1)
                    r=(x1-x)/2
                    cx=(x1-x)/2+x;
                    cy=(y1-y)/2+y;
                    poligono(r,n,cx ,cy)
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
            console.log(x,y)
            dibujando=true;
            });

            canvas.addEventListener('mouseup',function(e){
                if(dibujando===true){
                    x1=e.clientX-rect.left;
                    y1=e.clientY-rect.top;
                    console.log(x1,y1)
                    r=(x1-x)/2
                    cx=(x1-x)/2+x;
                    cy=(y1-y)/2+y;
                    poligono(r,n,cx ,cy)
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
                console.log(x,y)
                dibujando=true;
                });
        
                canvas.addEventListener('mouseup',function(e){
                    if(dibujando===true){
                        x1=e.clientX-rect.left;
                        y1=e.clientY-rect.top;
                        console.log(x1,y1)
                        r=(x1-x)/2
                        cx=(x1-x)/2+x;
                        cy=(y1-y)/2+y;
                        poligono(r,n,cx ,cy)
                        dibujando=false;
                    }}) 
                }


        // bidujo Heptagono 
        function Heptagono(){
            // numero de lados
            n = 7;
            canvas.addEventListener('mousedown', function(e){
                x=e.clientX-rect.left;
                y=e.clientY-rect.top;
                console.log(x,y)
                dibujando=true;
                });
        
                canvas.addEventListener('mouseup',function(e){
                    if(dibujando===true){
                        x1=e.clientX-rect.left;
                        y1=e.clientY-rect.top;
                        console.log(x1,y1)
                        r=(x1-x)/2
                        cx=(x1-x)/2+x;
                        cy=(y1-y)/2+y;
                        poligono(r,n,cx ,cy)
                        dibujando=false;
                    }})       
                }
        
            // bidujo de poligonos 
        function poligono(r,n,cx ,cy){
            cxt.beginPath();
            f = Math.PI / n * 2;

            for ( i = 0; i < n; i++) {
                x = r * Math.cos(i * f) + cx;
                y = r * Math.sin(i * f) + cy;
                
                if (i > 0) {
                    cxt.lineTo(x, y);
                } else {
                    fx = x;
                    fy = y;
                }

                if(checkBox.checked == true){
                    cxt.fillStyle = color;
                    cxt.lineTo(x, y);
                    cxt.fill()
                    } else{
                    cxt.strokeStyle = color;
                    
                    cxt.moveTo(x, y);
                    }
                    }
            cxt.lineWidth = grosor;
            cxt.lineTo(fx, fy);
            cxt.stroke();
            cxt.closePath();
                }

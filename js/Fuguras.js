// bidujo de Figuras
 
function poligono(n,x,y,x1,y1){
    if (n<=7){
        r=(x1-x)/2
        cx=(x1-x)/2+x;
        cy=(y1-y)/2+y;
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
    else if(n==10) {
        cxt.beginPath(); 
        cxt.lineWidth = grosor
        cxt.strokeStyle= color
        if(checkBox.checked == true){
            cxt.fillStyle= color
            
            cxt.fillRect(x,y,x1-x,y1-y)  
        }
        cxt.strokeRect (x,y,x1-x,y1-y)
        cxt.closePath();
    }
    else if(n==11) {
        r1= x1-x; r2= y1-y;
        r=(r1+r2)
        if(r<0){
            r=r*-1}
//dibujo
cxt.beginPath();
    cxt.arc( x,y,r, Math.PI*0,Math.PI*2,false)
    if(checkBox.checked == true){
        cxt.fillStyle= color
        cxt.fill()
    }
    cxt.lineWidth = grosor
    cxt.strokeStyle= color
    cxt.stroke()
    cxt.closePath();
    }
    else if(n==12) {
        cxt.beginPath();
        cxt.strokeStyle = color;
        //inicio
        cxt.moveTo(x,y);
        //final
        cxt.lineTo(x1,y1);
        cxt.lineWidth = grosor;
        cxt.stroke();
        cxt.closePath();
    }
    else if(n==13) {
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
    cxt.closePath();}
    }
    else if(n==14) {
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
    cxt.closePath(); }
    }
    else if(n==15) {
    cxt.beginPath();
    cxt.strokeStyle=color;
    cxt.lineWidth=grosor;
    cxt.moveTo(x,y);
    cxt.lineTo(x1,y1);
    cxt.stroke();
    cxt.closePath();
    }
}
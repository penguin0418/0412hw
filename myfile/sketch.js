p5j.function setup() {
 p5j.createCanvas(600,600);
 p5j.background(255,255,0);
}

p5j.draw=function() {
 var cx = map(mouseX,0,width,0,255);
 var cy = map(mouseY,0,height,0,255);
 var nsize = width/8+cos(mouseY*PI/180)*width/16;

 //互動
   p5j.fill(cx,cy,200,100);
   p5j.square(mouseX,mouseY,nsize);
   p5j.noStroke();
}

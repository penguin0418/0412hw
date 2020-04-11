window.onload = function(){
  // 基本型
  // document.getElementById("cards").innerHTML = "New text!";
  // 定義 html 的內容
  var str="";
  for(var i=0;i<3;i+=1){
    str+=
      '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+ // sketch 將會塞入這裡 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }  
  // 將資料放入 id 為 cards 的 tag 裡面
  document.getElementById("cards").innerHTML = str;
  
  //sketch
  var brushSketch = function(p5j){
    // inital of p5j(processing) structure
    // add all function with p5j header
    p5j.setup = function(){
      p5j.createCanvas(250,250);
      p5j.background(255,255,0);
    }
    // update of sketch
   p5j.draw=function() {
    var cx = p5j.map(p5j.mouseX,0,p5j.width,0,255);
    var cy = p5j.map(p5j.mouseY,0,p5j.height,0,255);
    var nsize = p5j.width/8+p5j.cos(p5j.mouseY*p5j.PI/180)*p5j.width/16;
      // 基本型
    p5j.fill(cx,cy,200,100);
    p5j.square(p5j.mouseX,p5j.mouseY,nsize);
    p5j.noStroke();
   }
 }
  new p5(brushSketch, 'sketch0');
  new p5(brushSketch, 'sketch1');
  new p5(brushSketch, 'sketch2');
}
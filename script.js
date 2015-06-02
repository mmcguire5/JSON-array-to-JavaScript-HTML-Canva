
var xhr = new XMLHttpRequest();

xhr.open("GET", "rectangles.json", true);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        var status = xhr.status;
        
        if((status >= 200 && status < 300) || status === 305){
                    var myData = JSON.parse(xhr.responseText);
                    
                    //alert(myData.shapes.rectangles[0].x);
                    build(myData);
                }
    }
};

xhr.send(null);

function build(data){
    //alert(data.shapes.rectangles[0].width);
    var can = document.getElementById('rectangleCanvas');
    var context = can.getContext('2d');
    for (i=0; i<data.shapes.rectangles.length; i++){
        context.fillStyle = data.shapes.rectangles[i].color;
        context.fillRect(data.shapes.rectangles[i].x, data.shapes.rectangles[i].y, data.shapes.rectangles[i].width, data.shapes.rectangles[i].height);
   } 
}
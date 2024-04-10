function main_load() {
    ctx = canvas.getContext("2d");
    
    

     prevPos = [];
	
	// ctx.strokeStyle = "black";
	
	colorCells = document.getElementsByClassName("colorCell");

    colorCells[0].style.border = "2px solid grey";
	
	ctx.lineWidth = 5; //!!!!
	
	for (var i = 0; i < colorCells.length; i++) {
        colorCells[i].addEventListener('click', changeLineColor, false);
    }

     function changeLineColor(){
		 
			ctx.strokeStyle = this.style.backgroundColor;
			
			this.style.border = "2px solid grey";
	 
	 }
	 
	 function changeLineColor() {
        for (var i = 0; i < colorCells.length; i++) {
            colorCells[i].style.border = "none";
        }

        ctx.strokeStyle = this.style.backgroundColor;
       
            this.style.border = "2px solid black";
      
    }
	
	widthLine.oninput = function(){
		ctx.lineWidth = this.value;
	}
	 
	 
   // функция запускается при нажатии левой клавиши мышки
    canvas.onmousedown = function (e) {
        if (event.button == 0) {
            canvas.onmousemove = mouseMove;

            //получаем координаты курсора мышки
            prevPos = mouseCoords(e);
        }
    };

   //функция запускается при отпускании клавиши мыши
    document.onmouseup = function () {
        canvas.onmousemove = null;
    };

	//функция возвращает координаты курсора мышки
    function mouseCoords(e) {
        var m = [];
        var rect = canvas.getBoundingClientRect();

        m.x = e.clientX - rect.left;
        m.y = e.clientY - rect.top;

        return m;
    }


	//функция запускается при перемещении мыши с нажатой клавишей мыши
	//(много раз, в каждый момент перемещения)

    function mouseMove(e) {
		
		//получаем координаты курсора мышки
        mousePos = mouseCoords(e);

        
		ctx.beginPath();
				
        ctx.moveTo(prevPos.x, prevPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();

        prevPos = mousePos;
    }

 }//end function main_load()
 
 function clearCanvas(){
	 
	 ctx = canvas.getContext("2d");
	 
	 width = canvas.width;
	 height = canvas.height;
	 
	 ctx.clearRect(0, 0, width, height);
	 
}
function SaveImage(){
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = dataURL;
    link.download = "Image.jpg";
    link.click();
    document.body.removeChild(link);
 
}



 
 
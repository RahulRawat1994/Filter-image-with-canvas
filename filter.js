// Image Filter
	function ImageFilter(filterOption ){

		var image=document.getElementById('media_img');
		var canvas= document.createElement("canvas");
		var ctx = canvas.getContext('2d');
		canvas.width=image.width;
		canvas.height=image.height;
		switch(filterOption){
          case 'Normal':{
                ctx.drawImage(image, 0, 0);
				break;
            }
            case 'Moon':{
            	ctx.filter = "grayscale(100%)";
				break;
            }
            case 'Hudson':{
            	ctx.filter = "hue-rotate(30deg) opacity(95%)";
				break;
            }
            case 'Gingham':{
            	ctx.filter = "blur(1px) contrast(90%)";
				break;
            }
            case 'Retro':{
            	ctx.filter = "hue-rotate(90deg) grayscale(50%)";
				break;
            }
        }
    ctx.drawImage(image, 0, 0);
		var canvas_image=canvas.toDataURL();
    document.getElementById('selectedMedia').src=canvas_image;
    // Remove Class
    var elems=document.getElementsByClassName("frame");
    Array.from(elems).forEach(function(elem){
        elem.className=" frame ";
    })
    // Add Class
    document.getElementById(filterOption).className=" frame active ";


}

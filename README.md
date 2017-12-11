# Filter-image-with-canvas

Simple example of apply filter on image using canvas.
```javascript
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
```

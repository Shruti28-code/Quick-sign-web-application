var c= document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.stroke();
c.addEventListener('mousedown', startPainting); 
    c.addEventListener('mouseup', stopPainting); 
    c.addEventListener('mousemove', sketch); 
    let coord = {x:0 , y:0};  
   
let font=document.getElementById("pixel");
 font.addEventListener("input",(event)=>{
  ctx.lineWidth = event.target.value;
 } )

bgc=document.getElementById("bg");
bgc.addEventListener('input', (event) => {
 
  canvas.style.backgroundColor = event.target.value; })

let paint = false; 
    function getPosition(event){ 
        coord.x = event.clientX - canvas.offsetLeft; 
        coord.y = event.clientY - canvas.offsetTop; 
      } 
    function startPainting(event){ 
        paint = true; 
        getPosition(event); 
      } 
      function stopPainting(){ 
        paint = false; 
      } 
          
      function sketch(event){ 
        if (!paint) return; 
        ctx.beginPath(); 
          
        
         
        // Sets the end of the lines drawn 
        // to a round shape. 
        ctx.lineCap = 'round'; 
          
        ctx.strokeStyle = document.getElementById("pen").value; 
            
        // The cursor to start drawing 
        // moves to this coordinate 
        ctx.moveTo(coord.x, coord.y); 
         
        // The position of the cursor 
        // gets updated as we move the 
        // mouse around. 
        getPosition(event); 
         
        // A line is traced from start 
        // coordinate to this coordinate 
        ctx.lineTo(coord.x , coord.y); 
          
        // Draws the line. 
        ctx.stroke(); 
      }
    let clear =document.getElementById("clr");
    clear.addEventListener("click", function clearCanvas(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
    let savebutton=document.getElementById("s&d");
    savebutton.addEventListener("click" ,()=>{
      localStorage.setItem('canvasContents', canvas.toDataURL());
      // Create a new <a> element
      let link = document.createElement('a');

      // Set the download attribute and the href attribute of the <a> element
      link.download = 'my-canvas.png';
      link.href = canvas.toDataURL();

      // Dispatch a click event on the <a> element
      link.click();
  });   
  let    retrieveButton =document.getElementById("savedsign")  ;
  retrieveButton.addEventListener('click', () => {
    // Retrieve the saved canvas contents from local storage
    let savedCanvas = localStorage.getItem('canvasContents');

    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img, 0, 0);
    }
});
   
/* 
 todo

features list;
-draw
-change color
-eraser
-reset //the reset should also reset pen style
-undo and redo button, we need to keep tabs on what was changed
-(cmd+z) to undo
-(cmd+shift+z) to redo
-error handling
-mouse Icon change to show penStyle //we can use document position, while mouse is over document, create a branch for this

*/

/* 
!bugs 

-when drag really fast doesn't register


*/


//the whole sketchPad will be filled with tiles

//create out tile div
let div = document.createElement("div");

//selectors
let sketchPad = document.querySelector(".sketchPad");
let undoBtn = document.querySelector("#undoBtn");
let redoBtn = document.querySelector("#redoBtn");
let redBtn = document.querySelector("#redBtn");
let blueBtn = document.querySelector("#blueBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let resetBtn = document.querySelector("#resetBtn");

let defaultPen ="#0C1844";
let redPen = "#FFB1B1";
let bluePen = "#1679AB";
let eraser = "transparent";

let penStyle = defaultPen;//need to give it an initial color or nothing happens when we draw at page load


//create all the tiles
for(let numTiles=0; numTiles<5000; numTiles++){
    let sketchPad = document.querySelector(".sketchPad");
    let div = document.createElement("div");
    div.id = `div${numTiles}`;
    sketchPad.appendChild(div);
}

let isMouseDown =false;

//event listeners
sketchPad.addEventListener("mousedown", (e)=>{
    isMouseDown = true;

    //so the first tile pressed also gets changed
    let target = e.target;
    let targetID = target.id//this will give me the element its over
    let tile = document.querySelector(`#${targetID}`);
    tile.style.backgroundColor = penStyle;
    // tile.setAttribute("style","backgroundColor:red;")


})

sketchPad.addEventListener("mouseup", ()=>{

    isMouseDown = false;
})


sketchPad.addEventListener("mouseover",(e)=>{

    if (isMouseDown===true){
        let target = e.target;
        let targetID = target.id//this will give me the element its over
        let tile = document.querySelector(`#${targetID}`);
        tile.style.backgroundColor = penStyle;
        // tile.setAttribute("style","backgroundColor:red;")
    }
})

/


//changing pens & eraser


redBtn.addEventListener("click",()=>{
    penStyle = redPen;
})

blueBtn.addEventListener("click",()=>{
    penStyle = bluePen;
})

eraserBtn.addEventListener("click",()=>{
    penStyle = eraser;
})

resetBtn.addEventListener("click",()=>{
    //reset everything including pen
    
    //how to target all the divs in my parent 

    let tilesToReset = sketchPad.querySelectorAll("div");
    penStyle = defaultPen;
    // tilesToReset.style.backgroundColor = "red"; //can't do all tiles at once
    tilesToReset.forEach(tile => {
        tile.style.backgroundColor = eraser;
    });

})




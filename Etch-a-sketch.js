/*
features list;
-draw
-change color
-eraser
-(cmd+z) to undo
-(cmd+shoft+z) to redu
-error handling
-mouse Icon change to show penStyle //we can use document position, while mouse is over document

*/
//the whole sketchPad will be filled with tiles

//create out tile div
let div = document.createElement("div");

let sketchPad = document.querySelector(".sketchPad");

//create all the tiles
for(let numTiles=0; numTiles<1501; numTiles++){
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
    tile.style.backgroundColor = "red";
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
        tile.style.backgroundColor = "red";
        // tile.setAttribute("style","backgroundColor:red;")
    }
})



/*
features list;
-draw
-change color
-eraser
-(cmd+z) to undo
-(cmd+shoft+z) to redu
-error handling

*/
//the whole sketchPad will be filled with tiles

//create out tile div
let div = document.createElement("div");

let sketchPad = document.querySelector(".sketchPad");

//create all the tiles
for(let numTiles=0; numTiles<1001; numTiles++){
    let sketchPad = document.querySelector(".sketchPad");
    let div = document.createElement("div");
    div.id = `div${numTiles}`;
    sketchPad.appendChild(div);
}

let isMouseDown =false;
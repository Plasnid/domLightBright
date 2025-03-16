let pageBody = document.querySelector("body");
let colours = ["off","yellow","magenta","cyan"];
let colorClass = '';
let boardWidth = 5;
let boardHeight = 5;
let controlList = [];
let smiler = [
    [null, null, null, null, null],
    [null, 1, null, 1, null],
    [null, null, 3, null, null],
    [2, null, null, null, 2],
    [2, 2, 2, 2, 2]
]

function buildHeader(){
    let controls = document.createElement("header");
    pageBody.appendChild(controls);
    for(let i=0;i<colours.length;i++){
        let control = document.createElement("div");
        controlList.push(control);
        control.innerText = colours[i];
        control.classList.add("select-colour", "not-selected");
        control.classList.add(colours[i]);
        control.dataset.col = colours[i];
        control.addEventListener("click", colorSelectAction);
        controls.appendChild(control);
    }
}
function buildBoard(){
    let playSpace = document.createElement("div");
    playSpace.id = "playSpace";
    pageBody.appendChild(playSpace);
    for(let y = 0;y<boardHeight;y++){
        let myRow = document.createElement("section");
        playSpace.appendChild(myRow);
        for(let x = 0; x<boardWidth;x++){
            let lightDot = document.createElement("article");
            lightDot.addEventListener("click", dotClickAction);
            myRow.appendChild(lightDot);
        }
    }
}

function colorSelectAction(e){
    for(control of controlList){
        control.classList.add('not-selected');
    }
    if(e.target.dataset.col!="off"){
        colorClass = e.target.dataset.col;
    }else{
        colorClass = null;
    }
    e.target.classList.remove('not-selected');
}

function dotClickAction(e){
    for(clr of colours){
        e.target.classList.remove(clr);
    }
    if(colorClass){
        e.target.classList.add(colorClass);
    }
}
function buildImage(playSpace, imgData){
    console.log(playSpace);
    
    for(let y=0;y<imgData.length;y++){
        console.log(playSpace.childNodes[y])
        for(let x=0;x<imgData[y].length;x++){
            if(imgData[y][x]){
                playSpace.childNodes[y].childNodes[x].classList.add(colours[imgData[y][x]]);
            }
        }
    }
}
buildHeader();
buildBoard();
buildImage(document.querySelector("#playSpace"), smiler);
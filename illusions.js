var pics = [
    "necker_cube.jpg",              //0,2
    "triangle_completion.png",      //1,1
    "duck_or_rabbit.jpg"            //2,0
];

var prev = document.querySelector(".next");
var a_img = document.querySelector("#ni");
var counter = 1;

prev.addEventListener("click", function(){
    if(counter === 3){
        counter = 0;
    }
    a_img.src = pics[counter]
    counter = counter + 1;
});



// distorting
var pics1 = [
    "cw.png",           //0,2
    "el.png",           //1,1
    "ml.png"            //2,0
];

var prev = document.querySelector(".next1");
var d_img = document.querySelector("#cw");
var counter = 1;

prev.addEventListener("click", function(){
    if(counter === 3){
        counter = 0;
    }
    d_img.src = pics1[counter]
    counter = counter + 1;
});


//paradox
var pics2 = [
    "pt1.jpg",           //0,2
    "vi.jpg",           //1,1
];

var prev = document.querySelector(".next2");
var p_img = document.querySelector("#pt");
var counter = 1;

prev.addEventListener("click", function(){
    if(counter === 2){
        counter = 0;
    }
    p_img.src = pics2[counter]
    counter = counter + 1;
});


// grey block
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('gb');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('gb'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 


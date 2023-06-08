let press = $(".click"); 
let block = $("#block"); 
let block2 = $("#block2");
let block3 = $("#block3");  
let block4 = $("#block4"); 
let block6 = $("#block6"); 
let block7 = $("#buttn"); 
let tit = $("#tit"); 
let input = $(".same-width"); 
let inputt = $(".big-width"); 
press.on('click', function(){ 
    block.css( 'background', '#E91145') 
    block2.css( 'background', '#E91145') 
    block3.css( 'background', '#E91145') 
    tit.css( 'background', '#E91145') 
    block6.css( 'background', '#E91145') 
    block7.css( 'background', '#E91145') 
    block4.css( 'border', '2px solid #E91145') 
    input.css( 'background', '#E91145' ,'color' , 'white') 
    inputt.css( 'background', '#E91145' , 'color' , 'white') 
});
let left = document.querySelector(".btn-left");
let right = document.querySelector(".btn-right");
let slider = document.querySelector(".slide");
let blocks = document.querySelectorAll(".slide div");
let counter = 0;
let stepSize = blocks[0].clientWidth + 30;
slider.style.transform = `translateX(`+ `${-stepSize * counter}px)`;right.onclick = function fun1(){
    if(counter >= blocks.length - 1) counter = -1;    console.log("counter", counter);
    console.log("blocks", blocks.length);    counter++;
    slider.style.transform = `translateX(` + `${-stepSize * counter}px)`;    slider.classList.add("transformAnimation");
}
left.onclick = function fun2(){    if(counter <= 0) counter = blocks.length;
    console.log("counter", counter);    console.log("blocks", blocks.length);
    counter--;    slider.style.transform = `translateX(` + `${-stepSize * counter}px)`;
    slider.classList.add("transformAnimation");}

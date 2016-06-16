
//Event Listener for check button
var event1 = document.getElementById("button1");
event1.addEventListener('click', store, false);

var event2 = document.getElementById("button2");
event2.addEventListener('click', display, false);

var event3 = document.getElementById("button3");
event3.addEventListener('click', hide, false);

var event4 = document.getElementById("button4");
event4.addEventListener('click', winner, false);

//create a new array
var contestants = [];

function store(){
    
    //create a new array

    
    //add new item to array
    contestants.push(" " + (document.getElementById("input1").value));
        
}

//display list of contestants
function display(){
        
    document.getElementById("entries").innerHTML = contestants;
     
}

//hide list of contestants
function hide(){
    
    document.getElementById("entries").innerHTML = "";
 
}

function winner(){
    winningContestant = contestants[Math.floor(Math.random() * contestants.length)];
    
    document.getElementById("winner").innerHTML = winningContestant;
}
var wins = 0;
var losses = 0;
var ties = 0;
var random = 0;
var cpu;
let input = prompt("How many times do you want to play?");
let loopTimes = parseInt(input);
for(let i = 0; i < loopTimes; i++){
    input = prompt("Select r/p/s (rock/paper/scissors)");
    random = (Math.floor(Math.random()*3) + 1);
    if(random === 1){
        cpu = "r";
    }else if(random === 2){
        cpu = "p";
    }else if(random === 3){
        cpu = "s";
    }

   if((input === "r" && cpu === "s") || (input === "s" && cpu === "p") || (input === "p" && cpu === "r")){
        wins++;
        alert("You won!");
    }else if((input === "r" && cpu === "p") || (input === "s" && cpu === "r") || (input === "p" && cpu === "s")){
        losses++;
        alert("You lost...");
    }else if((input === "r" && cpu === "r") || (input === "s" && cpu === "s") || (input === "p" && cpu === "p")){
        ties++;
        alert("It's a tie.");
    }
    alert(cpu);
    input = null;
    cpu = null;
}
alert("You have won " + wins + " times, you have lost " + losses + " times, and you have tied " + ties + " times.");
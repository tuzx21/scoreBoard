
let homecount = 0
let homeNumDisplay = document.getElementById("homeNum")
let home1btn = document.getElementById("home1")
let home2btn = document.getElementById("home2")
let home3btn = document.getElementById("home3")

let guestcount = 0
let guestNumDisplay = document.getElementById("guestNum")
let guest1btn = document.getElementById("guest1")
let guest2btn = document.getElementById("guest2")
let guest3btn = document.getElementById("guest3")

let leading = document.getElementById("leading")

function increment(team, value){

    if(team == 0){
       homecount += value
       homeNumDisplay.textContent = homecount 
   }
   else if ( team == 1){
       guestcount += value
       guestNumDisplay.textContent = guestcount
   }

   checkWinner()

}


function checkWinner(){
    if(homecount > guestcount){
        leading.textContent = "Home"
    }
    else if(homecount < guestcount){
        leading.textContent = "Guest"
    }
    else{
        leading.textContent = "Draw"
    }
}


function newGame(){
    homecount = 0
    guestcount = 0
    homeNumDisplay.textContent = homecount 
    guestNumDisplay.textContent = guestcount
    checkWinner()
}

checkWinner()
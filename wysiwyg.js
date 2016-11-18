"use strict";


var input = document.getElementById("keypress-input");
var output = document.getElementById("container");


// Create an array of objects that represents famous people

function getPeople() {               
    //loop to pull the objects information to the page 
    for (var i = 0; i < people.length ; i++) {

        var eachV = people[i];
        var bioCards = `<div class = "bioCards">
                            <header> ${eachV.name} ${eachV.title} </header>
                            <section> ${eachV.bio} </section>
                            <img src = ${eachV.image} >  
                            <p> ${eachV.description} </p>
                            <footer> ${eachV.lifespan.birth} ${eachV.lifespan.death} </footer>
                        </div>`


        //output the cards to the dom 

        output.innerHTML += bioCards;
    }

addBackground (); // this is 
dottedBorder();


function addBackground() {

    var getBioCards = document.getElementsByClassName("bioCards");
    //console.log("test" , getBioCards);

    
    for (var b = 0; b < getBioCards.length ; b ++) {

        if (b % 2 === 0) {

            getBioCards[b].classList.add("blue");

        } else {

            getBioCards[b].classList.add("yellow");
        }
    }
}
   
    


function dottedBorder() {

    var getAllCards = document.getElementsByClassName("bioCards");

    for (var i = 0 ; i < getAllCards.length; i++) {

        //document.getElementById("keypress-input").addEventListener("keypress", keypin) 


        var currentCard = getAllCards[i];


        currentCard.addEventListener("click", function() {
            input.focus(); // this places the cursor back into the input field. 
            this.classList.toggle("dots");
            //this.classList.toggle("dots");
            //customizeCards.event.target.
            mirrorText(this);

        })
    }

}


function mirrorText(currentCard) {

    input.addEventListener("keyup", function(event) {

        if (currentCard.classList.contains("dots")){
            currentCard.querySelector("section").innerHTML = input.value;
        }
        clearText(currentCard);

    })
  //document.getElementById("output").innerHTML = document.getElementById("keypress-input").value 

}

          



function clearText() {

    var input = document.getElementById("input");

    input.addEventListener("keydown", function (event){

    if (event.target.keyCode === 13) {

            input.value = "";
        }
    })
}

}


//End of function 
getPeople();  



let answer1 ="";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";


function test() {
    answer1 = prompt("my name rena   (y/n)");
    answer2 = prompt(" I play sims   (y/n)");
    answer3 = prompt("I watch live act   (y/n)");
    answer4 = prompt("I have a fatbike   (y/n)");
    answer5 = prompt("I want to make a cake   (y/n)");
    
    if(answer1 !== "y"){
        alert("nope Im Rena");
    }else{
        alert("Ya Im rena");
    }

    if(answer2 !== "n"){
        alert("I don't play sims");
    }else{
        alert("It show time!");
    }

    if(answer3 !== "n "){
        alert("Im not big on live action");
    }else{
        alert("Animations are cooler");
    }

    if(answer4 !== "y"){
        alert("nope i have a fatbike");
    }else{
        alert("I love my ebike");
    }

    if(answer5 !== "n"){
        alert("nope im a lazy cook");
    }else{
        alert("Its my dream job");

    }
    
    qust6();
}

function qust6(){
    let tries = 4;
    let answerRight = false;

    while(tries > 0){
        answer6 = prompt("Pick a number between 1 and 10");

    while(answer6 != 4){
        if(answer6 < 4){
            alert("too low try again");
            answer6 = prompt("number between 1 and 10");
        }else if(answer6 > 4){
            alert("too high try again");
            answer6 = prompt("number between 1 and 10");
        }
    }
    }

    
    alert(" (/*￣︶￣)/ you did it \(￣︶￣*\) ");
}

function qust7(){
    
}

let username = "";

function signin() {
    username = prompt("Username?");
    if(username != ''){
        alert("Hello, " + username);
        document.getElementById("user").innerHTML = " (￣︶￣) WELCOME " + username.toLocaleLowerCase();
    } 
    else {
        alert('Iniviled User');
        document.getElementById("user").innerHTML = " (T-T)";
    }
    
}

function dark(){
    var element = document.body;
    element.classList.toggle("darkMode");
}

signin();
let answer1 ="";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";
let trueAW = [ "y","n","n","y","n",4,"a"];
let userAW = [];


function test() {
    answer1 = prompt("my name rena   (y/n)");
    userAW.push(answer1);
    answer2 = prompt(" I play sims   (y/n)");
    userAW.push(answer2);
    answer3 = prompt("I watch live act   (y/n)");
    userAW.push(answer3);
    answer4 = prompt("I have a fatbike   (y/n)");
    userAW.push(answer4);
    answer5 = prompt("I want to make a cake   (y/n)");
    userAW.push(answer5);
    
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
    

    answer6 = prompt("Pick a number between 1 and 10");
    userAW.push(answer6);

    while(answer6 != 4){
        if(answer6 < 4){
            alert("too low try again");
            answer6 = prompt("number between 1 and 10");
            userAW.push(answer6);
        }else if(answer6 > 4){
            alert("too high try again");
            answer6 = prompt("number between 1 and 10");
            userAW.push(answer1);
        }
    }
    alert(" (/*￣︶￣)/ you did it");
    qust7();
}
let answer7 ="a";

function qust7(){
    let tries = 4;
    let answerRight = false;

    while(tries > 0){
        const Uanswer7 = prompt("answer:")
        userAW.push(Uanswer7);
        if(Uanswer7 == null){
            break;
        }else if(Uanswer7 == answer7){
            answerRight = true;
            alert("Goodjod")
            break;
        }
        tries --;
    }
    if(!answerRight){
        alert('You out of tries!');
    }
}

function grade(){
    
}

function ranking(){
    for(let x = 0; x <= userAW.length(); x += 1){
        document.getElementById("rank").innerHTML += "#" ;
    }
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
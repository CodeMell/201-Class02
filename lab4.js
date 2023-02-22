let answer1 ="";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";

function test() {
    answer1.toLocaleLowerCase = prompt("my name rena (y\n)");
    answer2.toLocaleLowerCase = prompt(" I play sims (y\n)");
    answer3.toLocaleLowerCase = prompt("I watch live act (y\n)");
    answer4.toLocaleLowerCase = prompt("I have a fatbike (y\n)");
    answer5.toLocaleLowerCase = prompt("I want to make a cake (y\n)");
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
    
}

let username = "";

function signin() {
    username = prompt("Username?");
    if(username != ''){
        alert("Hello, " + username);
        document.getElementById("user").innerHTML = " (￣︶￣) " + username;
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
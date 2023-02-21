let answer1 ="";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";

function test() {
    answer1.toLocaleLowerCase = prompt("my name rena");
    answer2.toLocaleLowerCase = prompt(" I play sims");
    answer3.toLocaleLowerCase = prompt("I watch live act");
    answer4.toLocaleLowerCase = prompt("I have a fatbike");
    answer5.toLocaleLowerCase = prompt("I want to make a cake");
    if(answer1 !== "y"){
        alert("nope");
       
    }
    else{
        alert("good");
        
    }

    if(answer2 !== "n"){
        alert("nope");
       
    }
    else{
        alert("good");
        
    }

    if(answer3 !== "n "){
        alert("nope");
       
    }
    else{
        alert("good");
        
    }
    
    if(answer4 !== "y"){
        alert("nope");
       
    }
    else{
        alert("good");
        
    }

    if(answer5 !== "n"){
        alert("nope");
       
    }
    else{
        alert("good");
        
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

signin();
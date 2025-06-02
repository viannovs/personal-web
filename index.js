let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hi ${username}, this year you're gonna be ${age}`
}

let age = window.prompt("how old are you?");
age = Number(age);
age+=1;

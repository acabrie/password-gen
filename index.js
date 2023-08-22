const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","&","*","(",")","+","=","{","[","}","]","|","<",">","?",
"/"];

let outputOne = document.getElementById("output1")
let outputTwo = document.getElementById("output2")
let button = document.getElementById("pass-btn")

function generateRandomPass() {
    
    let password = ""
    let passwordTwo = ""
    let length = 12
    let char = characters.join("")
    
    for(let i = 1; i <= length; i++){
        let random = Math.floor(Math.random()* char.length)
        password += char.charAt(random)
        outputOne.value = password
    }
    for(let j = 1; j <= length; j++){
        let random = Math.floor(Math.random()* char.length)
        passwordTwo += char.charAt(random)
        outputTwo.value = passwordTwo
    }
}

function copyPass(){
    outputOne.select();
    document.execCommand("copy")
    alert("copied")
}
function copyPassTwo(){
    outputTwo.select();
    document.execCommand("copy")
    alert("copied")
}
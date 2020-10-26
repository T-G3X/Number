let numberToFind = Math.floor(Math.random() * 101)
let submit = document.getElementById("button")
let userValue = document.getElementById("userValue")
let showMessage = document.getElementById("result")
let node = document.getElementById("submit")
let parentNode = document.getElementById("form")
let button = document.getElementById("button1")
let i = 0


console.log(numberToFind)

//listening the enter key
userValue.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        event.preventDefault()
        getInputValue()
        i = i + 1
    }
    console.log (i);
})


//compare user's number with number to find
function getInputValue(){
    let numberValue = parseInt(userValue.value)
    if (numberValue >= 0 && numberValue < numberToFind) {
        showMessage.innerHTML = "Trop petit"
    }
    else if (numberValue <= 100 && numberValue > numberToFind) {
        showMessage.innerHTML = "Trop grand"
    } else if (numberValue === numberToFind){
        parentNode.removeChild(node)
        button.removeChild(button2)
        showMessage.innerHTML = "Bravo vous avez gagné !" + "<br>" + "<br>" + " Nombre de tentatives " + (i+1)
    }
    else {
        showMessage.innerHTML = "Vous n'avez pas saisi un chiffre compris entre 0 et 100 !"
    }
}
    


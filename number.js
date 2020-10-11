let numberToFind = Math.floor(Math.random() * 101)
let submit = document.getElementById("button")
let userValue = document.getElementById("userValue")
let showMessage = document.getElementById("result")


console.log(numberToFind)

//listening the enter key
userValue.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        event.preventDefault()
        //console.log("fuck you !")
        getInputValue()
    }
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
        showMessage.innerHTML = "GAGNE !"
    }
    else {
        showMessage.innerHTML = "Vous n'avez pas saisi un chiffre compris entre 0 et 100 !"
    }
}
    


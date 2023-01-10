let totalAttempts = 3;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;
//selection
var form = document.querySelector("form")
var cardbody = document.querySelector(".card-body")
var result = form.querySelector(".btn")
var resultText = cardbody.querySelector(".resultText");
var lostWonMessage = document.createElement("p");
var remainingAttempts = cardbody.querySelector(".remainingAttempts");
var guessingNumber = form.querySelector(".guessingNumber")
var message = document.createElement("h5")
var restart = document.querySelector(".re")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    attempts++
    if (attempts === 3) {
        guessingNumber.disabled = true;
        result.disabled = true;
    }
    if (attempts < 4) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerText = `Remaining attempts: ${totalAttempts - attempts
            }`;
    }
    guessingNumber.value = "";
})
function checkResult(guessNumber) {
    var randomNumber = Math.floor(Math.random() * 10) + 1
    if (guessingNumber === randomNumber) {
        resultText.innerText = `you have won`;
        totalWons++;
    } else {
        if (randomNumber > guessNumber) {
            resultText.innerText = `you have lost; random number was greater`;
            totallosts++;
        } if (randomNumber < guessNumber) {
            resultText.innerText = `you have lost; random number was smaller`;
            totallosts++;
        }

    }
    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
    cardbody.appendChild(lostWonMessage);

    if (totalWons > totallosts) {
        message.innerText = "You have won the game"
        cardbody.appendChild(message)
    } else {
        message.innerText = "You have lost the game"
        cardbody.appendChild(message)
    }


}
restart.addEventListener("click", function () {
    window.location.reload()
})

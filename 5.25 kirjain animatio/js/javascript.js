var lettersArray = document.querySelector("h1").innerText.split("")

var container = document.getElementById("container")

for (let i = 0; i < lettersArray.length; i++) {
    const letterElement = document.createElement("span")

    letterElement.classList.add('letter-' + (i + 1))

    letterElement.textContent = lettersArray

    letterElement.appendChild
}
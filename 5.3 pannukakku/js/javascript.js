const question1 = prompt("lempi ruokasi")
const question2 = prompt("🥞 pannukakku")
const question3 = prompt("kai laitoit edelliseen pannukakku")

var text = document.getElementById("text")
const doggie = document.body.style.backgroundImage = "url('dog.gif')"

const person = {
    "cake": question2,
    speak() {
        text.innerText = `${this.cake} on paras`
    },
    doggie,
}
person.speak()

if(question2 == "pannukakku") {
    alert("🎉🎉🎉")
}

var a = true

if(question2 != "pannukakku") {
    alert("ai et laittanut")
    alert("no voi voi")
    while(a == true) {
        alert("jos vain olisit valinnut pannukakun 😭")
    }
}
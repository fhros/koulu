//global jutskat
const question1 = prompt("lempi ruokasi")
const question2 = alert("🥞 pannukakku")
const question3 = prompt("kai laitoit edelliseen pannukakku")
var text = document.getElementById("text")
const doggie = document.body.style.backgroundImage = "url('dog.gif')"
var a = true

//tää juttu en muista mikä tää oli
const person = {
    "cake": question1,
    speak() {
        text.innerText = `${this.cake} on paras`
    },
    doggie,
}
person.speak()

//jos laitoit pannukakku tokaan kysymykseen
if(question1 == "pannukakku") {
    alert("🎉🎉🎉")
}

//jos et laittanut pannukakku tokaan kysymykseen
if(question1 != "pannukakku") {
    alert("ai et laittanut")
    alert("no voi voi")
    while(a == true) {
        alert("jos vain olisit valinnut pannukakun 😭")
    }
}

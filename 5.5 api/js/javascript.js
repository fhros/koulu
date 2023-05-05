//ottaa apin
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&lang=en&type=twopart")
//tekee vastauksesta .json
.then(response => response.json())
//lisää sen sivulle ja näyttää konsolissa
.then(joke => {
    console.log(joke)
    document.getElementById("setup").innerText = joke.setup
    document.getElementById("delivery").innerText = joke.delivery
})

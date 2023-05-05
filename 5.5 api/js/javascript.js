fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&lang=en&type=twopart")
.then(response => response.json())
.then(joke => {
    console.log(joke)
    document.getElementById("setup").innerText = joke.setup
    document.getElementById("delivery").innerText = joke.delivery
})

document.getElementById("btn").addEventListener("click", function(){
    alert("vitsi on valetta")
    document.body.style.backgroundImage = "url('dog.gif')"
})
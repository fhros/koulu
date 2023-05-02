var modal = document.getElementById("modal")

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("testing").style.display = "block"
    modal.style.display = "block"
})

document.getElementById("testing").addEventListener("click", function(){
    document.getElementById("testing").style.display = "none"
    modal.style.display = "none"
})
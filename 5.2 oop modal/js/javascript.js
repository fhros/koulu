//global variable
var modal = document.getElementById("modal")

//button for opening modal
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("testing").style.display = "block"
    modal.style.display = "block"
})

//function to click backgound to close modal
document.getElementById("testing").addEventListener("click", function(){
    document.getElementById("testing").style.display = "none"
    modal.style.display = "none"
})

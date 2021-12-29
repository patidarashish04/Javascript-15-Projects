const colors = ["green", "red", "orange","rgba(133,122,200,)","#266161"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>{
    const randomNumber = randomecolor() 
    document.body.style.backgroundColor= colors[randomNumber]
    color.textContent = colors[randomNumber]
    //console.log(randomecolor()) 
}) 
function randomecolor() {
return Math.floor(Math.random()* colors.length)

}
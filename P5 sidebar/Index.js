const sidebar= document.querySelector(".sidebar")
const togglebtn= document.querySelector(".sidebar-toggle")
const closebtn= document.querySelector(".close-btn")

togglebtn.addEventListener("click", function(){

    // if(sidebar.classList.contains("show-sidebar"))
    // {
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else{
    //     sidebar.classList.add("show-sidebar")
    // }
    sidebar.classList.toggle("show-sidebar")
});

closebtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar")
})
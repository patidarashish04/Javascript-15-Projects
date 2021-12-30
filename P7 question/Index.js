// const questions = document.querySelectorAll(".question")

// questions.forEach((question)=>{
//     const btns = document.querySelector(".question-btn")
// btns.addEventListener("click", ()=>{
// questions.forEach((item)=>{
//     if(item !== question){
//         item.classList.remove("show-text")
//     }
// });
//         question.classList.toggle("show-text")  
    
// });
// });



//teversing the DOM
const btns = document.querySelectorAll(".question-btn")

btns.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("show-text")
})
})

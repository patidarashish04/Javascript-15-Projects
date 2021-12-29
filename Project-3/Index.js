// local reviews data
const reviews = [
    {
      id: 1,
      name: "Reena Singh",
      job: "Node JS Developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Node. js is an open-source and cross-platform JavaScript runtime environment.It is a popular tool for almost any kind of project!",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const img = document.getElementById("person-img")
  const author = document.getElementById("author")
  const job = document.getElementById("job")
  const info = document.getElementById("info") 

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let curentitem = 0;

  window.addEventListener("DOMContentLoaded", function(){
    showpersion()
  });

  function showpersion(){
    const item =reviews[curentitem];
    img.src = item.img;
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
  }

  nextBtn.addEventListener("click", function(){
      curentitem++
      if(curentitem>reviews.length-1){
        curentitem = 0;
      }
      showpersion()
  })
  prevBtn.addEventListener("click", function(){
    curentitem--;
if(curentitem<0){
    curentitem= reviews.length-1;
}
    showpersion()
})
randomBtn.addEventListener("click", function(){
  curentitem = Math.floor(Math.random() * reviews.length);
  //console.log(curentitem)
    showpersion()
})
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const Giveways = document.querySelector(".giveaway")
  const Deadline = document.querySelector(".deadline")
  const DeadlineFormat = document.querySelectorAll(".deadline-format h4")

let tempdate = new Date();
let tempYear = tempdate.getFullYear;

let FutureDate = new Date(2022, 0, 0, 16, 16, 0)
//console.log(FutureDate) 
const year = FutureDate.getFullYear();
const hour = FutureDate.getHours();
const min = FutureDate.getMinutes();

let month = FutureDate.getMonth()
month =months[month]
const date = FutureDate.getDate()

const weekday = weekdays[FutureDate.getDay()]

Giveways.textContent = `Giveaway ends on ${weekday},${date} ${month}, ${year} ${hour}:${min}PM`

const FutureTime = FutureDate.getTime();

function getremainingtime(){
    const Today = new Date().getTime();

    const t = FutureTime-Today
    console.log(t)

    const OneDay = 24 * 60 * 60 * 1000
    const OneHour = 60 * 60 * 1000
    const OneMin = 60 * 1000

     let days = t / OneDay
     days = Math.floor(days)
     let hours = Math.floor((t % OneDay )/OneHour)
     let minutes = Math.floor((t % OneHour )/OneMin)
     let seconds = Math.floor((t % OneMin )/1000)

     console.log(seconds)
     const Values = [days, hours, minutes, seconds ]


     function formate(item){
         if(item<10){
             return (item = `0${item}`)
         }
         return item; 
     }

     DeadlineFormat.forEach((item,index)=>{
     item.innerHTML= Values[index]

     })
     if(t<0){
         clearInterval(countdown)
         Deadline.innerHTML = `<h4 class = "expired">sorry This giveaway has expired !! `
     }
}

let countdown = setInterval(getremainingtime, 1000)
getremainingtime()
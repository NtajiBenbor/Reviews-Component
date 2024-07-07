const reviews = [
    {
        id:0,
        name: "Sandrah Oh",
        job: "Web Developer",
        src: "https://images.pexels.com/photos/3786742/pexels-photo-3786742.jpeg?auto=compress&cs=tinysrgb&w=600",
        review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "
    },
    {
        id:1,
        name: "Peter Straus",
        job: "Data Scientist",
        src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
        review: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. "
    },
    {
        id:2,
        name: "Benedict Ikor",
        job: "Software Engineer",
        src: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
        review: " She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove."
    },
    {
        id:3,
        name: "Maria Melenkovich",
        job: "UI/UX Desginer",
        src: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=600",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt quis maiores fugiat, id recusandae, dicta quisquam repellat consectetur atque velit illo doloribus repudiandae aut excepturi, quae nam! Non, ipsum."
    }
]
//selecting DOM Elements
const pImage = document.querySelector('#personImg');
const pName = document.querySelector('#personName');
const pJob = document.querySelector('#job');
const pReview = document.querySelector('#review');

const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');
const supriseBtn = document.querySelector('#supriseButton');

// value that represents current index of the reviews array
let currentItem = 0;

//  Function that updates person info
function update(person){
    let item = reviews[person];
    pImage.src = item.src
    pName.textContent= item.name
    pJob.textContent = item.job
    pReview.textContent = item.review
}

//show the first persons info when the browser loads by default
window.addEventListener('DOMContentLoaded',()=>{
    update(currentItem);
})

//Show the next person
rightBtn.addEventListener('click',()=>{
    currentItem++
    if(currentItem > reviews.length - 1 ){
        currentItem = 0;
    }
    update(currentItem);
}
)

// show the previous person
leftBtn.addEventListener('click',()=>{
        currentItem--
        if(currentItem < 0 ){
            currentItem = reviews.length -1;
        }
        update(currentItem);
    })


// function that randomly select a person from the array 
function suprise(){
    return Math.floor(Math.random() * reviews.length);
 }

 //event listner on suprise button
supriseBtn.addEventListener('click',()=> {
    currentItem = suprise()
    update(currentItem);
       
})



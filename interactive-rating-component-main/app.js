const card=document.querySelector(".card");
const cardBottom=document.querySelector(".card-bottom");

const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again");
const rating=document.getElementById("rating");
const rates = document.querySelectorAll(".btn")


submitButton.addEventListener("click",()=>{
    cardBottom.classList.remove("hidden");
    card.style.display="none";
});

cardBottom.addEventListener("click",()=>{
    cardBottom.classList.add("hidden");
    card.style.display="block";
});

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML
    })
})


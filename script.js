let selectedDate = "";
let selectedTime = "";
let selectedFood = "";

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;

/* =======================
   NO BUTTON RUN AWAY
======================= */

noBtn.addEventListener("mouseenter", () => {

    const x =
        Math.random()*200 - 100;

    const y =
        Math.random()*80 - 40;

    noBtn.style.transform =
        `translate(${x}px,${y}px)`;

    yesScale += 0.15;

    yesBtn.style.transform =
        `scale(${yesScale})`;
});

/* =======================
   YES CLICK
======================= */

yesBtn.addEventListener("click", () => {

    for(let i=0;i<25;i++){

        setTimeout(()=>{
            createHeart();
        },i*80);
    }

    nextPage(2);
});

/* =======================
   PAGE
======================= */

function nextPage(page){

    document
    .querySelectorAll(".card")
    .forEach(card=>{
        card.classList.remove("active");
    });

    document
    .getElementById(`page${page}`)
    .classList.add("active");
}

/* =======================
   TIME DROPDOWN
======================= */

const timeSelect =
document.getElementById("timeInput");

for(let h=7; h<=20; h++){

    ["00","30"].forEach(min=>{

        if(h===20 && min==="30")
            return;

        const option =
        document.createElement("option");

        option.value =
        `${String(h).padStart(2,"0")}:${min}`;

        option.textContent =
        `${String(h).padStart(2,"0")}:${min}`;

        timeSelect.appendChild(option);
    });
}

/* =======================
   SAVE DATE
======================= */

function saveDate(){

    selectedDate =
        document.getElementById("dateInput").value;

    selectedTime =
        document.getElementById("timeInput").value;

    if(!selectedDate){

        alert(
            "Please choose a date ❤️"
        );

        return;
    }

    nextPage(4);
}

/* =======================
   FOOD
======================= */

function chooseFood(food){

    selectedFood = food;

    document.getElementById(
        "summaryDate"
    ).innerText = selectedDate;

    document.getElementById(
        "summaryTime"
    ).innerText = selectedTime;

    document.getElementById(
        "summaryFood"
    ).innerText = selectedFood;

    nextPage(5);
}

/* =======================
   HEARTS
======================= */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (20 + Math.random()*20)
        + "px";

    document.body.appendChild(
        heart
    );

    setTimeout(()=>{
        heart.remove();
    },4000);
}
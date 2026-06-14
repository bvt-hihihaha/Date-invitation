let selectedDate="";
let selectedTime="";
let selectedFood="";

let scale=1;

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

/* NO BUTTON */

noBtn.addEventListener("mouseenter",()=>{

    const x=Math.random()*120-60;
    const y=Math.random()*60-30;

    noBtn.style.transform=
    `translate(${x}px,${y}px)`;

    scale+=0.1;

    yesBtn.style.transform=
    `scale(${scale})`;

});

/* YES BUTTON */

yesBtn.addEventListener("click",()=>{

    for(let i=0;i<25;i++){

        setTimeout(()=>{
            createHeart();
        },i*80);
    }

    showPage(2);

});

/* CHANGE PAGE */

function showPage(page){

    document
    .querySelectorAll(".page")
    .forEach(p=>p.classList.remove("active"));

    document
    .getElementById("page"+page)
    .classList.add("active");
}

/* TIME DROPDOWN */

const timeInput=
document.getElementById("timeInput");

for(let h=7;h<=20;h++){

    ["00","30"].forEach(min=>{

        if(h===20 && min==="30") return;

        const option=
        document.createElement("option");

        option.value=
        `${String(h).padStart(2,"0")}:${min}`;

        option.textContent=
        `${String(h).padStart(2,"0")}:${min}`;

        timeInput.appendChild(option);

    });
}

/* SAVE DATE */

function saveDate(){

    selectedDate=
    document.getElementById("dateInput").value;

    selectedTime=
    document.getElementById("timeInput").value;

    if(!selectedDate){

        alert("Chọn ngày trước nha ❤️");
        return;
    }

    showPage(4);
}

/* FOOD */

function chooseFood(food){

    selectedFood=food;

    document.getElementById("summaryDate").innerText=
    selectedDate;

    document.getElementById("summaryTime").innerText=
    selectedTime;

    document.getElementById("summaryFood").innerText=
    selectedFood;

    showPage(5);
}

/* HEART EFFECT */

function createHeart(){

    const heart=
    document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=
    Math.random()*100+"vw";

    heart.style.fontSize=
    (20+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

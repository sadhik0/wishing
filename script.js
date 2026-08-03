// =============================
// ROMANTIC WEBSITE
// script.js
// PART 1
// =============================

// Pages
const pages = document.querySelectorAll(".page");

// Progress Bar
const progress = document.getElementById("progress");

// Music
const music = document.getElementById("bgMusic");

// Loader
const loader = document.getElementById("loader");

// Toast
const toast = document.getElementById("toast");

// Love Counter
const counter = document.getElementById("counterValue");

// Heart Container
const hearts = document.getElementById("hearts");

// Heart Rain
const rain = document.getElementById("heartRain");

// Sparkles
const sparkles = document.getElementById("sparkleLayer");

// Fireworks
const fireworks = document.getElementById("fireworkContainer");

// Confetti
const confetti = document.getElementById("confettiContainer");

// Modal
const modal = document.getElementById("modal");

// Summary
const summaryDate = document.getElementById("summaryDate");
const summaryTime = document.getElementById("summaryTime");
const summaryFood = document.getElementById("summaryFood");
const summaryMessage = document.getElementById("summaryMessage");

// Inputs
const datePicker = document.getElementById("datePicker");
const timePicker = document.getElementById("timePicker");
const specialMessage = document.getElementById("specialMessage");

// Buttons
const yes1 = document.getElementById("yes1");
const no1 = document.getElementById("no1");

const yes2 = document.getElementById("yes2");
const no2 = document.getElementById("no2");

const gotoTime = document.getElementById("gotoTime");
const gotoFood = document.getElementById("gotoFood");
const gotoSponsor = document.getElementById("gotoSponsor");

const paidBtn = document.getElementById("paidBtn");

const restartBtn = document.getElementById("restartBtn");

const closeModal = document.getElementById("closeModal");

let page = 0;
let love = 0;
let selectedFood = [];

// =============================
// Loader
// =============================

window.onload = () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

loader.style.display = "none";

pages[0].classList.add("active");

},2000);

};

// =============================
// Page Switch
// =============================

function showPage(index){

pages.forEach(p=>p.classList.remove("active"));

pages[index].classList.add("active");

progress.style.width=((index+1)/pages.length)*100+"%";

}

// =============================
// Toast
// =============================

function showToast(msg){

toast.innerHTML=msg;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

// =============================
// Love Counter
// =============================

function addLove(){

love++;

counter.innerHTML=love;

}

// =============================
// YES BUTTON 1
// =============================

yes1.onclick=()=>{

page=1;

showPage(page);

showToast("I knew you'd say YES ❤️");

music.play();

addLove();

};

// =============================
// YES BUTTON 2
// =============================

yes2.onclick=()=>{

page=2;

showPage(page);

addLove();

showToast("Let's plan our date ❤️");

};

// =============================
// NEXT DATE
// =============================

gotoTime.onclick=()=>{

if(datePicker.value==""){

alert("Choose a date ❤️");

return;

}

page=3;

showPage(page);

};

// =============================
// NEXT TIME
// =============================

gotoFood.onclick=()=>{

if(timePicker.value==""){

alert("Choose a time ❤️");

return;

}

page=4;

showPage(page);

};

// =============================
// FOOD SELECTION
// =============================

document.querySelectorAll(".food").forEach(food=>{

food.onclick=()=>{

food.classList.toggle("selected");

const name=food.dataset.food;

if(selectedFood.includes(name)){

selectedFood=selectedFood.filter(f=>f!==name);

}else{

selectedFood.push(name);

}

};

});

// =============================
// FOOD -> MESSAGE
// =============================

document.getElementById("gotoMessage").onclick=()=>{

page=5;

showPage(page);

};

// =============================
// MESSAGE -> SPONSOR
// =============================

gotoSponsor.onclick=()=>{

page=6;

showPage(page);

};

// =============================
// ROMANTIC WEBSITE
// script.js
// PART 2
// =============================

// =============================
// SMART ESCAPING NO BUTTON
// =============================

function moveButton(btn){

const padding = 30;

const maxX = window.innerWidth - btn.offsetWidth - padding;
const maxY = window.innerHeight - btn.offsetHeight - padding;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

btn.style.left = x + "px";
btn.style.top = y + "px";

const msgs = [

"😜 Nice Try!",
"😂 You almost got me!",
"❤️ Only YES works!",
"🙈 Nope!",
"🥹 Please don't..."
];

showToast(msgs[Math.floor(Math.random()*msgs.length)]);

}

// Desktop
no1.addEventListener("mouseenter",()=>moveButton(no1));
no2.addEventListener("mouseenter",()=>moveButton(no2));

// Mobile
no1.addEventListener("touchstart",(e)=>{
e.preventDefault();
moveButton(no1);
});

no2.addEventListener("touchstart",(e)=>{
e.preventDefault();
moveButton(no2);
});

// =============================
// FLOATING HEARTS
// =============================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);

// =============================
// HEART RAIN
// =============================

function rainHearts(){

for(let i=0;i<40;i++){

setTimeout(()=>{

const h=document.createElement("div");

h.className="rainHeart";

h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(15+Math.random()*25)+"px";

rain.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

},i*120);

}

}

// =============================
// SPARKLES
// =============================

document.addEventListener("mousemove",(e)=>{

const s=document.createElement("div");

s.className="sparkle";

s.style.left=e.pageX+"px";

s.style.top=e.pageY+"px";

sparkles.appendChild(s);

setTimeout(()=>{

s.remove();

},1800);

});

// =============================
// FIREWORKS
// =============================

function firework(){

for(let i=0;i<70;i++){

const f=document.createElement("div");

f.className="firework";

f.style.left=(30+Math.random()*40)+"vw";

f.style.top=(20+Math.random()*40)+"vh";

f.style.background=

`hsl(${Math.random()*360},100%,70%)`;

fireworks.appendChild(f);

const angle=Math.random()*360;

const dist=80+Math.random()*140;

f.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(
${Math.cos(angle)*dist}px,
${Math.sin(angle)*dist}px
)`,

opacity:0

}

],{

duration:900,

fill:"forwards"

});

setTimeout(()=>{

f.remove();

},1000);

}

}

// =============================
// CONFETTI
// =============================

function confettiBlast(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="10px";

c.style.height="18px";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-30px";

c.style.zIndex="99999";

document.body.appendChild(c);

c.animate([

{

transform:"translateY(0) rotate(0deg)"

},

{

transform:

`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*900}deg)`

}

],{

duration:3000+Math.random()*2000,

fill:"forwards"

});

setTimeout(()=>{

c.remove();

},5000);

}

}

// =============================
// PAID BUTTON
// =============================

paidBtn.onclick=()=>{

summaryDate.innerHTML=datePicker.value;

summaryTime.innerHTML=timePicker.value;

summaryFood.innerHTML=

selectedFood.join(", ");

summaryMessage.innerHTML=

specialMessage.value || "Nothing ❤️";

modal.style.display="flex";

};

// =============================
// CLOSE MODAL
// =============================

closeModal.onclick=()=>{

modal.style.display="none";

page=7;

showPage(page);

confettiBlast();

rainHearts();

firework();

showToast("See you soon ❤️");

};

// =============================
// REPLAY
// =============================

restartBtn.onclick=()=>{

location.reload();

};

// =============================
// AUTO FIREWORKS
// =============================

setInterval(()=>{

if(page==7){

firework();

}

},2500);

// =============================
// END OF PART 2
// =============================

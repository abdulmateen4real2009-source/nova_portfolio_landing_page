// SMOOTH CURSOR (optimized)
const cursor = document.querySelector(".cursor");

let x = 0, y = 0;
let fx = 0, fy = 0;

document.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
});

function animateCursor(){
  fx += (x - fx) * 0.15;
  fy += (y - fy) * 0.15;

  cursor.style.left = fx + "px";
  cursor.style.top = fy + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

// TYPEWRITER
const text = "Elite SaaS studio building production-grade systems, UI and automation tools.";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 30);
  }
}
type();

// PROJECT MODAL
const modal = document.getElementById("modal");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");

document.querySelectorAll(".project").forEach(card => {
  card.onclick = () => {
    mTitle.innerText = card.dataset.title;
    mDesc.innerText = card.dataset.desc;
    modal.style.display = "flex";
  };
});

function closeModal(){
  modal.style.display = "none";
}

// GSAP INTRO
gsap.from("h1", {y:40, opacity:0, duration:1});
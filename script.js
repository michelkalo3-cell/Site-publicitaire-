// MODE JOUR/NUIT
function toggleMode() {
  document.body.classList.toggle("light");
}

// SON
let sound = document.getElementById("sound");
let playing = false;

function toggleSound() {
  if (!playing) {
    sound.play();
    playing = true;
  } else {
    sound.pause();
    playing = false;
  }
}

// Effet d’apparition des sections
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
});

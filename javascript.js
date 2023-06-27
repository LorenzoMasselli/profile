const textDisplay = document.querySelector('#headerOne');
// console.log(textDisplay);
let i = 0;
const textHeadingOne = "Hello, It's Me";
const speed = 40;
function typeWriterHeaderOne() {
  if (i < textHeadingOne.length) {
    textDisplay.innerHTML += textHeadingOne.charAt(i);
    i++;
    setTimeout(typeWriterHeaderOne, speed);
  }
}
typeWriterHeaderOne()


window.onload = function loop() {
  document.querySelectorAll('#technologies img').forEach(el => el.setAttribute('width', '20px'));
}
const skills = document.getElementById("skills")
const skillsText = document.getElementById("skills-underline")
skills.addEventListener("mouseover", (event) => {
  skillsText.classList.add("underline-on-scroll")
}, {once : true});

const work = document.getElementById("work")
const workText = document.querySelector("#experience-underline")
work.addEventListener("mouseover", (event) => {
  workText.classList.add("underline-on-scroll")
}, {once : true});

// Education buttons
const leWagon = document.getElementById("le-wagon")
const oxford = document.getElementById("oxford")
const cambridge = document.getElementById("cambridge")
const bocconi = document.getElementById("bocconi")

// Education content
const leWagonContent = document.querySelector(".show-le-wagon")
const oxfordContent = document.querySelector(".show-oxford")
const cambridgeContent = document.querySelector(".show-cambridge")
const bocconiContent = document.querySelector(".show-bocconi")

// Clicks

leWagon.addEventListener("click", () => {
  leWagonContent.classList.toggle("d-none");
  oxfordContent.classList.add("d-none");
  cambridgeContent.classList.add("d-none");
  bocconiContent.classList.add("d-none");
  leWagon.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
  if (leWagonContent.className.includes("d-none")) {
    leWagon.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
  }
})
oxford.addEventListener("click", () => {
  oxfordContent.classList.toggle("d-none")
  cambridgeContent.classList.add("d-none")
  bocconiContent.classList.add("d-none")
  leWagonContent.classList.add("d-none")
  oxford.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
  if (oxfordContent.className.includes("d-none")) {
    oxford.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
  }
})
cambridge.addEventListener("click", () => {
  cambridgeContent.classList.toggle("d-none")
  bocconiContent.classList.add("d-none")
  leWagonContent.classList.add("d-none")
  oxfordContent.classList.add("d-none")
  cambridge.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
  if (cambridgeContent.className.includes("d-none")) {
    cambridge.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
  }
})
bocconi.addEventListener("click", () => {
  bocconiContent.classList.toggle("d-none")
  oxfordContent.classList.add("d-none")
  leWagonContent.classList.add("d-none")
  cambridgeContent.classList.add("d-none")
  bocconi.innerHTML = "<i class='fa-solid fa-caret-up'></i>"
  if (bocconiContent.className.includes("d-none")) {
    bocconi.innerHTML = "<i class='fa-solid fa-caret-down'></i>"
  }
})


// copy to clipboard
const clipboardButton = document.querySelector(".clipboard-button")
const clipboardData = document.getElementById("clipboard")

clipboardButton.addEventListener("click", (event) => {
  navigator.clipboard.writeText(clipboardData.value)
  document.querySelector("#tooltip").title = "Copied to the clipboard"
});

const technicalSkillsButton = document.getElementById("a")
const codingProjectButton = document.getElementById("b")
const workExperienceButton = document.getElementById("c")
const educationButton = document.getElementById("d")

technicalSkillsButton.addEventListener("click", (event) => {
  document.getElementById("skills").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

codingProjectButton.addEventListener("click", (event) => {
  document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

workExperienceButton.addEventListener("click", (event) => {
  document.getElementById("work").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

educationButton.addEventListener("click", (event) => {
  document.getElementById("education").scrollIntoView({ behavior: 'smooth', block: 'center' });
})

const backToTopButton = document.querySelector(".back-to-top")

backToTopButton.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

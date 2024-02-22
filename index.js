const particleContainer = document.querySelector(".particle-container");

function createParticle() {
  const particle = document.createElement("span");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
  particleContainer.appendChild(particle);

  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}

setInterval(createParticle, 300);

const links = document.querySelectorAll(".link");

const updateElements = (ev) => {
  document.querySelector(".current").classList.remove("current");
  ev.target.classList.add("current");
};

links.forEach((element) => {
  element.addEventListener("click", updateElements);
});

const toggleDevMode = () => {
  let body = document.body;

  if (body.className == "dev-modeTi"){
    body.className = "light-mode"
  } else{
    body.className = "dev-mode"
  }
}
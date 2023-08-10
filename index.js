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

// 🎄 Q-Tech Christmas Raffle Script
// Author: Baby & ChatGPT 😚

// Participants list
let participants = [
  "rci", "jgj", "clb", "jlg", "mjdg", "ape", "mfa", "dbs",
  "cbp", "red", "wtl", "mip", "pacu", "nbg"
];

let winners = [];

// Select elements
const drawBtn = document.getElementById("drawBtn");
const currentWinner = document.getElementById("current-winner");
const winnersList = document.getElementById("winners-list");

// Draw winner with suspense delay
drawBtn.addEventListener("click", () => {
  if (participants.length === 0) {
    alert("All participants have already won!");
    return;
  }

  drawBtn.disabled = true;
  currentWinner.textContent = "Drawing...";
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants.splice(randomIndex, 1)[0];
    winners.push(winner);

    currentWinner.textContent = winner.toUpperCase();

    // Add to winners list
    const li = document.createElement("li");
    li.textContent = winner;
    winnersList.appendChild(li);

    // Fire confetti 🎉
    launchChristmasConfetti();

    drawBtn.disabled = false;
  }, 3000); // 3 seconds suspense
});

// 🎉 Confetti Effect (snowflakes + stars)
function launchChristmasConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 1000 };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const colors = ["#ffffff", "#ffcc00", "#99ccff", "#ffffe0"];

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 10,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { y: 0.6 },
      colors: colors,
      shapes: ["star", "circle"]
    });
  }, 200);
}

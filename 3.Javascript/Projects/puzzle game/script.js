const pieces = document.querySelectorAll(".piece");
const zones = document.querySelectorAll(".zone");
const status = document.getElementById("status");
let dragged = null;
/* DRAG EVENTS */
pieces.forEach((piece) => {
  piece.addEventListener("dragstart", () => {
    dragged = piece;
    setTimeout(() => (piece.style.opacity = "0.5"), 0);
  });
  piece.addEventListener("dragend", () => {
    piece.style.opacity = "1";
  });
});
/* ZONE EVENTS */
zones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => e.preventDefault());
  zone.addEventListener("dragenter", () => {
    zone.classList.add("hover");
  });
  zone.addEventListener("dragleave", () => {
    zone.classList.remove("hover");
  });
  zone.addEventListener("drop", () => {
    zone.classList.remove("hover");
    if (!zone.firstChild && dragged) {
      zone.append(dragged);
      checkWin();
    }
  });
});
/* WIN CHECK */
function checkWin() {
  let correct = 0;
  zones.forEach((zone) => {
    const piece = zone.firstChild;
    if (piece && piece.dataset.pos === zone.dataset.pos) {
      zone.classList.add("correct");
      correct++;
    } else {
      zone.classList.remove("correct");
    }
  });
  if (correct === 4) {
    status.innerText = "🎉 Puzzle Completed!";
  }
}

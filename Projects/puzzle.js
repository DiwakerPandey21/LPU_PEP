let draggedPiece = null;
let sourceParent = null;

// Drag start event for pieces
document.querySelectorAll(".piece").forEach(piece => {
  piece.addEventListener("dragstart", (e) => {

    // If locked piece, do not drag
    if (piece.classList.contains("locked")) {
      e.preventDefault();
      return;
    }

    draggedPiece = piece;
    sourceParent = piece.parentElement;
  });
});

// Drop functionality for dropzones + pieces container
document.querySelectorAll(".dropzone, .pieces").forEach(zone => {

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    if (!draggedPiece) return;

    // Dropping back into pieces container
    if (zone.classList.contains("pieces")) {

      draggedPiece.classList.remove("locked");
      zone.appendChild(draggedPiece);

      if (sourceParent.classList.contains("dropzone")) {
        sourceParent.dataset.current = "";
      }

      draggedPiece = null;
      sourceParent = null;

      checkPuzzleComplete();
      return;
    }

    // Dropping into a dropzone
    if (zone.classList.contains("dropzone")) {

      // If dropzone has locked piece, don't replace it
      if (zone.children.length > 0 && zone.children[0].classList.contains("locked")) {
        draggedPiece = null;
        sourceParent = null;
        return;
      }

      // If dropzone already has piece -> swap
      if (zone.children.length > 0) {
        let existingPiece = zone.children[0];

        existingPiece.classList.remove("locked");
        sourceParent.appendChild(existingPiece);

        if (sourceParent.classList.contains("dropzone")) {
          sourceParent.dataset.current = existingPiece.id;
        }
      }

      zone.innerHTML = "";
      zone.appendChild(draggedPiece);
      zone.dataset.current = draggedPiece.id;

      // Clear old dropzone dataset
      if (sourceParent.classList.contains("dropzone")) {
        sourceParent.dataset.current = "";
      }

      draggedPiece = null;
      sourceParent = null;

      checkPuzzleComplete();
    }

  });

});

// Check completion + lock correct pieces + remove borders
function checkPuzzleComplete() {
  let allMatched = true;

  document.querySelectorAll(".dropzone").forEach(zone => {
    let img = zone.querySelector("img");

    if (zone.dataset.correct === zone.dataset.current) {
      if (img) img.classList.add("locked"); // lock correct
    } else {
      if (img) img.classList.remove("locked"); // unlock wrong
      allMatched = false;
    }
  });

  const board = document.querySelector(".board");

  if (allMatched) {
    document.getElementById("resultMessage").style.display = "block";
    board.classList.add("completed"); // remove borders
  } else {
    document.getElementById("resultMessage").style.display = "none";
    board.classList.remove("completed");
  }
}
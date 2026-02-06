function scoreTracker() {
  let score = 0;

  return {
    addScore: function (points) {
      score += points;
    },
    getScore: function () {
      return score;
    }
  };
}

let tracker = scoreTracker();
tracker.addScore(10);
tracker.addScore(5);

console.log(tracker.getScore()); 
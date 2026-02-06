function votingSystem() {
  let yes = 0;
  let no = 0;

  return {
    voteYes: function () {
      yes++;
    },
    voteNo: function () {
      no++;
    },
    result: function () {
      return { yes, no };
    }
  };
}

let vote = votingSystem();
vote.voteYes();
vote.voteYes();
vote.voteNo();

console.log(vote.result());
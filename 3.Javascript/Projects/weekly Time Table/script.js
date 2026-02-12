// This is a timetable object containing days details
var timetable = {
  Monday: "9AM - Javascript Basic\n 11Am- Variable\n2PM-Practice",
  Tuesday: "9AM- Function\n 11AM- Array\n 2PM- Assignment",
  wednesday: "9AM- Objects\n 11AM- DOM Introduction \n 2PM- Mini Projects",
  Thursday: "9AM- Events\n 11AM- DOM ES6 \n 2PM- Practice",
  Friday: "9AM- Revision\n 11AM- DOM Interview Q&A \n 2PM- Test",
};

// DOM Access: code:
var week = document.getElementsByClassName("weeks")[0];
// console.log(week);
var days = document.getElementsByClassName("day");
var infoBox = document.getElementById("infoBox");
// Loop :
for (var i = 0; i < days.length; i++) {
  days[i].addEventListener("mouseenter", function () {
    // remove old highlights:
    for (var j = 0; j < days.length; j++) {
      days[j].classList.remove("highlight");
    }

    // add new highlights:
    this.classList.add("highlight");
    var dayName = this.textContent;

    // show timetable:
    infoBox.textContent =
      "Day:" + dayName + "\n\n" + "Time Table:\n" + timetable[dayName];
  });
  days[i].addEventListener("mouseleave", function () {
    this.classList.remove("highlight");
    infoBox.textContent = "Hover on a day to see timetable!";
  });
}

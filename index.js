const correctAnswerSound = new Audio("sounds/correct-answer-sound.mp3");
const wrongAnswerSound = new Audio("sounds/wrong-answer-sound.mp3");
const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", function () {
    if (this.classList.contains("correct")) {
      this.style.backgroundColor = "green";
      this.style.color = "white";
      correctAnswerSound.play();
      option.disabled = true;
    } else {
      this.style.backgroundColor = "red";
      this.style.color = "white";
      wrongAnswerSound.play();
    }
  });
});

document
  .getElementById("rain-animation-options")
  .addEventListener("click", function () {
    var rainOverlay = document.querySelector(".rain-overlay");
    var button = document.getElementById("rain-animation-options");

    if (rainOverlay.style.animationPlayState === "running") {
      rainOverlay.style.animationPlayState = "paused";
      button.textContent = "☔"; // Change to Umbrella with Rain Drops emoji
      button.classList.remove("rain-on-state");
      button.classList.add("rain-off-state");
    } else {
      rainOverlay.style.animationPlayState = "running";
      button.textContent = "🌧️"; // Change to Cloud with Rain emoji
      button.classList.remove("rain-off-state");
      button.classList.add("rain-on-state");
    }
  });

document
  .getElementById("rain-animation-options")
  .addEventListener("click", function () {
    var bgImg = document.querySelector("picture");
    var rainOverlay = document.querySelector(".rain-overlay");
    var button = document.getElementById("rain-animation-options");

    if (rainOverlay.style.animationPlayState === "running") {
      rainOverlay.style.animationPlayState = "paused";
      button.textContent = "☔"; // Change to Umbrella with Rain Drops emoji
      button.classList.remove("rain-on-button-state");
      button.classList.add("rain-off-button-state");
      bgImg.classList.remove("rain-on-bg-state");
      bgImg.classList.add("rain-off-bg-state");
      rainOverlay.classList.remove("rain-on-overlay-state");
      rainOverlay.classList.add("rain-off-overlay-state");
    } else {
      rainOverlay.style.animationPlayState = "running";
      button.textContent = "🌧️"; // Change to Cloud with Rain emoji
      button.classList.remove("rain-off-button-state");
      button.classList.add("rain-on-button-state");
      bgImg.classList.remove("rain-off-bg-state");
      bgImg.classList.add("rain-on-bg-state");
      rainOverlay.classList.remove("rain-off-overlay-state");
      rainOverlay.classList.add("rain-on-overlay-state");
    }
  });

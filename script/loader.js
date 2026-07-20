document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const storeIcon = document.getElementById("store-icon");
  const graphPath = document.getElementById("graph-path");
  const checkIcon = document.getElementById("check-icon");
  const progressFill = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-text");
  const loaderBottom = document.querySelector(".loader-bottom");

  // SVG Path Definition for "AP" Monogram Initials
  const apMonogramPath = "M 32 110 L 52 50 L 72 110 M 41 85 H 63 M 92 110 V 50 H 122 C 132 50 132 80 122 80 H 92";

  // Timeline Controller
  let progress = 0;
  const duration = 2800; // 2.8 Seconds total
  const intervalTime = 30;
  const increment = 100 / (duration / intervalTime);

  // Sequence 1: Store Icon Fades In Immediately
  requestAnimationFrame(() => {
    storeIcon.classList.add("visible");
  });

  // Sequence 2: Graph Starts Drawing
  setTimeout(() => {
    graphPath.classList.add("drawing");
  }, 400);

  // Sequence 3: Checkmark Appears at Peak
  setTimeout(() => {
    checkIcon.classList.add("visible");
  }, 1500);

  // Sequence 5: Progress Bar Interval (0% to 100%)
  const progressInterval = setInterval(() => {
    progress += increment;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      executeCompletionSequence();
    }

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress)}%`;
  }, intervalTime);

  // Sequence 6: Transformation to "AP" & Exit Transition
  function executeCompletionSequence() {
    setTimeout(() => {
      // Hide Store & Checkmark
      storeIcon.classList.add("fade-out");
      checkIcon.classList.add("fade-out");
      loaderBottom.style.opacity = "0";

      // Morph Graph Path into "AP" Monogram
      graphPath.setAttribute("d", apMonogramPath);
      graphPath.style.stroke = "#FFFFFF";
      graphPath.style.strokeWidth = "3px";

      // Final Fade Out & Removal
      setTimeout(() => {
        loader.classList.add("completed");
        document.body.style.overflow = "auto";

        setTimeout(() => {
          loader.remove();
        }, 800);
      }, 700);

    }, 200);
  }

  // Prevent Scrolling While Loading
  document.body.style.overflow = "hidden";
});
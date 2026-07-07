  const left = document.getElementById("left");
  const right = document.getElementById("right");

  document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", () => {
      if (circle.parentElement === left) {
        right.appendChild(circle);
      } else {
        left.appendChild(circle);
      }
    });
  });
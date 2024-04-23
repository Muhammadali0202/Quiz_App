document.addEventListener("DOMContentLoaded", function() {
  const resultDiv = document.getElementById("result");

  // Retrieve score from session storage and display result
  const score = sessionStorage.getItem("score");
  resultDiv.innerHTML = "<h2>Your score: " + score + "/5</h2>";
});


document.addEventListener("DOMContentLoaded", function() {
  const quizForm = document.getElementById("quizForm");

  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);
    let score = 0;

    formData.forEach((value, key) => {
      // Check if the selected answer matches the correct answer
      if (key === "q1" && value === "2") {
        score++;
      } else if (key === "q2" && value === "2") {
        score++;
      }else if (key === "q3" && value === "2") {
        score++;
      }else if (key === "q4" && value === "3") {
        score++;
      }else if (key === "q5" && value === "4") {
        score++;
      }
      
    });

    
    sessionStorage.setItem("score", score);

    // Redirect to result page
    window.location.href = "result.html";
  });
});

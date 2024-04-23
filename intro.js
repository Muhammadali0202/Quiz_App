
function storeStudentDetails() {
  const rollNumber = document.getElementById("rollNumber").value;
  const name = document.getElementById("name").value;
  const batch = document.getElementById("batch").value;
  const section = document.getElementById("section").value;

  // Create an object to store student details
  const studentDetails = {
    rollNumber: rollNumber,
    name: name,
    batch: batch,
    section: section
  };

  sessionStorage.setItem("studentDetails", JSON.stringify(studentDetails));

  window.location.href = "quiz.html";
}

document.addEventListener("click", function(event) {
  if (event.target && event.target.id === "startQuizButton") {
    storeStudentDetails();
  }
});

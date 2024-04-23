// Define the storeStudentDetails function
function storeStudentDetails() {
  const rollNumber = document.getElementById("rollNumber").value;
  const name = document.getElementById("name").value;
  const batch = document.getElementById("batch").value;
  const section = document.getElementById("section").value;

  if (!rollNumber || !name || !batch || !section) {
    alert("Please enter all the fields before starting the quiz.");
    return; // Exit the function if any field is empty
  }

  // Create an object to store student details
  const studentDetails = {
    rollNumber: rollNumber,
    name: name,
    batch: batch,
    section: section
  };

  // Store student details in Session Storage
  sessionStorage.setItem("studentDetails", JSON.stringify(studentDetails));

  // Redirect to quiz page
  window.location.href = "quiz.html";
}

document.addEventListener("click", function(event) {
  if (event.target && event.target.id === "startQuizButton") {
    storeStudentDetails();
  }
});

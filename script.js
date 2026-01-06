document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;

    let error = document.getElementById("error");
    let success = document.getElementById("success");

    error.innerText = "";
    success.innerText = "";

    if (name === "" || email === "" || phone === "" || dob === "" || course === "") {
        error.innerText = "All fields are required";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        error.innerText = "Enter valid 10-digit phone number";
        return;
    }

    let birthYear = new Date(dob).getFullYear();
    let age = new Date().getFullYear() - birthYear;

    if (age < 17) {
        error.innerText = "Student must be at least 17 years old";
        return;
    }

    let student = {
        name,
        email,
        phone,
        dob,
        course
    };

    localStorage.setItem("studentData", JSON.stringify(student));

    success.innerText = "Admission Form Submitted Successfully!";
    document.getElementById("admissionForm").reset();
});

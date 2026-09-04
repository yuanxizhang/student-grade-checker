function getGrade(marks) {
    if (marks > 100) {
        return "Invalid marks";
    } else if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else if (marks >= 0) {
        return "F";
    } else if (typeof marks !== 'number'|| Number.isNaN(Number(marks)) || marks < 0) {
        return "Invalid marks";
    }
}

function checkGrade() {
    const marksInput = document.getElementById("marks").value;
    const marks = Number(marksInput);

    // 1. Check if it is empty
    if (marksInput.trim() === "") {
        document.getElementById("result").innerHTML =
            "Please enter marks between 0 and 100.";
        return;
    }

    // 2. Check if it's not a number, less than 0, or greater than 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("result").innerHTML = "<span class='text-red-400'>Please enter a valid number between 0 and 100.</span>";
        return;
    }
    const grade = getGrade(marks);
    const studentName = document.getElementById("studentName").value


    document.getElementById("result").innerHTML =
        "The grade for " + studentName + " is <span class='font-bold text-indigo-300 text-lg'>" +
        grade +
        "</span>";
}

if (typeof module !== "undefined") {
    module.exports = { getGrade };
}
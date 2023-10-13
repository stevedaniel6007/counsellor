const attendanceList = document.getElementById("attendanceList");
const teacherIdInput = document.getElementById("teacherId");

teacherIdInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        markAttendance(teacherIdInput.value.trim());
        teacherIdInput.value = ""; 
    }
});

function markAttendance(teacherId) {
    if (teacherId === "") {
        alert("Please enter a valid teacher ID.");
        return;
    }

    
    if (isTeacherAlreadyMarked(teacherId)) {
        alert("Teacher is already marked as present.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = teacherId;
    attendanceList.appendChild(listItem);
}

function isTeacherAlreadyMarked(teacherId) {
    const teacherIds = Array.from(attendanceList.children).map((li) => li.textContent);
    return teacherIds.includes(teacherId);
}

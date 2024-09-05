function toggleActivityId() {
    var leaveType = document.getElementById("leave_type").value;
    var activityIdDiv = document.getElementById("activity_id");
    if (leaveType === "3") {
      activityIdDiv.style.display = "none";
    } else {
      activityIdDiv.style.display = "block";
    }
  }
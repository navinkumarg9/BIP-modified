function handleFormSubmit() {
  const leaveData = getLeaveData();
  updateLeaveTable(leaveData);
  document.getElementById("leave_form").reset();

  const leaveEntries = JSON.parse(localStorage.getItem("leaveEntries")) || [];
  leaveEntries.push(leaveData);
  localStorage.setItem("leaveEntries", JSON.stringify(leaveEntries));
}
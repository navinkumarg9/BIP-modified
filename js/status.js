function getLeaveData() {
  const leaveType = document.getElementById("leave_type").value;
  const fromDate = document.getElementById("from_date").value;
  const toDate = document.getElementById("to_date").value;
  const fromTime = document.getElementById("from_time").value;
  const toTime = document.getElementById("to_time").value;
  const reason = document.getElementById("reason").value;
    
  return {
    leaveType,
    fromDate,
    toDate,
    fromTime,
    toTime,
    reason,
    status: "pending"
  };
}

function updateLeaveTable(leaveData) {
  const tableBody = document.querySelector("#leave_table tbody");
  const newRow = tableBody.insertRow();

  const leaveTypeCell = newRow.insertCell();
  leaveTypeCell.textContent = leaveData.leaveType;

  const fromDateCell = newRow.insertCell();
  fromDateCell.textContent = leaveData.fromDate;

  const toDateCell = newRow.insertCell();
  toDateCell.textContent = leaveData.toDate;

  const fromTimeCell = newRow.insertCell();
  fromTimeCell.textContent = leaveData.fromTime;

  const toTimeCell = newRow.insertCell();
  toTimeCell.textContent = leaveData.toTime;

  const reasonCell = newRow.insertCell();
  reasonCell.textContent = leaveData.reason;

  const statusCell = newRow.insertCell();
  statusCell.classList.add("status", leaveData.status);
  statusCell.textContent = leaveData.status.toUpperCase();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const leaveData = getLeaveData();
  updateLeaveTable(leaveData);
  event.target.reset();

  const leaveEntries = JSON.parse(localStorage.getItem("leaveEntries")) || [];
  leaveEntries.push(leaveData);
  localStorage.setItem("leaveEntries", JSON.stringify(leaveEntries));
}

const leaveForm = document.querySelector("form");
leaveForm.addEventListener("submit", handleFormSubmit);

window.addEventListener("load", function () {
  const leaveEntries = JSON.parse(localStorage.getItem("leaveEntries")) || [];
  const tableBody = document.querySelector("#leave_table tbody");

  leaveEntries.forEach(function (leaveData) {
    const newRow = tableBody.insertRow();

    const leaveTypeCell = newRow.insertCell();
    leaveTypeCell.textContent = leaveData.leaveType;

    const fromDateCell = newRow.insertCell();
    fromDateCell.textContent = leaveData.fromDate;

    const toDateCell = newRow.insertCell();
    toDateCell.textContent = leaveData.toDate;

    const fromTimeCell = newRow.insertCell();
    fromTimeCell.textContent = leaveData.fromTime;

    const toTimeCell = newRow.insertCell();
    toTimeCell.textContent = leaveData.toTime;

    const reasonCell = newRow.insertCell();
    reasonCell.textContent = leaveData.reason;

    const statusCell = newRow.insertCell();
    statusCell.classList.add("status", leaveData.status);
    statusCell.textContent = leaveData.status.toUpperCase();
  });
});

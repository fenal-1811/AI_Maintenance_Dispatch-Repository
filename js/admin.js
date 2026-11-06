const demoTickets = [
    { id: "MNT-1001", employee: "Rahul", issue: "AC is not cooling", category: "HVAC", priority: "High", status: "Pending" },
    { id: "MNT-1002", employee: "Neha", issue: "Water leaking near pantry", category: "Plumbing", priority: "Medium", status: "Assigned" },
    { id: "MNT-1003", employee: "Aarav", issue: "Power socket sparking", category: "Electrical", priority: "Critical", status: "Escalated" },
    { id: "MNT-1004", employee: "Mira", issue: "Printer not responding", category: "IT Equipment", priority: "Low", status: "Completed" }
];
function loadDemo() {
    const rows = demoTickets;
    document.getElementById("totalCount").textContent = rows.length;
    document.getElementById("pendingCount").textContent = rows.filter(x => x.status === "Pending").length;
    document.getElementById("assignedCount").textContent = rows.filter(x => x.status === "Assigned").length;
    document.getElementById("completedCount").textContent = rows.filter(x => x.status === "Completed").length;
    document.getElementById("ticketsBody").innerHTML = rows.map(x => `<tr><td>${x.id}</td><td>${x.employee}</td><td>${x.issue}</td><td>${x.category}</td><td>${x.priority}</td><td><span class="status ${x.status.toLowerCase()}">${x.status}</span></td></tr>`).join("");
}
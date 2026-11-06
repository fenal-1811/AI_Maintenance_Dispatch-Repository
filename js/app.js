// Set this to the WF01 n8n Production URL only after securing the endpoint.
// For local testing, use the Test URL while the workflow is listening for a test event.
const WEBHOOK_URL ="https://fenalfelix07.app.n8n.cloud/webhook-test/maintenance-request";
const form = document.getElementById("requestForm");
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = document.getElementById("result");
    const button = document.getElementById("submitBtn");
    const payload = Object.fromEntries(new FormData(form).entries());
    if (WEBHOOK_URL.includes("REPLACE_WITH")) {
      result.innerHTML = '<div class="alert alert-warning">Add your n8n Webhook URL in js/app.js before submitting.</div>';
      return;
    }
    button.disabled = true;
    button.textContent = "Submitting...";
    result.textContent = "";
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok || data.success === false) throw new Error(data.error || "Request could not be submitted");
      result.innerHTML = `<div class="alert alert-success"><strong>Request received.</strong><br>Ticket: ${escapeHtml(data.ticket_id || "Created")}<br>${escapeHtml(data.message || "Your request has been received.")}</div>`;
      form.reset();
    } catch (error) {
      result.innerHTML = `<div class="alert alert-danger">${escapeHtml(error.message)}<br>Check the webhook URL, n8n execution and CORS settings.</div>`;
    } finally {
      button.disabled = false;
      button.textContent = "Submit maintenance request";
    }
  });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

const form = document.querySelector("#EventTicket");
const typeSelect = document.querySelector("#type");
const accessField = document.querySelector("#accessfield");
const accessLabel = document.querySelector("#accessLabel");
const accessInput = document.querySelector("#accessInput");
const output = document.querySelector("#output");

// Show/hide the student/guest field
function updateAccessField() {
  const value = typeSelect.value;

  if (value === "student") {
    accessLabel.textContent = "Student I#";
    accessInput.placeholder = "Enter 9-digit I-number";
    accessInput.value = "";
    accessInput.required = true;
    accessField.hidden = false;
  } 
  else if (value === "guest") {
    accessLabel.textContent = "Access Code";
    accessInput.placeholder = "EVENT131";
    accessInput.value = "";
    accessInput.required = true;
    accessField.hidden = false;
  } 
  else {
    accessField.hidden = true;
    accessInput.required = false;
  }
}

typeSelect.addEventListener("change", updateAccessField);
updateAccessField();

// Validate date is in the future
function isPastDate(value) {
  const today = new Date();
  today.setHours(0,0,0,0);
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const accessValue = accessInput.value.trim();

  // VALIDATION
  if (type === "") {
    output.textContent = "Please select Student or Guest.";
    return;
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a date later than today.";
    return;
  }

  if (type === "student" && !/^\d{9}$/.test(accessValue)) {
    output.textContent = "Student I# must be exactly 9 digits.";
    return;
  }

  if (type === "guest" && accessValue !== "EVENT131") {
    output.textContent = "Guest access code must be EVENT131.";
    return;
  }

  // SUCCESS OUTPUT
  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Event Date: ${eventDate}</p>
    <p>Type: ${type === "student" ? "Student" : "Guest"}</p>
    `;

  form.reset();
  updateAccessField();
});

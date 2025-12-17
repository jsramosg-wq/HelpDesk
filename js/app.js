const API_URL = "https://TU-BACKEND.onrender.com/api/tickets";

const form = document.getElementById("ticketForm");
const list = document.getElementById("ticketsList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  form.reset();
  loadTickets();
});

async function loadTickets() {
  const res = await fetch(API_URL);
  const tickets = await res.json();

  list.innerHTML = "";
  tickets.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.title} - ${t.status}`;
    list.appendChild(li);
  });
}

loadTickets();

// Toggle Dark Theme
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Handle Contact Form Submission
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        alert("Please fill out all fields.");
    } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset();
    }
});

// Load Users and Populate List
document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
        alert("Failed to load users. Please try again later.");
    }
});

// Toggle FAQ Answer Visibility
document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("visible");
    });

    // Allow toggling with keyboard (accessibility)
    question.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            question.nextElementSibling.classList.toggle("visible");
        }
    });
});

function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }
  }
  setInterval(updateClock, 1000);
  updateClock();
  
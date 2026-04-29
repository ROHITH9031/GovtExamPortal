// Toggle Notifications
document.getElementById("toggleNotifications").addEventListener("click", () => {
  const list = document.getElementById("notificationList");
  list.classList.toggle("hidden");
});

// Search Functionality
document.getElementById("searchBar").addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let cards = document.getElementsByClassName("exam-card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
    cards[i].style.display = title.includes(filter) ? "" : "none";
  }
});

// Paper button interaction
document.querySelectorAll(".paper-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const paper = btn.getAttribute("data-paper");
    alert(`You clicked to download: ${paper.toUpperCase()} question paper`);
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back soon.");
  e.target.reset();
});

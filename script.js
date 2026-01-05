// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
  navLinks.classList.toggle("hidden");
};

// Booking modal
const modal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const selectedPackage = document.getElementById("selectedPackage");

document.querySelectorAll(".openBooking").forEach(btn => {
  btn.onclick = () => {
    selectedPackage.value = btn.dataset.package;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };
});

closeModal.onclick = () => modal.classList.add("hidden");

modal.onclick = e => {
  if (e.target === modal) modal.classList.add("hidden");
};

// WhatsApp auto-message
document.getElementById("bookingForm").onsubmit = e => {
  e.preventDefault();

  const text = `
Hello Wasturwan Travels 👋

📦 Package: ${selectedPackage.value}
👤 Name: ${name.value}
📞 Phone: ${phone.value}
📅 Travel Date: ${date.value}
📝 Message: ${message.value || "N/A"}

Please guide me further.
`;

  const url = `https://wa.me/919906733155?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");

  modal.classList.add("hidden");
};

// DevTools deterrent (basic)
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) e.preventDefault();
});

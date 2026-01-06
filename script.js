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
    modal.setAttribute("aria-hidden", "false");
  };
});

closeModal.onclick = () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
};

modal.onclick = e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
};

// WhatsApp auto-message
document.getElementById("bookingForm").onsubmit = e => {
  e.preventDefault();

  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");
  const dateField = document.getElementById("date");
  const messageField = document.getElementById("message");
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;

  const text = `
Hello Wasturwan Travels 👋

📦 Package: ${selectedPackage.value}
👤 Name: ${nameField.value}
📞 Phone: ${phoneField.value}
📅 Travel Date: ${dateField.value}
📝 Message: ${messageField.value || "N/A"}

Please guide me further.
`;

  if (contactMethod === 'whatsapp') {
    const url = `https://wa.me/917006594976?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  } else {
    // Open Gmail compose with pre-filled details
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=wasturwantravels@gmail.com&su=Booking%20Inquiry&body=${encodeURIComponent(text)}`;
    window.open(gmailUrl, "_blank");
  }

  modal.classList.add("hidden");
};

// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Slider functionality
const slider = document.querySelector('.slider');
if (slider) {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
}

// DevTools deterrent (basic)
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) e.preventDefault();
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};
// ===== GET PACKAGE NAME FROM URL =====
const params = new URLSearchParams(window.location.search);
const pkg = params.get("pkg");

if (pkg) {
  document.getElementById("packageTitle").innerText = pkg;
  document.getElementById("selectedPackage").value = pkg;
}

// ===== POPUP CONTROLS =====
const overlay = document.getElementById("babe_overlay");
const popup = document.getElementById("babe_overlay_container");
const openBtn = document.getElementById("openBooking");
const closeBtn = document.getElementById("closePopup");

if (openBtn) {
  openBtn.onclick = () => {
    overlay.style.display = "block";
    popup.style.display = "block";
    popup.style.opacity = "1";
  };
}

if (closeBtn) {
  closeBtn.onclick = closePopup;
}

if (overlay) {
  overlay.onclick = closePopup;
}

function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
  popup.style.opacity = "0";
}

// ===== WHATSAPP AUTO SEND =====
const form = document.getElementById("bookingForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const pkgName = document.getElementById("selectedPackage").value;
    const msg = document.getElementById("message").value;

    const whatsappNumber = "+917006192778";

    const text =
      `Hello Wasturwan Travels,%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Travel Date: ${date}%0A` +
      `Package: ${pkgName}%0A` +
      `Message: ${msg}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );

    closePopup();
  });
}

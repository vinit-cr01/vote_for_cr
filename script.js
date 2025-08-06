// Script for Vinit's CR Campaign Website

// Alert on page load
window.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Vinit for CR script loaded!");
});

// Fun greeting when hovering over Vinit's image
const vinitImage = document.querySelector("img[alt*='Vinit']");
if (vinitImage) {
  vinitImage.addEventListener("mouseenter", () => {
    vinitImage.style.transform = "scale(1.05)";
    vinitImage.style.transition = "transform 0.3s ease";
  });

  vinitImage.addEventListener("mouseleave", () => {
    vinitImage.style.transform = "scale(1)";
  });
}

// Smooth scroll for navbar links (if nav present)
const navLinks = document.querySelectorAll("nav a[href^='#']");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Add emojis to all bullet points
document.querySelectorAll("li").forEach((li, index) => {
  if (!li.textContent.includes("✅")) {
    li.textContent = `✅ ${li.textContent}`;
  }
});

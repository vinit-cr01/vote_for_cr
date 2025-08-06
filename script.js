// main.js — Vinit for CR ✨ Final Website Script

window.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 main.js loaded for Vinit CR Campaign");

  // Common Welcome Message for Home Page
  if (document.title.includes("Home") || document.title === "Vinit for CR") {
    setTimeout(() => {
      alert("👋 Welcome to Vinit's CR Campaign Website!\nMasti + Management = Vinit");
    }, 700);
  }

  // Fun hover color for nav links
  const navLinks = document.querySelectorAll(".nav-bar a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      const color = `hsl(${Math.random() * 360}, 70%, 75%)`;
      link.style.backgroundColor = color;
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "transparent";
    });
  });

  // Homepage Call-to-Action Button
  const ctaBtn = document.querySelector(".cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("mouseenter", () => {
      ctaBtn.style.transform = "scale(1.1)";
    });
    ctaBtn.addEventListener("mouseleave", () => {
      ctaBtn.style.transform = "scale(1)";
    });
  }

  // About Page: Vinit Image Hover Zoom
  const vinitImg = document.querySelector("img[alt*='Vinit']");
  if (vinitImg) {
    vinitImg.addEventListener("mouseenter", () => {
      vinitImg.style.transform = "scale(1.05)";
      vinitImg.style.transition = "transform 0.3s ease";
    });
    vinitImg.addEventListener("mouseleave", () => {
      vinitImg.style.transform = "scale(1)";
    });
  }

  // Manifesto Page: Auto Add Emoji to Points
  if (document.title.includes("Manifesto")) {
    document.querySelectorAll("li").forEach(li => {
      if (!li.textContent.includes("✅")) {
        li.textContent = `✅ ${li.textContent}`;
      }
    });
  }

  // Contact Page: Alert on form submit
  const contactForm = document.querySelector("form.contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("📬 Thanks! Your message to Vinit has been received. Proxy bhi manage kar lenge 😉");
      contactForm.reset();
    });
  }

  // Scroll Reveal for Vibe Lists (index/manifesto)
  const vibeItems = document.querySelectorAll(".vibe li");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      }
    });
  }, { threshold: 0.2 });

  vibeItems.forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
  });

});

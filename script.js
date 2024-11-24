document.addEventListener("DOMContentLoaded", function () {
    // Typing Animation
    const words = ["DevOps Consultant", "Cloud Enthusiast", "CI/CD Specialist", "Kubernetes Expert"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;
  
    function type() {
      if (charIndex < words[wordIndex].length) {
        currentWord += words[wordIndex].charAt(charIndex);
        document.querySelector(".typing-animation").textContent = currentWord;
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, newWordDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        document.querySelector(".typing-animation").textContent = currentWord;
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed + 1100);
      }
    }
  
    type();
  
    // Animate Progress Bars
    const progressBars = document.querySelectorAll(".progress-done");
    progressBars.forEach((bar) => {
      setTimeout(() => {
        bar.style.width = bar.getAttribute("data-done") + "%";
        bar.style.opacity = 1;
      }, 500);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
  
    // Highlight active section based on scroll
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
  
      navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
  
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          navLinks.forEach(link => link.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
  
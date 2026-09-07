// Portfolio JavaScript

/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }


    const speed = deleting ? 70 : 120;

    setTimeout(typeEffect, speed);
}


typeEffect();

/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function(element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


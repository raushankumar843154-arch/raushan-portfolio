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
// ===============================
// CONTACT FORM - WEB3FORMS
// ===============================

const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        // Stop normal page redirect
        e.preventDefault();

        const button = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = "Sending...";

        formResult.textContent = "";

        const formData = new FormData(contactForm);

        const data = Object.fromEntries(formData.entries());

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            if (result.success) {

                formResult.textContent =
                    "Message sent successfully!";

                formResult.style.color = "green";

                contactForm.reset();

            } else {

                formResult.textContent =
                    result.message ||
                    "Message could not be sent.";

                formResult.style.color = "red";
            }

        } catch (error) {

            console.error(error);

            formResult.textContent =
                "Something went wrong. Please try again.";

            formResult.style.color = "red";

        } finally {

            button.disabled = false;
            button.textContent = originalText;
        }

    });
}


// ========================================
// ARIA — Main JavaScript
// ========================================


// 1. THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀";
        } else {
            themeToggle.textContent = "◐";
        }

    });
}


// 2. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// 3. ARIA DEMO INTERACTION
const aiButton = document.querySelector(".ai-input button");
const aiMessage = document.querySelector(".ai-message p");
const aiInput = document.querySelector(".ai-input input");

const ariaResponses = [
    "I'm ready. What are we creating today?",
    "Interesting idea. Let's turn it into something real.",
    "I've analyzed your idea. Let's build the next step.",
    "Great direction. ARIA is thinking..."
];

let responseIndex = 0;


if (aiButton && aiMessage && aiInput) {

    // BUTTON CLICK
    aiButton.addEventListener("click", () => {

        // Cek input kosong
        if (aiInput.value.trim() === "") {
            aiMessage.textContent = "Please type something first.";
            return;
        }

        // Ubah tombol menjadi Thinking
        aiButton.textContent = "Thinking...";
        aiButton.disabled = true;

        // Tampilkan pesan user
        aiMessage.textContent = aiInput.value;

        // Kosongkan input
        aiInput.value = "";

        // Simulasi ARIA berpikir
        setTimeout(() => {

            aiMessage.textContent = ariaResponses[responseIndex];

            responseIndex++;

            if (responseIndex >= ariaResponses.length) {
                responseIndex = 0;
            }

            // Kembalikan tombol
            aiButton.textContent = "↑";
            aiButton.disabled = false;

        }, 3000);

    });


    // ENTER UNTUK MENGIRIM
    aiInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            aiButton.click();
        }

    });

}


// 4. NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// 5. CURRENT YEAR
const yearElement = document.querySelector(".footer-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".feature-card, .step, .price-card, .faq-list details"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


console.log("ARIA initialized successfully.");
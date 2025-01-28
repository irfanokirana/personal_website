document.getElementById("title").innerText = "Kirana's Personal Portfolio";

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

window.addEventListener("load", () => {
    const corners = document.querySelectorAll(".corner");
    corners.forEach((corner) => {
        corner.classList.add("animate");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const cursor = document.querySelector(".cursor");
    const text = typingText.getAttribute("data-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text[index];
            index++;
            setTimeout(type, 100); // Adjust speed (in milliseconds) as needed
        } else {
            cursor.style.animation = "blink 1s step-end infinite"; // Resume blinking after typing is done
        }
    }

    type();
});
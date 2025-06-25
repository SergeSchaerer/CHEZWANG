document.addEventListener("DOMContentLoaded", () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener("click", () => {
            const message = document.createElement("div");
            message.className = "mail-toast";
            message.innerText = "E-Mail wird geöffnet … 💌";

            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 3000);
        });
    });
});

function customCursor() {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // cursorOutline.style.left = `${posX}px`;
        // cursorOutline.style.top = `${posY}px`;

        const chatBubble = e.target.closest(".chat-bubble");
        if (chatBubble) {
            cursorDot.style.display = "none"; // Hide the cursor
            cursorOutline.style.display = "none"; // You can hide the outline as well if needed
        } else {
            cursorDot.style.display = "block"; // Show the cursor
            cursorOutline.style.display = "block"; // You can show the outline as well if needed
        }

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

export { customCursor };

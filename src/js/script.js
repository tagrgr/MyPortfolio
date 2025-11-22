// Esc to close lightbox
document.addEventListener("keydown", function(esc) {
    if (esc.key === "Escape") {
        // It will close any activated lightbox getting back to its empty hash
        if (window.location.hash.startsWith("#img")) {
            window.location.hash = "";
        }
    }
});

// Close lightbox by clicking X button
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("lightbox-close")) {
        window.location.hash = ""; // remove o #imgX
    }
});

// Prevent background scrolling when lightbox is open
document.addEventListener("hashchange", () => {
    if (window.location.hash.startsWith("#img")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});
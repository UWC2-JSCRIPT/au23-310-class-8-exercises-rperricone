let rgb = 0;

function darkenBackground() {
    if (rgb < 255) {
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(darkenBackground);
    }
}

// Initial call to start the animation
requestAnimationFrame(darkenBackground);
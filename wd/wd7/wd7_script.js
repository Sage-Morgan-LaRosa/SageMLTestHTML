function updateGridColor() {
    const grid = document.getElementById('ghost-grid');
    const x = parseFloat(getComputedStyle(grid).getPropertyValue('--x'));
    const y = parseFloat(getComputedStyle(grid).getPropertyValue('--y'));

    // Calculate HSL values based on x and y
    const hue = (x + 1) * 120; // Example: Adjust hue based on x
    const saturation = 50; // Fixed saturation
    const lightness = (y + 1) * 50; // Example: Adjust lightness based on y

    // Set the new background color
    grid.style.backgroundColor = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
}

// Call this function whenever the transition values change
document.querySelectorAll('#ghost-grid div').forEach(div => {
    div.addEventListener('mouseover', updateGridColor);
});

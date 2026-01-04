window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress-bar');
    const loaderWrapper = document.getElementById('loader-wrapper');

    // Simulate progress while resources load
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            // Short delay at 100% for dramatic effect
            setTimeout(() => {
                loaderWrapper.classList.add('loader-hidden');

                // Optional: Enable scrolling on the body after reveal
                document.body.style.overflow = 'auto';
            }, 500);
        } else {
            width += Math.random() * 15; // Random jumps for "system loading" feel
            if (width > 100) width = 100;
            progressBar.style.width = width + '%';
        }
    }, 150);
});

// Prevent scrolling while loading
document.body.style.overflow = 'hidden';
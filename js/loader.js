export function loaderPage() {
    const progressBar = document.getElementById('progress-bar');
    const loaderWrapper = document.getElementById('loader-wrapper');

    if (!progressBar || !loaderWrapper) return;

    document.body.style.overflow = 'hidden';

    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                loaderWrapper.classList.add('loader-hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        } else {
            width += Math.random() * 15;
            if (width > 100) width = 100;
            progressBar.style.width = width + '%';
        }
    }, 150);
}
